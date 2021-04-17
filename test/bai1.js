//1:
function findOppositeNumber(n , inputNumber) {
    num = (inputNumber + (n / 2)) % n
    return num
}

console.log(findOppositeNumber(10, 2))
console.log(findOppositeNumber(10, 6))


//2:
function merge2String(text, number) {
    var i = ''
    var j = Math.min(text.length, number.length)
    var temp = ''
    for(i = 0; i < j; i++) {
        temp += text[i] + number[i]
    }
    return temp + text.slice(i) + number.slice(i)
}

console.log(merge2String('abc', '123'))
console.log(merge2String('abc', '0123'))
console.log(merge2String('abcd', '123'))