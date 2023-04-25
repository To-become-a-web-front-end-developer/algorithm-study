function solution(n) {
    // 최소 공배수를 수한 다음, /6을 해줌
    let lcm = 1;
   
    while(true){
    if((lcm % n == 0) && (lcm % 6 == 0)) break;
    lcm++;
    }
  return parseInt(lcm/6)
}