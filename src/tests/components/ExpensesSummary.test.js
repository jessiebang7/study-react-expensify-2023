import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should ExpensesSummary render correctly with 2 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensestotal={'$94.34'}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should ExpensesSummary render correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensestotal={'$94.34'}/>);
  expect(wrapper).toMatchSnapshot();
});