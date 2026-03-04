'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const concat = (str1, str2) => {
  return str1 + str2;
};
const capitalize = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
const upperCase = (str) => {
  return str.toUpperCase();
};
const lowerCase = (str) => {
  return str.toLowerCase();
};
exports.default = {
  concat,
  capitalize,
  upperCase,
  lowerCase
};
//# sourceMappingURL=strings.js.map
