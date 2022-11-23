// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const [myId, myPw] = id_pw;

  // db에 일치하는 id가 없다면 fail 반환
  if (!db.find(([id, pw]) => myId === id)) return "fail";
  // db에 일치하는 id있고, pw도 있으면 "login", id는 있지만 pw없으면 "wrong pw"반환
  return db.find(([id, pw]) => myId === id && myPw === pw) ? "login" : "wrong pw";
}
