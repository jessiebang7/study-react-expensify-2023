import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortyBy to amout', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

// The default value is already 'date', so pass in a state with sortBy: 'amount', to the reducer
test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'filter';
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  let startDate = moment();
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
  expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
  let endDate = moment(123);
  let state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toBe(endDate);
});
