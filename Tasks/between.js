// Extract substring between prefix and suffix

// Step 4
// Declare variables 'startPos' and 'finishPos' instead 'index'
// Simplify code and remove unneeded

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const startPos = str.indexOf(prefix) + 1;
  const finishPos = str.indexOf(suffix);
  if (startPos === -1 || finishPos === -1) {
    return "";
  } else {
    str = str.substring(startPos, finishPos);
  }
  return str;
};

module.exports = getValueBetween;
