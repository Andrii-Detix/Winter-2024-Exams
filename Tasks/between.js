// Extract substring between prefix and suffix

// Step 6
// Remove else branching and variable 'selected'
// Simplify code

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const startPos = str.indexOf(prefix) + 1;
  const finishPos = str.indexOf(suffix);
  if (startPos === -1 || finishPos === -1) {
    return "";
  }
  return str.substring(startPos, finishPos);
};

module.exports = getValueBetween;
