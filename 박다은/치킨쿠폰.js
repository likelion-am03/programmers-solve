// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken, num = 0) {
  while (chicken >= 10) {
    num += Math.floor(chicken / 10);
    chicken = (chicken % 10) + Math.floor(chicken / 10);
  }
  return num;
}
