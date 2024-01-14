// Find longest string

// Step 4
// Remove unneeded parameter maxRandom, unneeded 'else' branches, brackets
// Remove the initial value of the 's' variable

'use strict';

const longest = (line = []) => {
  let x = -1;
  let s;
  for (let i of line) {
    if (i.length > x) {
      x = i.length;
    } else {
      i = 0;
    }
    if (i.length >= x) {
      s = i;
    }
  }
  return s;
};

module.exports = longest;
