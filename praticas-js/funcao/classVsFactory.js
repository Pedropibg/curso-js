class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }   
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Maria')
p2.falar()

// conclusão: classes em JavaScript são usadas para criar objetos com propriedades e métodos, utilizando a palavra-chave 'new' para instanciar.
// Funções factory também criam objetos, mas retornam um novo objeto diretamente sem a necessidade de 'new'.
// Ambas as abordagens permitem encapsular dados e comportamentos, mas a sintaxe e o uso diferem.