// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || ("" + i).includes(3)) n++;
  }
  return n;
}
