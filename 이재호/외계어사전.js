function solution(spell, dic) {
  // 배열을 정렬하고 조인으로 하나의 문자열로 만듬
  spell = spell.sort().join("");
  // 새로운 배열로 반환하고 스플릿으로 문자열을 나눠주고 배열을 정렬한뒤 a랑 spell 같고  언디파인드가 아니라면 1을 출력 아니면 2 출력
  return dic
    .map((a) => a.split("").sort().join(""))
    .find((a) => a === spell) !== undefined
    ? 1
    : 2;
}
