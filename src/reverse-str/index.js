const genBigArr = require('../utils/generate-big-array');
const reverse = require('../utils/reverse');
const Timer = require('../utils/timer');

const n = 100000; // 总长度
const x = 100; // 切分点

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
}

// 反转算法
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
}

normalMove(arr, n, x);
reverseMove(arr, x);