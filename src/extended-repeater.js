const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let additionalStr = "";
  for (let el in options) {
    if (el == "addition") {
      options[el] = String(options[el]);
      additionalStr = options[el];
      if (options.hasOwnProperty('addition') && !(options.hasOwnProperty('additionRepeatTimes'))) {
        str += additionalStr;
      }
    }
    if (el == "additionRepeatTimes" && options[el] != 1) {
      if (Object.hasOwn(options, "additionSeparator")) {
        additionalStr += options.additionSeparator;
        additionalStr = additionalStr.repeat(options.additionRepeatTimes);
        additionalStr = additionalStr.slice(0, additionalStr.length - options.additionSeparator.length)
      } else {
        additionalStr += "|";
        additionalStr = additionalStr.repeat(options.additionRepeatTimes);
        additionalStr = additionalStr.slice(0, additionalStr.length - 1)
      }
      str += additionalStr;
    }
    if (el == "additionRepeatTimes" && options[el] == 1) {
      str += additionalStr;
    }
  }
  for (let el in options) {
    if (el == "repeatTimes" && options[el] != 1) {
      if (Object.hasOwn(options, "separator")) {
        str += options.separator;
        str = str.repeat(options.repeatTimes);
        str = str.slice(0, str.length - options.separator.length);
      } else {
        str += "+";
        str = str.repeat(options.repeatTimes);
        str = str.slice(0, str.length - 1);
      }
    }
  }
  return str;
}

module.exports = {
  repeater,
};
