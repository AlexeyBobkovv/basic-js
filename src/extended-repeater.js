const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let additionStr = '';

  let origin = str === null ? 'null' : str;
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  
  if (options.addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (options.addition === null) {
        additionStr += 'null';
      } else {
        additionStr += options.addition.toString();
      }
      if (i + 1 != additionRepeatTimes) {
        additionStr += additionSeparator;
      }
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    result += origin.toString() + additionStr;
    if (i + 1 != repeatTimes) {
      result += separator;
    }
  }

  return result;
};
  