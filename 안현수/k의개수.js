function solution(i, j, k) {
  let numStr = Array(j - i + 1)
    .fill()
    .map((_, idx) => i + idx)
    .join("");
  return numStr.split("").filter((v) => +v === k).length;
}
