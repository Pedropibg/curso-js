const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // Array de notas
for (let i in notas) { // Percorre o array de notas usando for...in
    console.log(i, notas[i]) // Imprime cada nota
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) { // Percorre os atributos do objeto pessoa
    console.log(`${atributo} = ${pessoa[atributo]}`) // Imprime cada atributo e seu valor
}
// O for...in é usado para iterar sobre propriedades enumeráveis de um objeto ou índices de um array.