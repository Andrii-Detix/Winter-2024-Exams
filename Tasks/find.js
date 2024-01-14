// Find key by value

// Step 3
// Add const in for..in loop

'use strict';

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  return undefined;
};

module.exports = find;
