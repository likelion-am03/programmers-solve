function solution(price) {
  return (price >= 500_000) ? parseInt(price * 0.8) : (price >= 300_000) ? parseInt(price * 0.9) : (price >= 100_000) ? parseInt(price * 0.95) : price;
}