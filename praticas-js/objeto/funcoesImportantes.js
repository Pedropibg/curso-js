const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna um array com as chaves do objeto
console.log(Object.values(pessoa)) // retorna um array com os valores do objeto
console.log(Object.entries(pessoa)) // retorna um array de arrays, cada um contendo [chave, valor]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
/*Você está criando a propriedade dataNascimento com três características específicas: ela aparece em listagens (enumerable), tem um valor fixo (value) e não pode ser alterada (writable: false).
 */

pessoa.dataNascimento = '01/01/2017' // não vai alterar, pois writable é false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // copia as propriedades de o1 e o2 para dest
console.log(dest)

/*Esse código mostra como:
- Inspecionar objetos com keys, values, entries.
- Iterar sobre propriedades com forEach.
- Criar propriedades com controle de escrita.
- Copiar e mesclar objetos com Object.assign.
Essas técnicas são fundamentais para trabalhar com dados dinâmicos, proteger estruturas e evitar efeitos colaterais em aplicações JavaScript.*/
