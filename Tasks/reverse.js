// Reverse dict, exchange keys and values

// Step 4
// Improve naming

'use strict';

const reverse = (obj) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  });
  return obj;
};

module.exports = reverse;
