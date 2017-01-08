var moment = require('moment'),
weekendRate = 6,
weekdayRate = 7,
args = process.argv.slice(2),
dateFormat = 'DD/MM/YYYY',
startDate = (args.length >= 1) ? moment(args[0], dateFormat) : moment().startOf('month'),
endDate = (args.length === 2) ? moment(args[1], dateFormat) : moment().endOf('month').startOf('day');

function calculateNewspaperBill(startDate, endDate){
  var _total = 0,
  _date = startDate;
  endDate.add(1, 'days');
  while(_date.isBefore(endDate)){
    var _price = getNewspaperPrice(_date);
    _total += _price;
    _date.add(1, 'days');
  }
  return _total;
}

function getNewspaperPrice(date){
  if(isDateWeekday(date)){
    return weekdayRate;
  }
  return weekendRate;
}

function isDateWeekday(date){
  var _day = date.day();
  return _day > 0 && _day < 6;
}
console.log(calculateNewspaperBill(startDate, endDate));
