const genBigArr = require('../utils/generate-big-array');
const reverse = require('../utils/reverse');
const Timer = require('../utils/timer');

const n = 1000000; // 总长度
const x = 6554; // 切分点

const timer = new Timer();
const arr = genBigArr(n);

// 普通算法
// 一位一位的移动
const normalMove = (rawArr, x) => {
  timer.start();
  const arr = Array.from(rawArr);
  const length = arr.length;
  for (let i = 0; i < x; i++) {
    const temp = arr[0];
    for (let j = 1; j < length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[length - 1] = temp;
  }
  timer.stop().print();
  return arr;
}

// js slice
const sliceMove = (rawArr, x) => {
  timer.start();
  const arr = Array.from(rawArr);
  const sliceArr = arr.splice(0, x);
  timer.stop().print();
  return arr.concat(sliceArr);
}

// 反转算法
// 将数组从x处分开，分为ab两部分，a反转，b反转，再对整个数组反转
const reverseMove = (rawArr, x) => {
  timer.start();
  let arr = Array.from(rawArr);
  // 反转左半部分
  reverse(arr, 0, x);
  // 反转右半部分
  reverse(arr, x + 1, arr.length - 1);
  // 整体反转
  reverse(arr, 0, arr.length - 1);
  timer.stop().print();
  return arr;
}

normalMove(arr, x);
sliceMove(arr, x);
reverseMove(arr, x);
