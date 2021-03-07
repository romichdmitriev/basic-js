const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("error");
  }

  return arr.reduce((accum, item, index, array) => {

      if(item === "--double-prev") {
        accum.push(accum[index - 1]);
        return accum;
      }

      if(item === "--double-next") {
        accum.push(array[index + 1]);
        return accum;
      }

      if(array[index - 1] === "--discard-next" || array[index + 1] === "--discard-prev") {
        accum.push(null);
        return accum;
      }

      accum.push(item);
      return accum;
  },[]).filter((item) => {

    switch(item) {

      case null:
      case undefined:
      case "--double-prev":
      case "--double-next":
      case "--discard-next":
      case "--discard-prev":
        return false;
      default:
        return true;
    }
  });
}
