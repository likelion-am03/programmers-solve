// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  return ((order + "").match(/['3'|'6'|'9']/g) || []).length;
}
