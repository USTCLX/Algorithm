const genBigString = (length = 100) => {
  let str = '';
  for (let i = 0, il = length; i < il; i++) {
    str += String.fromCharCode(Math.round(Math.random() * 25 + 97));
  }
  return str;
}

module.exports = genBigString;