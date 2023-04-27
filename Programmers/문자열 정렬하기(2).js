function solution(my_string) {
    // 소문자 만들고, 공백 기준 분리, 정렬 후 join
    let answer = my_string.toLowerCase().split("").sort().join("");
    return answer;
}