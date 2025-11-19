console.log('a =', a)
var a = 2 // erro não tivesse o "var". 
console.log('a =', a)

console.log('b =', b)
let b = 3 // ReferenceError, porque o "let" não sofre hoisting
console.log('b =', b)