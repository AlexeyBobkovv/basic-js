const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!arr.length) { return 1; }
        let max = 0;
        let deepCounter = 1;
        for (let i = 0; i < arr.length; ++i) {
          if (Array.isArray(arr[i])) {
            deepCounter = 1 + this.calculateDepth(arr[i]);
          }
          if (deepCounter > max) {
            max = deepCounter;
            deepCounter = 1;
          }
        }
        return max;
    }
};