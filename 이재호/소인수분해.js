function solution(n) {
  const prime = [];
  let idx = 2;
  // 0이 될때까지 반복
  while (n !== 1) {
    // 나머지 값이 0이라면 빈배열에 인덱스 push 그리고 n / idx
    // 그게 아니라면 idx + 1
    if (n % idx === 0) {
      prime.push(idx);
      n /= idx;
    } else {
      idx += 1;
    }
  }
  // 중복값을 제거한뒤 배열로 반환
  return Array.from(new Set(prime));
}
