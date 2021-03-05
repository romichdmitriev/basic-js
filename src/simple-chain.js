const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {

    return this.chain.length;
  },

  addLink(value = "") {

    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {

    if(!position || typeof position != 'number') {

      this.chain.length = 0;

      throw new Error('error');
    }

    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {

    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {

    const chain = this.chain.join('~~');

    this.chain.length = 0;

    return chain;
  }
};

module.exports = chainMaker;
