//https://school.programmers.co.kr/learn/courses/30/lessons/120921
function solution(A, B) {
  const arr = [...A];
  for (let i = 0; i < arr.length; i++) {
    if (arr.join("") === B) {
      return i;
    }
    arr.unshift(arr.pop());
  }
  return -1;
}
