function solution(n) {
  let count = 0; // 숫자 3을 사용하지 않는 부분
  let num = 0;
  while (count < n) {
    // count 가 n 보다 작다면 num = num + 1
    num += 1;
    // 만약 num이 3으로 나눴을때 0이 아니거나 num에 3이 포함되어 있지 않다면 count + 1
    if (!(num % 3 === 0 || String(num).includes("3"))) count += 1; // 만약
  }

  return num;
}

//  문제 : 3을 저주의 숫자라고 생각하기에 3의 배수와 숫자 3을 사용하지 않는다
