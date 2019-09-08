const genBigArray = (length = 10000) => {
  const arr = new Array(length);
  for (let i = 0, il = arr.length; i < il; i++) {
    arr[i] = Math.round(Math.random() * length);
  }
  return arr;
};

module.exports = genBigArray;