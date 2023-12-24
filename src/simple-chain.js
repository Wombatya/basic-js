const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.split('').reverse().length;
  },
  addLink(value) {
    if (this.chain.split('').length == 0){
      if (value === undefined) {
      this.chain += '( )';
      }
      else {
        this.chain += `( ${value} )`;
      };
      console.log(this.chain)
    }
      else {
        if (value === undefined) {
     this.chain += '( )';   
      }
        else { 
        this.chain += `~~( ${value} )`;
        }
    }
   return this; 
  },
  removeLink(position) {
    let checkPos = this.chain.split('~~').length;
    if (position <= 0 || position > checkPos || !(isFinite(position))) {
      this.chain = '';
      throw new Error (`You can't remove incorrect link!`);
    }
    else {
      this.chain = this.chain.split('~~');
      this.chain.splice(position-1, 1);
      this.chain = this.chain.join('~~')
     return this;
    }
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
  return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
