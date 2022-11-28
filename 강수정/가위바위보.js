// 문제
// 가위는 2 바위는 0 보는 5로 표현합니다. 
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

//풀이 
function solution(rsp) {
    var rspArr = rsp.split('');
    var winArr = [];
    for(let i=0; i<rspArr.length; i++){
        if(rspArr[i] === '0'){
            winArr.push('5');
        }else if(rspArr[i] === '2'){
            winArr.push('0');
        }else{
            winArr.push('2');
        }
    }
    var answer = winArr.join('');
    return answer;
}