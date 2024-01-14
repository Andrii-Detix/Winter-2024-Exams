// Increment all numbers in dictionary

// Step 6
// Change the check to the number type

'use strict';

const incNumbers = (obj) => {
  let result = structuredClone(obj);
  for (const key in obj) {
    if (typeof result[key] === "number") {
      result[key] = result[key] + 1;
    }
  }
  return result;
};

module.exports = incNumbers;
