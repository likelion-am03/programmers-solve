// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  for (const value of db) {
    if (id_pw[0] == value[0] && id_pw[1] == value[1]) return "login";
    else if (id_pw[0] == value[0]) return "wrong pw";
  }
  return "fail";
}

/*  문제가 어려워서 다은님 코드를 참고하였습니다, 허나 해석하고 이해하고자 한 바를 작성해보고자 합니다.

for of 반목문을 이용하여 const value = db라는 값을 해더에 넣어줍니다
본문에는 조건문을 걸어서 만약에 배열에서  id_pw[0]번째 인덱스와 value(db)[0] 번째 인덱스가 같고 
id_pw[1]번째 인덱스와 value(db)[1] 가 모두 같으면 로그인이 되고 
그게 아니라 [0]번째 인덱스만 값다면 wrong pw를 나타내고
둘다 아니라면 리턴으로 fail을 출력하게 됩니다. 

오늘 푼 문제로 for of문을 다시한번 복습하며 공부하게 되었으며  value가 무엇을 나타내는지 
&& 연산자 또한 복습하였습니다.

*/
