// Extract substring between prefix and suffix

// Step 5
// Declare variable 'selected'
// Use 'selected' to not mutate incoming parameters

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  let selected;
  const startPos = str.indexOf(prefix) + 1;
  const finishPos = str.indexOf(suffix);
  if (startPos === -1 || finishPos === -1) {
    return "";
  } else {
    selected = str.substring(startPos, finishPos);
  }
  return selected;
};

module.exports = getValueBetween;
