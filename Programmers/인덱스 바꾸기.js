function solution(my_string, num1, num2) {
    // 1. 스프레드 문법(...)으로 my_string을 배열 안에 담는다.
    const answer = [...my_string];
    
    // splice : 배열 객체에 사용할 수 있는 내장 메서드입니다. 이는 기존 요소를 삭제하거나 교체하여 배열의 내용을 변경하며, 제거된 요소가 담긴 별도의 배열을 새로 반환합니다.
    answer.splice(num1,1,my_string[num2]);
    answer.splice(num2,1,my_string[num1]);
    
    // join을 통해 문자열로 반환
    return answer.join("");
}
