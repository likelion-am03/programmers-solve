// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  var arr = [];
  let result = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      arr.push(i);
    }
  }

  return (result = [...new Set(arr)]);
}
