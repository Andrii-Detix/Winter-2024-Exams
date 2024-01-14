// Find longest string

// Step 6
// Change if..else branches
// Change let str to const str

'use strict';

const getLongestString = (lines = []) => {
  let maxLength = -1;
  let res;
  for (const str of lines) {
    if (str.length > maxLength) {
      maxLength = str.length;
      res = str;
    }
  }
  return res;
};

module.exports = getLongestString;
