// Reverse dict, exchange keys and values

// Step 6
// Declare variable 'result' to not mutate incoming parameters

'use strict';

const reverse = (obj) => {
  let result = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    result[value] = key;
  }
  return result;
};

module.exports = reverse;
