function solution(my_string) {
    // 1. 숫자 분리
    const nums = my_string.match(/[0-9]+/g);

    // 2. map()을 이용해서 nums 배열의 요소를 전부 string형태에서 number 형태로 바꾼다.
    // 3. reduce()를 이용하여 배열의 요소를 더하여 반환한다.
    return nums ? nums
                      .map(num => Number(num))
                      .reduce( (a, c) => a + c, 0) 
                : 0;
}