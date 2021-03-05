const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(!date) {
    return 'Unable to determine the time of year!'
  }

  if(!isNaN(date) && !date instanceof Date) {
    throw new Error('error');
  }

  switch(date.getMonth()) {

    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'autumn';
    case null:
      return 'THROWN';
  }
}