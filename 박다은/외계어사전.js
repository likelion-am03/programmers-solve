// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  let list = dic.map((i) => i.split("").sort().join(""));
  return list.find((i) => i === spell.sort().join("")) ? 1 : 2;
}
