// Get day number

// Step 3
// Improve naming

'use strict';

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDayNum = (str) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNum;
