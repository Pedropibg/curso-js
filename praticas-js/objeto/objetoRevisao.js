// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira' // chave/valor
produto['marca do produto'] = 'Generica' // chave com espaço
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores) // undefined

// conclusão: objetos são dinâmicos, podem crescer e diminuir conforme a necessidade
// cuidado ao deletar propriedades, pode causar erros em acessos futuros, sempre verificar se a propriedade existe antes de acessar