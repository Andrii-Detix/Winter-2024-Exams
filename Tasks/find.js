// Find key by value

// Step 2
// Remove unneeded code

'use strict';

find = (object, ...rest) => {
  value = rest.pop(1);
  for (name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  return undefined;
};

module.exports = find;
