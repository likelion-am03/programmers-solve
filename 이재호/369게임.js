// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
