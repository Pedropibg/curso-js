function rand({ min = 0, max = 1000 } = {}) {
    const valor = Math.random() * (max - min) + min // fazemos essa conta para gerar um número aleatório entre o min e o max, a explicação é o seguinte: Math.random() gera um número entre 0 e 1, então multiplicamos esse número pela diferença entre max e min para ajustar o intervalo, e depois somamos o min para deslocar o intervalo para começar no valor mínimo desejado.
    return Math.floor(valor) // Math.floor() arredonda o número para baixo, retornando um inteiro.
}

console.log(rand({ max: 50, min: 40 }))
console.log(rand({ min: 955 }))
console.log(rand({}))