const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = str.split('');
  let counter = 1;
  let result = '';
  for (let i = 0; i <= newStr.length-1; i++) {
    if (newStr[i] == newStr[i+1]) {
      counter += 1;
    }
    else { 
      if (counter == 1) {
        result += `${newStr[i]}`;
      }
      else {
     result += `${counter}${newStr[i]}`; 
    counter = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
