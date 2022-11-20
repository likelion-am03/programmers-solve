function solution(price) {
  var answer = 0;
  if (parseInt(price) >= 500000) {
    answer = price * 0.8;
  } else if (parseInt(price) >= 300000) {
    answer = price * 0.9;
  } else if (parseInt(price) >= 100000) {
    answer = price * 0.95;
  } else {
    answer = price;
  }
  return Math.floor(answer);
}
