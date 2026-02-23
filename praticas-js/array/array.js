console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adiciona um elemento no final do array
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael' // Adiciona um elemento na posição 9
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true

console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort() // Ordena o array
console.log(aprovados) // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', <4 empty items>, 'Rafael' ]

delete aprovados[1] // Deleta o elemento na posição 1
console.log(aprovados[1]) // undefined
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Remove 1 elemento a partir do índice 1
console.log(aprovados) // [ 'Bia', 'Ana' ]

// conclusão: usar splice para remover elementos é mais seguro que usar delete, pois o splice não deixa "buracos" no array
// além disso, o splice pode adicionar elementos também
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // A partir do índice 1, remove 0 elementos e adiciona 'Elemento1' e 'Elemento2'
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]