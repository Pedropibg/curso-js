const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos);
console.log(todos, filhas, filhos); // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

// Concluindo: o método concat é usado para unir dois ou mais arrays em um novo array, sem modificar os arrays originais.
// no exemplo, criamos um novo array 'todos' que contém os elementos de 'filhas' e 'filhos'.