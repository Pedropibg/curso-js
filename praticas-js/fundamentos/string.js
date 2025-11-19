const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt retorna o caractere na posição indicada
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // charCodeAt retorna o valor Unicode do caractere na posição indicada
console.log(escola.indexOf('3')) // indexOf retorna a posição do caractere indicado

console.log(escola.substring(1)) // substring retorna a partir da posição indicada até o fina l
console.log(escola.substring(0, 3)) // do início até a posição indicada (sem incluir o caractere da posição final)

console.log('Escola '.concat(escola).concat("!")) // concat concatena strings
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // replace substitui o caractere indicado pelo outro

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array
console.log(typeof escola)

// cadeia de caracteres (string) é um tipo primitivo em JavaScript, usado para representar texto. As strings são imutáveis, o que significa que não podem ser alteradas após serem criadas. No entanto, é possível criar novas strings a partir de operações em strings existentes.