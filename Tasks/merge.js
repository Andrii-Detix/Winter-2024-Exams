// Merge two dictionaries

// Step 5
// Improve naming

'use strict';

const mergeTwoObjects = (object1, object2) => {
  let merged = {};
  for (const key in object1) {
    merged[key] = object1[key];
  }
  for (const key in object2) {
    merged[key] = object2[key];
  }
  return merged;
};

module.exports = mergeTwoObjects;
