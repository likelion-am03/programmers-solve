function solution(chicken) {
  let service = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    service = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return service;
}
