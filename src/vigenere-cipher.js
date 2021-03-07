const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {

    type === false ? this.typeOfMachine = false : this.typeOfMachine = true;

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

    const newKey = this.getKeyWithSameLengthOfMessage(message, key);

    const {messageNumbers, keyNumbers} = this.getMessageAndKeyNumbers(message, newKey);

    const cryptNumbers = [];

    for(let i = 0; i < messageNumbers.length; i++) {

      if(typeof messageNumbers[i] === "string") {
        cryptNumbers[i] = messageNumbers[i];
      } else {
        cryptNumbers[i] = (messageNumbers[i] + keyNumbers[i]) % 26;
      }
    }

    return this.getResultOfMachine(cryptNumbers);
  }

  decrypt = (message, key) => {

    if(!message || !key) {
      throw new Error('error');
    }

    const newKey = this.getKeyWithSameLengthOfMessage(message, key);

    const {messageNumbers, keyNumbers} = this.getMessageAndKeyNumbers(message, newKey);

    const decryptNumbers = [];

    for(let i = 0; i < messageNumbers.length; i++) {

      if(typeof messageNumbers[i] === "string") {
        decryptNumbers[i] = messageNumbers[i];
      } else {

        decryptNumbers[i] = (messageNumbers[i] - keyNumbers[i] + 26) % 26;
      }
    }

    return this.getResultOfMachine(decryptNumbers);
  }

  getKeyWithSameLengthOfMessage = (message, key) => {

    const messageWords = message.split(" ");

    //Do length of key same as message
    const countOfRepeatKey = Math.ceil(message.length / key.length);
    let newKey = key.toUpperCase().repeat(countOfRepeatKey).split('');

    //1. Add spaces in key
    let lastLength = 0;
    for(let item of messageWords) {

      newKey.splice(item.length + lastLength, 0, " ");
      lastLength = item.length + lastLength + 1;
    }

    //2.Return length of key equal to message
    return newKey.join("").slice(0, message.length);
  }

  getMessageAndKeyNumbers = (message, key) => {

    //Change letters of message and key with numbers
    const messageNumbers = [];

    for(let letter of message.toUpperCase()) {

      if(this.alphabite.includes(letter)) {
        messageNumbers.push(this.alphabite.indexOf(letter));
      } else {
        messageNumbers.push(letter);
      }
    }

    const keyNumbers = [];

    for(let letter of key) {

      keyNumbers.push(this.alphabite.indexOf(letter));
    }

    return {messageNumbers, keyNumbers};
  }

  getResultOfMachine = (arrayOfNumbers) => {

    if(this.typeOfMachine) {

      return arrayOfNumbers.map((item) => {

        if(typeof item === "string") {
          return item;
        }

        return this.alphabite[item];
      }).join("");
    }

    return arrayOfNumbers.map((item) => {

      if(typeof item === "string") {
        return item;
      }

      return this.alphabite[item];
    }).reverse().join("");
  }
}
module.exports = VigenereCipheringMachine;
/*
const directMachine = new VigenereCipheringMachine();

console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));*/
