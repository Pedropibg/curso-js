function soma1 (a, b, c) {
    a = a || 1 // se a for undefined, null, 0, false, atribui 1
    b = b || 1 // se b for undefined, null, 0, false, atribui 1
    c = c || 1 // se c for undefined, null, 0, false, atribui 1
    return a + b + c
}

console.log(soma1())        // 3
console.log(soma1(3))      // 5
console.log(soma1(1, 2, 3))// 6
console.log(soma1(0, 0, 0))// 3 (0 é false, então atribui 1 para cada)

// estratégia 2, 3 e 4 para definir valores padrão
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1 // se a for diferente de undefined, mantém o valor de a, senão atribui 1
    b = 1 in arguments ? b : 1 // se o índice 1 (segundo parâmetro) existir em arguments, mantém b, senão atribui 1
    c = isNaN(c) ? 1 : c // se c for NaN, atribui 1, senão mantém c
    return a + b + c
}

console.log(soma2())        // 3
console.log(soma2(3))      // 5
console.log(soma2(1, 2, 3))// 6
console.log(soma2(0, 0, 0))// 0

// valor padrão do ES2015
function soma3 (a = 1, b = 1, c = 1) { // define valores padrão diretamente na assinatura da função
    return a + b + c
}

console.log(soma3())        // 3
console.log(soma3(3))      // 5
console.log(soma3(1, 2, 3))// 6
console.log(soma3(0, 0, 0))// 0

// conclusão: a melhor forma de definir valores padrão para parâmetros em JS é utilizando a sintaxe do ES2015,
// que é mais clara e concisa.
// evita problemas com valores falsy como 0 ou '' que podem ser tratados incorretamente pelas outras estratégias.