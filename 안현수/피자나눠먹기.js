function solution(n) {
  let answer = 1;
  while (!Number.isInteger((6 / n) * answer)) {
    answer++;
  }
  return answer;
}
