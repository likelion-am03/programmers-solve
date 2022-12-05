function solution(hp) {
  return (
    Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + Math.floor((hp % 5) % 3)
  );
}

/* hp는 잡아야하는 곤충 개미들은 장군개미 공격력 5 병정개미 3 일개미 1이다 
Math.floor는 소수점 이하를 반환한다
첫번째는 외부곤충 / 장군개미를 한거다 
두번째는 첫번째 나누고 남은 hp를 또다시 병정개미 공격력으로 나눈것이다 
세번째는 첫번째 두번째를 나눈 나머지 값이다 
*/
