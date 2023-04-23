function solution(numbers, direction) {
    // right > 배열 맨 뒤 요소를 맨 앞에 복사 후 맨 끝 요소 삭제
    var answer = [...numbers];
    if(direction === "right"){
        let last = answer[numbers.length-1];
        answer.unshift(last);
        answer.pop();
    } else {
        answer[numbers.length] = answer[0];
        answer.shift();
    }
    return answer;
}