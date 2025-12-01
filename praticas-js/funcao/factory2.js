function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
} // aqui ele cria uma função factory que retorna um objeto produto com nome, preço e desconto

console.log(criarProduto('Notebook', 2199.49)) // chama a função factory para criar um produto Notebook
console.log(criarProduto('iPad', 1199.49)) // chama a função factory para criar um produto iPad

// conclusão: funções factory são usadas para criar objetos com propriedades e métodos.
// Elas retornam um novo objeto a cada chamada, permitindo a criação de múltiplas instâncias com a mesma estrutura.