// Make nested array plane

// Step 6
// Prefer for..of instead of for
// Declare variable 'interim'

'use strict';

const plane = (arr) => {
  let res = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      const interim = plane(value);
      res.push(...interim);
    } else {
      res.push(value);
    }
  }
  return res;
};

module.exports = plane;
