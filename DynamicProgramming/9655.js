const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("../test.txt").toString().trim().split("\n");

// 풀이
function solution(x) {
  tmp = Math.floor(x / 3) + (x % 3);
  if (tmp % 2 == 0) {
    return "CY";
  } else {
    return "SK";
  }
}

console.log(solution(input));
