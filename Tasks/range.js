// Generate int array from given range

// Step 3
// Change parameters
// Declare array 'result'
// Replace variable 'Range' with 'arr', 'from' and 'to' with 'first' and 'last'
// Remove unneeded code

'use strict';

const _range = (first, last) => {
  let result = [];
  if (last >= first) {
    for (let i = first; i <= last; i++) {
      result[i - first] = i;
    }
  }
  return result;
};

module.exports = _range;
