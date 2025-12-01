let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá!'
}
ola = () => 'Olá!'
ola = _ => 'Olá!' // possui um parâmetro, mas ignorado
console.log(ola())

// Neste exemplo, os parâmetros largura e altura são opcionais.
// Se não forem fornecidos, eles assumem o valor undefined.
// A multiplicação de undefined por um número resulta em NaN (Not a Number).
// Portanto, quando a função é chamada sem argumentos suficientes, a área calculada é NaN,
// e a condição area > 20 não é satisfeita, resultando em undefined sendo retornado pela função.