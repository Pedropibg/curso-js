const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(produtos.filter(function (p) {
    return false
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

// conclusão: filter cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// No exemplo acima, caro e fragil são funções de callback que retornam true ou false com base em uma condição específica.
// Se a função retornar true, o elemento é incluído no novo array; se retornar false, o elemento é excluído.
// Assim, produtos.filter(caro) retorna um array de produtos com preço maior ou igual a 500,
// e o resultado desse filtro é então passado para produtos.filter(fragil) para obter apenas os produtos frágeis dentre os caros.