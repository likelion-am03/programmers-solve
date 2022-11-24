function solution(i, j, k) {
  return [...getRangeStr(i, j)].filter((v) => v == k).length;
}

function getRangeStr(start, end) {
  // i부터 j까지의 모든 숫자를 하나의 문자열로 합치는 함수
  return Array(end - start + 1)
    .fill(start)
    .map((v, i) => v + i)
    .join("");
}
