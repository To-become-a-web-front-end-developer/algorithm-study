function solution(n) {
    // 중복 제거를 위해 Set 사용
    let answer = new Set();
    // 2부터 n까지 증가하면서
    for(let i = 1; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                answer.add(i)
            }
        }
    }
    
    return answer.size
}