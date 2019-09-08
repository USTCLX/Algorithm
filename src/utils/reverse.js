const reverse = (data, start, end) => {
  if (!data.length) {
    return;
  }
  let result = data;

  const last = end;
  const mid = (end + start) / 2;

  for (let i = start, j = 0; i < mid; i++) {
    let temp = result[i];
    result[i] = result[last - j];
    result[last - j] = temp;
    j++;
  }
}

module.exports = reverse;