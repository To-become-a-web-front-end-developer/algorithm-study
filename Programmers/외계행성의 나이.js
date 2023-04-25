function solution(age) {
    // 객체 형태로
    const agetable = {
        0 : 'a',
        1 : 'b',
        2 : 'c',
        3 : 'd',
        4 : 'e',
        5 : 'f',
        6 : 'g',
        7 : 'h',
        8 : 'i',
        9 : 'j'
    }
    
    let planetAge = age + ""
    
    return planetAge.split("").map((e) => agetable[e]).join("")
}