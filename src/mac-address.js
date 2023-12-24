const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let value = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  let compare = "";
  let test = n.split("-");
  if (test.length != 6) {
    return false;
  }
  test = test.join("");
  for (let i = 0; i <= test.length - 1; i++) {
    for (key in value) {
      if (value[key] == test[i]) {
        compare += value[key];
        break;
      }
    }
  }
  if (test == compare) {
    return true;
  }
  return false;
}
module.exports = {
  isMAC48Address,
};
