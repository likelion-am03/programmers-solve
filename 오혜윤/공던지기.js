// https://school.programmers.co.kr/learn/courses/30/lessons/120843
function solution(numbers, k) {
  const array = Array.from(
    { length: 1000 },
    (v, i) => (i * 2) % numbers.length
  );
  return numbers[array[k - 1]];
}
