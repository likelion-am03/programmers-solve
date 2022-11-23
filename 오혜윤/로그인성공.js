//https://school.programmers.co.kr/learn/courses/30/lessons/120883
function solution(id_pw, db) {
  for (const [id, pw] of db) {
    if (id_pw[0] === id) {
      if (id_pw[1] === pw) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }
  return "fail";
}
