const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor() {
    this.depth = 1;
  }

  calculateDepth = (array) => {

    if(!Array.isArray(array)) {
      return 0;
    }

    return array.length !== 0 ? 1 + Math.max(...array.map(this.calculateDepth)) : 1;
  }
}
