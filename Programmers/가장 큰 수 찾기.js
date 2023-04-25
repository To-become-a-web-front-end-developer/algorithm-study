function solution(array) {
    // 배열의 최대 값을 찾고 그에 해당하는 인덱스를 출력
    maxArr = Math.max(...array)
    maxIdxArr = array.indexOf(maxArr)
    return [maxArr,maxIdxArr]
}