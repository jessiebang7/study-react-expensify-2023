import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {
  render() {
    return (
      <p>Viewing {this.props.expenseCount} expense{this.props.expenseCount>1 &&'s'} totaling {numeral(this.props.expensesTotal/100).format('$0,0.00')} </p>
    )
  }
}

const mapStateToProps = (state) => ( {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  }
)
export default connect(mapStateToProps)(ExpensesSummary);