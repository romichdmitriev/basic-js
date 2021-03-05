/*const CustomError = require("../extensions/custom-error");*/

class VigenereCipheringMachine {

  constructor(type) {

    if(type) {
      this.typeOfMachine = true;
    } else {
      this.typeOfMachine = false;
    }

    this.alphabite = [
      "A","B","C","D","E","F",
      "G","H","I","J","K","L",
      "M","N","O","P","Q","R",
      "S","T","U","V","W","X",
      "Y","Z"
    ]
  }

  encrypt = (message, key) => {

    if(!message || !key) {
      throw new Error('error');
    }

    //Do length of key same as message
    const countOfRepeatKey = Math.ceil(message.length / key.length);
    let newKey = key.toUpperCase().repeat(countOfRepeatKey).slice(0, message.length);

    //Change letters of message and key with numbers
    const messageNumbers = [];

    for(let letter of message.toUpperCase()) {

      if(letter === "!") {
        messageNumbers.push("!");
      } else if(letter === " ") {
        messageNumbers.push(" ");
      } else {
        messageNumbers.push(this.alphabite.indexOf(letter));
      }
    }

    console.log(messageNumbers);

    const keyNumbers = [];

    for(let letter of newKey) {

      keyNumbers.push(this.alphabite.indexOf(letter));
    }

    console.log(keyNumbers);

    const cryptNumbers = [];

    for(let i = 0; i < messageNumbers.length; i++) {

      if((messageNumbers[i] + keyNumbers[i]) >= 26) {

        cryptNumbers[i] = (messageNumbers[i] + keyNumbers[i]) % 26;
      } else if (typeof messageNumbers[i] === "string") {
          cryptNumbers[i] = messageNumbers[i];
        } else {
        cryptNumbers[i] = messageNumbers[i] + keyNumbers[i];
      }
    }

    if(this.typeOfMachine) {

      return cryptNumbers.map((item) => {

        if(typeof item === "string") {
          return item;
        }

        return this.alphabite[item];
      }).join("");
    }

    return cryptNumbers.map((item) => {

      if(typeof item === "string") {
        return item;
      }

      return this.alphabite[item];
    }).reverse().join("");
  }

  decrypt = (message, key) => {

    if(!message || !key) {
      throw new Error('error');
    }

    //Do length of key same as message
    const countOfRepeatKey = Math.ceil(message.length / key.length);
    const newKey = key.repeat(countOfRepeatKey);
    newKey.length = message.length;

    //Change letters of message and key with numbers
    const messageNumbers = [];

    for(let letter of message) {

      messageNumbers.push(this.alphabite.indexOf(letter));
    }

    const keyNumbers = [];

    for(let letter of newKey) {

      keyNumbers.push(this.alphabite.indexOf(letter));
    }

    const decryptNumbers = [];

    for(let i = 0; i < messageNumbers.length; i++) {

      if((messageNumbers[i] - keyNumbers[i]) < 0) {

        decryptNumbers[i] = messageNumbers[i] - keyNumbers[i] + 26;
      }

      decryptNumbers[i] = messageNumbers[i] - keyNumbers[i];
    }

    if(typeOfMachine) {

      return decryptNumbers.map((item) => {

        return this.alphabite[item];
      });
    }

    return decryptNumbers.map((item) => {

      return this.alphabite[item];
    }).reverse();
  }
}

/*module.exports = VigenereCipheringMachine;*/

const directMachine = new VigenereCipheringMachine(true);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
