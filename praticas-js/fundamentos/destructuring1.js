const pessoa = {
    nome: 'Ana',
    idade: 5,  
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tirando do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // tirando do objeto pessoa os atributos nome e idade e renomeando para n e i
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // tirando do objeto pessoa o atributo sobrenome (que não existe) e criando o atributo bemHumorada com valor padrão true
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // tirando do objeto pessoa o atributo endereco (que é um objeto) e pegando os atributos logradouro, numero e cep (que não existe)
console.log(logradouro, numero, cep)

// const { conta: { ag, num}} = pessoa         // tentando tirar do objeto pessoa o atributo conta (que não existe) e pegando os atributos ag e num (vai dar erro)
// console.log(ag, num)

console.log(pessoa)