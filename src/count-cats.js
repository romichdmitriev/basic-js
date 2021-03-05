const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {

  if(!matrix && !matrix.length) return 0;

  return matrix.reduce((count, item) => {

    for (let element of item) {

      if (element === '^^') {
        count++;
      }
    }

    return count;
  }, 0);
};
