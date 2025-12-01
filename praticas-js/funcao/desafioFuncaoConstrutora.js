function Pessoa (nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()
console.log(p1.nome)

// conclusão: funções construtoras são usadas para criar objetos com propriedades e métodos.
// Elas são definidas com a primeira letra maiúscula por convenção e são chamadas usando a palavra-chave 'new'.
// Dentro da função construtora, 'this' refere-se ao novo objeto que está sendo criado.