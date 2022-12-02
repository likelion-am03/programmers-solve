// https://school.programmers.co.kr/learn/courses/30/lessons/120871
function solution(n) {
  const array = Array.from({ length: 200 }, (v, i) => i + 1);
  array_out3 = array.filter(
    (num) => num % 3 !== 0 && String(num).indexOf("3") === -1
  );
  return array_out3[n - 1];
}
