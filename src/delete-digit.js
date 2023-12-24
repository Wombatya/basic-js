const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const newN = n.toString().split("");
  for (let i = 0; i <= newN.length - 1; i++) {
    let example = newN.concat([]);
    example.splice(i, 1);
    if (+example.join("") > result) {
      result = +example.join("");
    }
  }
  return result;
}

module.exports = {
  deleteDigit,
};
