import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseFilters from './ExpenseListFilters';

export const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;