// Make nested array plane

// Step 5
// Rename function

'use strict';

const plane = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      res.push(...plane(value));
    } else {
      res.push(value);
    }
  }
  return res;
};

module.exports = plane;
