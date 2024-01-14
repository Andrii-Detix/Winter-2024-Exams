// Increment all numbers in dictionary

// Step 5
// Declare 'result', copy 'obj' to 'result'
// Use 'result' instead of 'obj' to not mutate incoming parameter

'use strict';

const incNumbers = (obj) => {
  let result = structuredClone(obj);
  for (const key in obj) {
    if ((typeof result[key]).charAt(0).toUpperCase() === "N") {
      result[key] = result[key] + 1;
    }
  }
  return result;
};

module.exports = incNumbers;
