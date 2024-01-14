// Find key by value

// Step 7
// Declare 'keys'
// Prefer for..of instead of for..in

'use strict';

const findKey = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
