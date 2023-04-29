function solution(letter) {
    const morse = { 
    '.-':'a',
    '-...':'b',
    '-.-.':'c',
    '-..':'d',
    '.':'e',
    '..-.':'f',
    '--.':'g',
    '....':'h',
    '..':'i',
    '.---':'j',
    '-.-':'k',
    '.-..':'l',
    '--':'m',
    '-.':'n',
    '---':'o',
    '.--.':'p',
    '--.-':'q',
    '.-.':'r',
    '...':'s',
    '-':'t',
    '..-':'u',
    '...-':'v',
    '.--':'w',
    '-..-':'x',
    '-.--':'y',
    '--..':'z'
    }
    // 문자열 배열로 만들기
    const arrayLetter = letter.split(" ");
    // 해당 문자열(key) 값에 대한 value 출력하고, 다시 문자열로 만들기
    const decodeLetter = arrayLetter.map((data) => morse[data]).join("")
    return decodeLetter;
}