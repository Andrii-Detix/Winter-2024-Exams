// Find longest string

// Step 7
// Rename 'lines' to 'strings'

'use strict';

const getLongestString = (strings = []) => {
  let maxLength = -1;
  let res;
  for (const str of strings) {
    if (str.length > maxLength) {
      maxLength = str.length;
      res = str;
    }
  }
  return res;
};

module.exports = getLongestString;
