const concat = (str1: string, str2: string): string => {
  return str1 + str2;
};

const capitalize = (str: string): string => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const upperCase = (str: string): string => {
  return str.toUpperCase();
};

const lowerCase = (str: string): string => {
  return str.toLowerCase();
};

export default {
  concat,
  capitalize,
  upperCase,
  lowerCase
};
