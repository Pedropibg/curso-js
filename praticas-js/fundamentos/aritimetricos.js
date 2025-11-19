const [a, b, c, d, e] = [3, 5, 1, 15, 10]

function somas(contass) {
    const soma = a + b + c + d + e
    const subtracao = d - b
    const multiplicacao = a * b
    const divisao = d / a
    const modulo = e % 2
    const contas = {soma, subtracao, multiplicacao, divisao, modulo}
    return contas
}

console.log(somas())

// conclusão: Operadores aritméticos são usados para realizar cálculos matemáticos básicos, como adição, subtração, multiplicação, divisão e obtenção do resto de uma divisão (módulo).