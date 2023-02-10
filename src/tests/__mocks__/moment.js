// import moment from 'moment'; <-- can't use this import
const moment = require.requireActual('moment');

export default (timestamp=0) => {
  return moment(timestamp)
}