// Find key by value

// Step 4
// Replace rest parameter 'rest' to 'value'

'use strict';

const find = (object, value) => {
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  return undefined;
};

module.exports = find;
