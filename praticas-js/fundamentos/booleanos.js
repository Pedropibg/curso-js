let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // explicação: o operador !! converte o valor para booleano.

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![]) // array vazio é considerado verdadeiro
console.log(!!{}) // objeto vazio é considerado verdadeiro
console.log(!!Infinity) // infinito é considerado verdadeiro, infinity é um valor numérico
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // atribuição dentro do parênteses para retornar false. isAtivo recebe false.

console.log("pra finalizar...")
console.log(!!('' || null || 0 || ' ')) // explicação: se tiver um valor verdadeiro, retorna ele. neste caso, ' ' é o único verdadeiro. pois é uma string com espaço.

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // se o nome n estiver definido, retorna 'Desconhecido'