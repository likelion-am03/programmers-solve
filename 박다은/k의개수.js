// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  return Array(j - i + 1)
    .fill(i)
    .map((v, i) => v + i)
    .join("")
    .split("")
    .filter((n) => ~~n === k).length;
}
