function solution(array) {
    var answer = array.join("").split("").filter(a => a === '7').length;
    return answer;
}