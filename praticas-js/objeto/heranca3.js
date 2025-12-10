const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // - filha1 é criada com pai como protótipo.
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não muda
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// só aparece o nome, pq o cabelo vem do pai

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança:${key}`)
}

// conclusão: Ao criar filha1 e filha2 a partir do objeto pai, vemos que ambas herdam suas propriedades, como corCabelo, mesmo que não as possuam diretamente. Isso mostra o poder da herança: os objetos podem acessar dados definidos em seus protótipos sem duplicar informações.
// Além disso, o uso de Object.create com um segundo argumento permite definir propriedades com regras específicas, como tornar uma propriedade não modificável (writable: false) ou visível em listagens (enumerable: true). Isso é útil para proteger dados e controlar como eles são expostos.
// Por fim, o uso de Object.keys e o loop for...in com hasOwnProperty mostra como diferenciar propriedades próprias de herdadas. Isso é essencial quando queremos saber exatamente o que pertence ao objeto versus o que vem da cadeia de protótipos.
