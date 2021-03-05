const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|"}) {

  if(typeof str === undefined) {
    return;
  }

  switch(true) {

    case (!typeof str === 'string'):
      str = String(str);
    case (!typeof addition === 'string'):
      addition = String(addition);
  }

  const additionRepetition = `${addition}${additionSeparator}`.repeat(additionRepeatTimes - 1);
  const additionString = `${additionRepetition}${addition}`;
  const stringRepetition = `${str}${additionString}${separator}`.repeat(repeatTimes - 1);

  return `${stringRepetition}${str}${additionString}`;
}
  