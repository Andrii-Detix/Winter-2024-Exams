// Extract substring between prefix and suffix

// Step 3
// Improve naming
// Replace 'k' with 'index'

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  let index = str.indexOf(prefix);
  if (index === -1) return "";
  else {
    index = index + prefix.length;
    str = str.substring(index);
    if (suffix) {
      index = str.indexOf(suffix);
      if (index === -1) {
        return "";
      } else {
        str = str.substring(0, index);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;
