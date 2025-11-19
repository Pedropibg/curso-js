let a = 7;
let b = 94;

// errado
// a = b;
// b = a;

console.log(a);
console.log(b);

// certo

let temp = a;

a = b;
b = temp;

console.log(a);
console.log(b);
