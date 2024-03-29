import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
  // const store = createStore(expensesReducer);
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(thunk) // When not using the devtool above
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}