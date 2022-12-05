// https://school.programmers.co.kr/learn/courses/30/lessons/120837
function solution(hp) {
  const 장군 = parseInt(hp / 5);
  const 병정 = parseInt((hp % 5) / 3);
  const 일 = parseInt((hp % 5) % 3);
  return 장군 + 병정 + 일;
}
