const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let result = "*";
  for (let i = 0; i < num; i++) {
    console.log(result);
    result += "*";
  }
});

/* 빈배열 인덱스를 0으로 하고 이걸 숫자로 형변환시켜 상수로 선언한다.
변수로 결과값이라는뜻의 result에 별을 찍어주고 
반복문안에 결과값을 넣어 num의 숫자만큼 반복을 돌려준다 
*/
