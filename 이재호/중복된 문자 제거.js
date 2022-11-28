
function solution(my_string) {
    return [...new Set(my_string)].join("");
}

/*  Set는 중복 데이터 저장을 허용하지 않는 자료구조입니다. 
이 특성을 이용하여 배열의 모든 요소를 Set에 추가하면 중복이 저절로 제거가 됩니다. 
new Set(arr)는 배열의 데이터가 추가된 Set 객체가 생성되며, 
중복은 허용되지 않기 때문에 1개의 요소만 추가됩니다. 
Set를 Array로 변경할 때는 Spread operator를 이용하면 [...set]처럼 간단하게 변환할수 있다 */

/* join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다. */