function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        // 배열 돌면서 요소가 약수라면
        if(n % i === 0){
            // 배열 안에 넣기
            answer.push(i)
        }
    }
    return answer;
}