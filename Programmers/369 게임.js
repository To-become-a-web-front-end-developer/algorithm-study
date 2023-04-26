function solution(order) {
    // 숫자를 배열에 넣고 배열을 돌 때 3,6,9가 나오면 count를 올린다.
    let answer = 0;
    const orderString = order.toString();
    
    for(let ordernum of orderString){
        if(ordernum === "0"){
            continue;
        }else if (ordernum % 3 === 0){
            answer += 1;
        }
    }
    return answer
}