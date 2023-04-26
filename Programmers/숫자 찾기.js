function solution(num, k) {
    // 숫자를 돌면서 k가 있는지 확인, 있다면 그 위치를 반환. 이미 반환 했다면, -1
    var answer = String(num);
    if(answer.includes(k)) {
        return answer.indexOf(k) + 1
    } else {
        return -1;
    }
    return answer;
}