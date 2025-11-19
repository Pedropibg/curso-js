// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)          // b será undefined
imprimirSoma(2, 3, 4, 5) // os valores extras serão ignorados
imprimirSoma()           // ambos a e b serão undefined

// função com retorno
function soma(a, b = 0) { // b tem valor padrão 0
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NaN, pois a é undefined