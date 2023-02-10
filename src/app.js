import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water Bill', note: 'Feb 2023 - Water Bill', amount: 4500, createdAt: -100000000}));
store.dispatch(addExpense({ description: 'Gas Bill', note: 'Feb 2023 - Gas Bill', amount: 0, createdAt: 100000000}));
store.dispatch(addExpense({ description: 'Rent', note: 'Feb 2023 - Water Bill', amount: 109500, createdAt: 0}));
// store.dispatch(setTextFilter('water'));
// setTimeout(()=> { store.dispatch(setTextFilter('bill')); }, 3000);

/* 
const demoState = {
  expenses: [{
    id: 'ppp',
    description: 'Jan Rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
} */