// Extract substring between prefix and suffix

// Step 7
// Fix 'startPos' initial value, because the prefix length can be greater than 1

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const startPos = str.includes(prefix)
    ? str.indexOf(prefix) + prefix.length
    : -1;
  const finishPos = str.indexOf(suffix);
  if (startPos === -1 || finishPos === -1) {
    return "";
  }
  return str.substring(startPos, finishPos);
};

module.exports = getValueBetween;
