const soma = function(x, y) {
    return x + y;
};

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4); // usa a função soma por padrão
imprimirResultado(3, 4, function(x, y) { // função anônima passada como argumento
    return x - y;
});

imprimirResultado(3, 4, (x, y) => x * y); // função anônima como arrow function

const pessoa = {
    falar: function() {
        console.log('Olá!');
    }
};

pessoa.falar(); // chama o método falar do objeto pessoa

// conclusão: funções anônimas são úteis para passar comportamentos como argumentos e para definir métodos em objetos.
// Elas podem ser definidas usando a sintaxe tradicional ou como arrow functions.
// Além disso, funções anônimas não possuem nome, o que pode ser vantajoso em certos contextos.