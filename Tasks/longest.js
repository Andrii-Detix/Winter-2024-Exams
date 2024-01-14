// Find longest string

// Step 5
// Improve naming

'use strict';

const getLongestString = (lines = []) => {
  let maxLength = -1;
  let res;
  for (let str of lines) {
    if (str.length > maxLength) {
      maxLength = str.length;
    } else {
      str = 0;
    }
    if (str.length >= maxLength) {
      res = str;
    }
  }
  return res;
};

module.exports = getLongestString;
