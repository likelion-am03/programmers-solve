// https://school.programmers.co.kr/learn/courses/30/lessons/120869
function solution(spell, dic) {
  spell = spell.sort().join("");
  dic = dic.filter((e) => e.split("").sort().join("") === spell);
  return dic[0] ? 1 : 2;
}
