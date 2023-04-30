function solution(num_list, n) {
    // 빈 배열 선언
    var answer = [];

    // num_list/n 까지 반복
    for(let i = 0; i < num_list.length/n; i++){
        // i+n 부터 i*n+n까지 잘라 answer배열로 push
        answer.push(num_list.slice(i*n,i*n+n));
    }
    return answer;
}