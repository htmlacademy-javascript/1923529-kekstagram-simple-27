// eslint-disable-next-line no-unused-vars
const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  const result = Math.floor(Math.random() * (max - min + 1) + min);

  return result;
};

// eslint-disable-next-line no-unused-vars
const checkStringLenght = (string, length) => string.length <= length;
