// Make nested array plane

// Step 4
// Move 'res' to function block
// Remove unnecessary code

'use strict';

const const_plane = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      res.push(...const_plane(value));
    } else {
      res.push(value);
    }
  }
  return res;
};

module.exports = const_plane;
