const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newStr1 = s1.split("");
  let newStr2 = s2.split("");
  let common = [];
  for (let i = 0; i <= newStr1.length - 1; i++) {
    let index = newStr2.indexOf(newStr1[i]);
    if (!common.includes(index) && index != -1) {
      common.push(index);
    } else {
      index = newStr2.indexOf(newStr1[i], index + 1);
      if (index != -1) {
        common.push(index);
      }
    }
  }
  return common.length;
}

module.exports = {
  getCommonCharacterCount,
};
