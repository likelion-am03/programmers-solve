function solution(chicken) {
  let service = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    service = service + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return service;
}

// 쿠폰(치킨)갯수가 10보다 크면 서비스는  서비스 + 쿠폰 / 10
// 쿠폰은  쿠폰(치킨)갯수 / 10(서비스로 주문한 쿠폰 )  + 쿠폰(치킨)갯수 % 10(남은쿠폰)
