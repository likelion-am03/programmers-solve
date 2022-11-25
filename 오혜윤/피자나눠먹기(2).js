// https://school.programmers.co.kr/learn/courses/30/lessons/120815
function solution(n) {
  let answer = 0;
  let pizza = 1;
  while (!answer) {
    if ((6 * pizza) % n === 0) {
      answer = pizza;
    }
    pizza += 1;
  }
  return answer;
}
