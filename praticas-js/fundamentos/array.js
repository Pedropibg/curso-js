const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // começa no 0
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos no final do array
console.log(valores)

console.log(valores.pop()) // remove o último elemento do array
delete valores[0] // remove o elemento do índice 0, mas mantém o índice
console.log(valores)
console.log(typeof valores)

// conclusão: array é um tipo de objeto em JavaScript, que pode armazenar múltiplos tipos de dados.