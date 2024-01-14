// Generate int array from given range

// Step 4
// Rename function
// Remove if

'use strict';

const range = (first, last) => {
  let result = [];
  for (let i = first; i <= last; i++) {
    result[i - first] = i;
  }
  return result;
};

module.exports = range;
