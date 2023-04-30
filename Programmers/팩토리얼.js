function solution(n) {
    // 초기값 1지정
    let answer = 1;
    
    // 1부터 n까지 1씩 증가하며
    for(let i = 1; i <= n; i++){
        // 누적 곱하기
        answer *= i;

        // 그 곱이 n과 일치하면 i를 반환
        if(answer === n){
            return i;
        } 
        // 그 곱이 n보다 크면 i-1을 반환
        if(answer > n){
            return i-1;
        }
    }
}