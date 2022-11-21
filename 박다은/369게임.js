// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  return order
    .toString()
    .split("")
    .filter((i) => ~~i !== 0 && i % 3 === 0).length;
}
