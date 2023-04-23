function solution(n, numlist) {
    // 1. 배열을 순회하면서 만약 n의 배수가 아니라면 제거. >> filter
    var answer = numlist.filter((num) => num%n===0)
    return answer;
}