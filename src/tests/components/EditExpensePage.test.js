import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let wrapper, expense, editExpense, removeExpense, history;
beforeEach(() => {
  expense = expenses[1];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpensePage 
    history={history} 
    expense={expense} 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
  />);
});

test('should rendr EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expense.id});
  expect(history.push).toHaveBeenLastCalledWith('/');
});
