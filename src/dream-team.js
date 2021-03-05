const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)) {
    return false;
  }

  return members.map((item) => {

    if(typeof item === "string") {

      if(item.includes(" ")) {

        return item.trim().split(" ").map((element, index) => {
          if(!index) {
            return element.slice(0, 1).toUpperCase();
          }
        }).join("");
      }

      return item.slice(0, 1).toUpperCase();
    }
  }).sort().join("");
}
