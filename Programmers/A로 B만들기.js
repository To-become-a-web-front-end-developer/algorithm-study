function solution(before, after) {
    // 배열로 만들어 정렬 후 다시 문자열로 변환 후 변수에 대입
    const beforeArray = before.split("").sort().join("");
    const afterArray = after.split("").sort().join("");
    
    // 두 변수가 같다면, 1을 아니라면 0을 반환
    return beforeArray === afterArray ? 1 : 0;
}