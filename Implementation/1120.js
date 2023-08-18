const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("../test.txt").toString().trim().split("\n");
// 정리
const [a, b] = input[0].split(" ");

// 풀이
function solution(a, b) {
  let diff = b.length - a.length;
  let cnt;
  let result = [];

  for (let i = 0; i <= diff; i++) {
    cnt = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] !== b[j + i]) {
        cnt += 1;
      }
    }
    result.push(cnt);
  }

  return Math.min(...result);
}

console.log(solution(a, b));
