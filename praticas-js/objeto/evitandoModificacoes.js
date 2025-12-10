// Object.preventExtensions, Cria um objeto que não pode receber novas propriedades.
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag:'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.any = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal, Não pode adicionar nem remover propriedades. Pode modificar valores existentes.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
