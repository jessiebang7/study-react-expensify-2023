import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// export const history = createHistory();

// const baseName = './__study_react/1_The_Complete_React_Developer_Course/s10-s17-083-expensify-app-jess/public'
const pathCur = window.location.pathname;
const baseName = pathCur.substring(0, pathCur.lastIndexOf('/'));
// console.log(baseName);
const historyConfig = { basename: baseName };
export const history = createBrowserHistory(historyConfig);

const AppRouter = () => (
  <Router history={history}>
    <div className='AppRouter'>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}/>
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;