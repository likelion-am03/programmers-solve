//https://school.programmers.co.kr/learn/courses/30/lessons/120887
function solution(i, j, k) {
  let target = "";
  for (i; i <= j; i += 1) {
    target += i.toString();
  }
  // split한 결과의 길이는 찾고싶은 대상의 개수+1한 값이 나옴
  // ex) 010-8888-8888를 split한 결과의 길이는 3, -는 2개
  return target.split(k).length - 1;
}
