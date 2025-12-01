function soma () {
    let soma = 0
    for (i in arguments) { // arguments é um array interno da função, que guarda todos os parâmetros passados
        soma += arguments[i] // percorre todos os argumentos passados e soma
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))