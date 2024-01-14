// Increment all numbers in dictionary

// Step 3
// Improve naming

'use strict';

let incNumbers = (obj) => {
  for (key in obj) {
    if ((typeof obj[key]).charAt(0).toUpperCase() === "N") {
      obj[key] = obj[key] + 1;
    }
  }
  return obj;
};

module.exports = incNumbers;
