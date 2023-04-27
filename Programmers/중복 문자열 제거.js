function solution(my_string) {
    // 문자열 배열로 만들기
    var answer = [...my_string];
    // 중복 제거(Set) 하고, join
    let removeAnswer = [... new Set(answer)].join("")
    return removeAnswer;
}