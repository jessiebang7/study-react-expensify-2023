import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let wrapper, expense, startEditExpense, startRemoveExpense, history;
beforeEach(() => {
  expense = expenses[1];
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpensePage 
    history={history} 
    expense={expense} 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
  />);
});

test('should rendr EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
  expect(history.push).toHaveBeenLastCalledWith('/');
});
