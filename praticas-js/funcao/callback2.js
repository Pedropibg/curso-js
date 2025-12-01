const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback (função passada como argumento)
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
// i seria o índice do array notas
console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// conclusão: o callback significa que uma função é passada como argumento para outra função.
//funções callback são úteis para passar comportamentos como argumentos para outras funções.
// Elas podem ser definidas como funções anônimas ou como arrow functions para maior concisão. 