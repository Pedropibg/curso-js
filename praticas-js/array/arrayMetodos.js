const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// pop() - Remove o último elemento do array
pilotos.pop();
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen' ]

// push() - Adiciona um elemento no final do array
pilotos.push('Verstappen');
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// shift() - Remove o primeiro elemento do array
pilotos.shift();
console.log(pilotos); // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// unshift() - Adiciona um elemento no início do array
pilotos.unshift('Hamilton');
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice() - Pode adicionar ou remover elementos em qualquer posição do array
// Adicionando elementos
pilotos.splice(2, 0, 'Bottas', 'Massa'); // A partir do índice 2, remove 0 elementos e adiciona 'Bottas' e 'Massa'
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// Removendo elementos
pilotos.splice(3, 1); // A partir do índice 3, remove 1 elemento
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// slice() - Retorna um novo array a partir de um intervalo do array original
const algunsPilotos1 = pilotos.slice(2); // A partir do índice 2 até o final
console.log(algunsPilotos1); // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4); // Do índice 1 ao 4 (não inclui o índice 4)
console.log(algunsPilotos2); // [ 'Alonso', 'Bottas', 'Raikkonen' ]

// conclusão: os métodos pop, push, shift, unshift, splice e slice são muito úteis para manipular arrays em JavaScript
// cada um tem sua funcionalidade específica e pode ser usado conforme a necessidade do desenvolvedor