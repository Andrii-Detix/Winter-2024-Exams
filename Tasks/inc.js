// Increment all numbers in dictionary

// Step 8
// Use increment

'use strict';

const incNumbers = (obj) => {
  let result = structuredClone(obj);
  const keys = Object.keys(result);
  for (const key of keys) {
    if (typeof result[key] === "number") {
      result[key]++;
    }
  }
  return result;
};

module.exports = incNumbers;
