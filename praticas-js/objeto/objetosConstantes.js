// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } // Erro! Atribuição de novo objeto não é permitida
Object.freeze(pessoa) // Congela o objeto, impedindo alterações em suas propriedades

pessoa.nome = 'Maria' // Não vai alterar, pois o objeto está congelado
pessoa.endereco = 'Rua ABC' // Não vai adicionar nova propriedade
delete pessoa.nome // Não vai deletar a propriedade

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria' // Não vai alterar
console.log(pessoaConstante.nome)

// conclusão: objetos declarados com const podem ter suas propriedades alteradas, mas não podem ser reatribuídos
// para evitar alterações em um objeto, use Object.freeze() para congelá-lo
// cuidado ao usar Object.freeze(), pois ele impede qualquer modificação no objeto, o que pode não ser desejável em todos os casos
