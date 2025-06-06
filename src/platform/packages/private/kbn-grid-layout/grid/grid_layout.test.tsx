/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getSampleLayout } from './test_utils/sample_layout';
import { GridLayout, GridLayoutProps } from './grid_layout';
import { gridSettings, mockRenderPanelContents } from './test_utils/mocks';
import { cloneDeep } from 'lodash';
import {
  mouseDrop,
  mouseMoveTo,
  mouseStartDragging,
  touchEnd,
  touchMoveTo,
  touchStart,
} from './test_utils/events';
import { EuiThemeProvider } from '@elastic/eui';
import { GridLayoutData } from './types';

const onLayoutChange = jest.fn();

const renderGridLayout = (propsOverrides: Partial<GridLayoutProps> = {}) => {
  const props = {
    accessMode: 'EDIT',
    layout: getSampleLayout(),
    gridSettings,
    renderPanelContents: mockRenderPanelContents,
    onLayoutChange,
    ...propsOverrides,
  } as GridLayoutProps;

  const { rerender, ...rtlRest } = render(<GridLayout {...props} />, { wrapper: EuiThemeProvider });

  const gridLayout = screen.getByTestId('kbnGridLayout');
  jest.spyOn(gridLayout, 'getBoundingClientRect').mockImplementation(() => {
    return { top: 0, bottom: 500 } as DOMRect;
  });

  return {
    ...rtlRest,
    rerender: (overrides: Partial<GridLayoutProps>) => {
      const newProps = { ...props, ...overrides } as GridLayoutProps;
      return rerender(<GridLayout {...newProps} />);
    },
  };
};

const getAllThePanelIds = () =>
  screen
    .getAllByRole('button', { name: /panelId:panel/i })
    .map((el) => el.getAttribute('aria-label')?.replace(/panelId:/g, ''));

const assertTabThroughPanel = async (panelId: string) => {
  await userEvent.tab(); // tab to drag handle
  await userEvent.tab(); // tab to the panel
  expect(screen.getByLabelText(`panelId:${panelId}`)).toHaveFocus();
  await userEvent.tab(); // tab to the resize handle
};

const getPanelHandle = (panelId: string, interactionType: 'resize' | 'drag' = 'drag') => {
  const gridPanel = screen.getByText(`panel content ${panelId}`).closest('div')!;
  const handleText = new RegExp(interactionType === 'resize' ? /resize to move/i : /drag to move/i);
  return within(gridPanel).getByRole('button', { name: handleText });
};

describe('GridLayout', () => {
  const expectedInitPanelIdsInOrder = [
    'panel1',
    'panel5',
    'panel2',
    'panel3',
    'panel7',
    'panel6',
    'panel8',
    'panel4',
    'panel9',
    'panel10',
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('`onLayoutChange` gets called when layout prop changes', () => {
    const layoutComponent = renderGridLayout();
    onLayoutChange.mockClear();

    const layout = getSampleLayout();

    // if layout hasn't changed, don't call `onLayoutChange`
    layoutComponent.rerender({
      layout,
    });
    expect(onLayoutChange).not.toBeCalled();

    // if layout **has** changed, call `onLayoutChange`
    const newLayout: GridLayoutData = {
      ...cloneDeep(layout),
      panel1: {
        id: 'panel1',
        type: 'panel',
        row: 100,
        column: 0,
        width: 12,
        height: 6,
      },
    };
    layoutComponent.rerender({
      layout: newLayout,
    });
    expect(onLayoutChange).toBeCalledTimes(1);
  });

  describe('dragging sections', () => {
    beforeAll(() => {
      // scroll into view is not mocked by RTL so we need to add this to prevent these tests from throwing
      Element.prototype.scrollIntoView = jest.fn();
    });

    it('section gets active when dragged', () => {
      renderGridLayout();
      expect(screen.getByTestId('kbnGridSectionHeader-second')).not.toHaveClass(
        'kbnGridSectionHeader--active'
      );

      const sectionHandle = screen.getByTestId(`kbnGridSectionHeader-second--dragHandle`);
      mouseStartDragging(sectionHandle);
      mouseMoveTo({ clientX: 256, clientY: 128 });
      expect(screen.getByTestId('kbnGridSectionHeader-second')).toHaveClass(
        'kbnGridSectionHeader--active'
      );

      mouseDrop(sectionHandle);
      expect(screen.getByTestId('kbnGridSectionHeader-second')).not.toHaveClass(
        'kbnGridSectionHeader--active'
      );
    });
  });

  describe('dragging panels', () => {
    it(`'renderPanelContents' is not called during dragging`, () => {
      renderGridLayout();

      // assert that renderPanelContents has been called ONLY ONCE for each of 10 panels on initial render
      expect(mockRenderPanelContents).toHaveBeenCalledTimes(expectedInitPanelIdsInOrder.length);
      jest.clearAllMocks();

      const panelHandle = getPanelHandle('panel1');
      mouseStartDragging(panelHandle);
      mouseMoveTo({ clientX: 256, clientY: 128 });

      // assert that renderPanelContents has not been called during dragging
      expect(mockRenderPanelContents).toHaveBeenCalledTimes(0);

      mouseDrop(panelHandle);
      // assert that renderPanelContents has not beesn called after reordering
      expect(mockRenderPanelContents).toHaveBeenCalledTimes(0);
    });

    it('panel gets active when dragged', () => {
      renderGridLayout();
      const panelHandle = getPanelHandle('panel1');
      expect(screen.getByLabelText('panelId:panel1').closest('div')).not.toHaveClass(
        'kbnGridPanel--active'
      );
      mouseStartDragging(panelHandle);
      mouseMoveTo({ clientX: 256, clientY: 128 });
      expect(screen.getByLabelText('panelId:panel1').closest('div')).toHaveClass(
        'kbnGridPanel--active'
      );
      mouseDrop(panelHandle);
      expect(screen.getByLabelText('panelId:panel1').closest('div')).not.toHaveClass(
        'kbnGridPanel--active'
      );
    });
  });

  describe('panels order: panels are rendered from left to right, from top to bottom', () => {
    it('focus management - tabbing through the panels', async () => {
      renderGridLayout();
      // we only test a few panels because otherwise that test would execute for too long
      await assertTabThroughPanel('panel1');
      await assertTabThroughPanel('panel5');
      await assertTabThroughPanel('panel2');
      await assertTabThroughPanel('panel3');
    });

    it('on initializing', () => {
      renderGridLayout();
      expect(getAllThePanelIds()).toEqual(expectedInitPanelIdsInOrder);
    });

    it('after reordering some panels', async () => {
      renderGridLayout();

      const panelHandle = getPanelHandle('panel1');
      mouseStartDragging(panelHandle);

      mouseMoveTo({ clientX: 256, clientY: 128 });
      // TODO: Uncomment this line when https://github.com/elastic/kibana/issues/220309 is resolved
      // expect(getAllThePanelIds()).toEqual(expectedInitPanelIdsInOrder); // the panels shouldn't be reordered till we mouseDrop

      mouseDrop(panelHandle);
      expect(getAllThePanelIds()).toEqual([
        'panel2',
        'panel5',
        'panel3',
        'panel7',
        'panel1',
        'panel8',
        'panel6',
        'panel4',
        'panel9',
        'panel10',
      ]);
    });

    it('after reordering some panels via touch events', async () => {
      renderGridLayout();

      const panelHandle = getPanelHandle('panel1');
      touchStart(panelHandle);
      touchMoveTo(panelHandle, { touches: [{ clientX: 256, clientY: 128 }] });
      // TODO: Uncomment this line when https://github.com/elastic/kibana/issues/220309 is resolved
      // expect(getAllThePanelIds()).toEqual(expectedInitPanelIdsInOrder); // the panels shouldn't be reordered till we mouseDrop

      touchEnd(panelHandle);
      expect(getAllThePanelIds()).toEqual([
        'panel2',
        'panel5',
        'panel3',
        'panel7',
        'panel1',
        'panel8',
        'panel6',
        'panel4',
        'panel9',
        'panel10',
      ]);
    });

    it('after removing a panel', async () => {
      const { rerender } = renderGridLayout();
      const sampleLayoutWithoutPanel1 = cloneDeep(getSampleLayout());
      delete sampleLayoutWithoutPanel1.panel1;
      rerender({ layout: sampleLayoutWithoutPanel1 });

      expect(getAllThePanelIds()).toEqual([
        'panel2',
        'panel5',
        'panel3',
        'panel7',
        'panel6',
        'panel8',
        'panel4',
        'panel9',
        'panel10',
      ]);
    });

    it('after replacing a panel id', async () => {
      const { rerender } = renderGridLayout();
      const modifiedLayout = cloneDeep(getSampleLayout());
      const newPanel = { ...modifiedLayout.panel1, id: 'panel11' };
      delete modifiedLayout.panel1;
      modifiedLayout.panel11 = newPanel;

      rerender({ layout: modifiedLayout });

      expect(getAllThePanelIds()).toEqual([
        'panel11',
        'panel5',
        'panel2',
        'panel3',
        'panel7',
        'panel6',
        'panel8',
        'panel4',
        'panel9',
        'panel10',
      ]);
    });
  });
});
