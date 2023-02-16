import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.dispatch(startAddExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className='AddExpensePage'>
        <div className="page-header">
          <div class='content-container'>
            <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )  
  }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage)