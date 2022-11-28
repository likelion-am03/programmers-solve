// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  let item = 1;
  while ((item * 6) % n) item++;
  return item;
}
