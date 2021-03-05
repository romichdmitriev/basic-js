const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("error");
  }

  return arr.reduce((accum, item, index, array) => {

    switch(true) {

      case item === "--double-prev":
        accum.push(accum[index - 1]);
        return accum;

      case item === "--double-next":
        accum.push(array[index + 1]);
        return accum;

      case array[index - 1] === "--discard-next":
      case array[index + 1] === "--discard-prev":
        accum.push(null);
        return accum;

      default:
        accum.push(item);
        return accum;
    }
  },[]).filter((item) => {

    switch(true) {

      case item === null:
      case item === undefined:
      case item === "--double-prev":
      case item === "--double-next":
      case item === "--discard-next":
      case item === "--discard-prev":
        return false;
      default:
        return true;
    }
  });
}
