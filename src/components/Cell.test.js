import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

const mockCell = (solution, revealed) => ({
  getSolution: () => solution,
  getRevealed: () => revealed
});
describe('Cell', () => {
  it('should render a revealed cell', () => {
    const wrapper = shallow(<Cell cell={mockCell(123, true)} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a hidden cell', () => {
    const wrapper = shallow(<Cell cell={mockCell(321, false)} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should add an error class when the wrong answer is given', () => {
    // This works, but because react hooks are bleeding edge and enzyme hasn't caught up yet it throws some warnings.
    let testRenderer;
    let input;
    act(() => {
      testRenderer = TestRenderer.create(<Cell cell={mockCell(8, false)} />);
      const testInstance = testRenderer.root;
      input = testInstance.findByType('input');
    });

    act(() => {
      input.props['onChange']({
        target: {
          value: 9
        }
      });
    });

    expect(input.props['className']).toBe('cell_input cell_input_wrong');
  });
});
