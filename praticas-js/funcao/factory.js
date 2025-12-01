// factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // { nome: 'Ana', sobrenome: 'Silva' }

// conclusão: funções factory são úteis para criar objetos com propriedades e métodos predefinidos. Elas retornam um novo objeto a cada chamada, permitindo a criação de múltiplas instâncias com a mesma estrutura.