// https://school.programmers.co.kr/learn/courses/30/lessons/120839
function solution(rsp) {
  var answer = "";
  for (let i = 0; i < rsp.length; i += 1) {
    if (Number(rsp[i]) === 2) {
      answer += "0";
    } else if (Number(rsp[i]) === 0) {
      answer += "5";
    } else answer += "2";
  }
  return answer;
}
