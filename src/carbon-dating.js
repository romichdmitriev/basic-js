const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  switch(false) {

    case Boolean(sampleActivity):
    case typeof sampleActivity == "string":
    case Boolean(parseInt(sampleActivity)):
    case sampleActivity > 0:
    case sampleActivity < MODERN_ACTIVITY:
      return false;
  }

  const ratioOfActivities = MODERN_ACTIVITY / +sampleActivity;

  const rateConstant = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(ratioOfActivities) / rateConstant);
}
