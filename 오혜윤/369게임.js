function solution(order) {
  var answer = 0;
  const order_string = order.toString();

  for (let i = 0; i < order_string.length; i++) {
    if (
      parseInt(order_string[i]) % 3 === 0 &&
      parseInt(order_string[i]) !== 0
    ) {
      answer += 1;
    }
  }

  return answer;
}
