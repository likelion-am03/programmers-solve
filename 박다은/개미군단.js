// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  let one = Math.floor(hp / 5);
  let two = Math.floor((hp - one * 5) / 3);
  let three = hp - one * 5 - two * 3;
  return one + two + three;
}
