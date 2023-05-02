function solution(i, j, k) {
    // 문자열 초기화
    let answer ='';

    // 시작값 ~ 끝값 ++1
    for(i;i<=j;i++){
        // 문자열에 할당 => 유사 배열
        answer += i;
    }

    // k를 기준으로 분리, 길이-1
    return answer.split(k).length-1;
}