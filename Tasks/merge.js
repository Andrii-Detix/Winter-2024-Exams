// Merge two dictionaries

// Step 6
// Prefer for..of instead for..in

'use strict';

const mergeTwoObjects = (object1, object2) => {
  let merged = {};
  for (const key of Object.keys(object1)) {
    merged[key] = object1[key];
  }
  for (const key of Object.keys(object2)) {
    merged[key] = object2[key];
  }
  return merged;
};

module.exports = mergeTwoObjects;
