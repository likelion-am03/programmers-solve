// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  return s
    .split("")
    .map((i) => {
      let code = i.charCodeAt();
      if ((code + n > 90 && code <= 90) || code + n > 122) {
        return String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("")
    .replaceAll(/[^a-zA-Z]/g, " ");
}
