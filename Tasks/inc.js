// Increment all numbers in dictionary

// Step 7
// Declare 'keys'
// Prefer for..of

'use strict';

const incNumbers = (obj) => {
  let result = structuredClone(obj);
  const keys = Object.keys(result);
  for (const key of keys) {
    if (typeof result[key] === "number") {
      result[key] = result[key] + 1;
    }
  }
  return result;
};

module.exports = incNumbers;
