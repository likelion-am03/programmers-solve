// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.


function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.
/* 해석하면 includes는 배열안에 요소를 포함한다고 하였다 그래서 str1 요소에 srt2 요소도 있냐 물어보는건데 
   삼항 연산자를 사용해 그래 있으면 1 출력해 아니면 2출력하고 이 뜻이다.
*/
