const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexArr = [];
  arr.forEach((el, index) => {
    if (el == -1) {
      indexArr.push(index);
    }
  });
  for (let i = 0; i <= indexArr.length - 1; i++) {
    arr.splice(indexArr[i] - i, 1);
  }
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i <= indexArr.length - 1; i++) {
    arr.splice(indexArr[i], 0, -1);
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
