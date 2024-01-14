// Generate int array from given range

// Step 5
// Rename function

'use strict';

const getRangeArray = (first, last) => {
  let result = [];
  for (let i = first; i <= last; i++) {
    result[i - first] = i;
  }
  return result;
};

module.exports = getRangeArray;
