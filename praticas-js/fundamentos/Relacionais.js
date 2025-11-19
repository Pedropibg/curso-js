console.log('01)', '01' == 1) // igual
console.log('02)', '01' === 1) // estritamente igual
console.log('03)', '3' != 3) // diferente
console.log('04)', '3' !== 3) // estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // estritamente igual // false pq são objetos diferentes na memória
console.log('10)', d1 == d2) // igual
console.log('11)', d1.getTime() === d2.getTime()) // estritamente igual, compara o valor numérico dos timestamps

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false