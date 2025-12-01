function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44));
console.log(area(5, 5));

// Neste exemplo, os parâmetros largura e altura são opcionais.
// Se não forem fornecidos, eles assumem o valor undefined.
// A multiplicação de undefined por um número resulta em NaN (Not a Number).
// Portanto, quando a função é chamada sem argumentos suficientes, a área calculada é NaN,
// e a condição area > 20 não é satisfeita, resultando em undefined sendo retornado pela função.