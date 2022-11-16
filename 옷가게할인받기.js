/*  머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
소수점 이하를 버린 정수를 return합니다.  */

function solution(price) {
  if (price >= 500000) return Math.floor(price * 0.8);
  if (price >= 300000) return Math.floor(price * 0.9);
  if (price >= 100000) return Math.floor(price * 0.95);
  return price;
}

/* 10만 원 이상 사면 5% => 산 가격이 10만원이상이면 가격의 5%할인데 0.95을 왜 곱하냐  
 5%를 숫자로 나타내면 5 / 100을 하면 0.05이다 전체는 100% 이니 100 / 100은 1 
 즉 1 - 0.05를 하면 0.95라는게 즉 5%이다 ~ 
*/
// 30만 원 이상 사면 10
// 50만 원 이상 사면 20%
