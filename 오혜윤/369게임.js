function solution(order) {
  let answer = 0;
  const orderString = order.toString();

  for (let i = 0; i < orderString.length; i += 1) {
    const multipleOfThree = parseInt(orderString[i]);
    if (multipleOfThree && multipleOfThree % 3 === 0) {
      answer += 1;
    }
  }

  return answer;
}
