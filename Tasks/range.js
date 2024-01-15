// Generate int array from given range

// Step 6
// Change adding numbers to 'result'

'use strict';

const getRangeArray = (first, last) => {
  let result = [];
  for (let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
};

module.exports = getRangeArray;
