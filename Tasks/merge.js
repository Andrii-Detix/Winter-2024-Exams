// Merge two dictionaries

// Step 7
// Replace for..of loops with spread operators

'use strict';

const mergeTwoObjects = (object1, object2) => {
  const merged = { ...object1, ...object2 };
  return merged;
};

module.exports = mergeTwoObjects;
