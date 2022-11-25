function solution(my_string) {
  return [...new Set(my_string)].join("");
}

console.log([...new Set(["1", "1", "2", "2"])]);
