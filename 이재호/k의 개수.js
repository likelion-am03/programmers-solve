function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

// a 라는 빈 문자열은 변수로 선언
// 반복문을 통해 i가 j보다 작을때 까지 반복
// a = a + 1
// return a의 separator k를 지정하여 a를 k로 잘라 배열에 담아 리턴 후 그 길이의 -1을 한다

/* JavaScript의 Split함수는 문자열을 일정한 구분자로 자르는 메소드입니다.
구분자로 잘라진 문자열들은 배열에 담아 사용하게 됩니다. */
