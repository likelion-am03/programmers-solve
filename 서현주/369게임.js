// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  return [...order.toString()].reduce((result, num) => (num == 3 || num == 6 || num == 9 ? ++result : result), 0);
}
