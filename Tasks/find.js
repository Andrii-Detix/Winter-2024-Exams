// Find key by value

// Step 5
// Improve naming

'use strict';

const findKey = (object, value) => {
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
