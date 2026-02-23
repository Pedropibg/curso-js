Array.prototype.map2 = function(callback) {
  const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    { "nome": "Caneta", "preco": 7.99 },
    { "nome": "Impressora", "preco": 649.50 },
    { "nome": "Caderno", "preco": 27.10 },
    { "nome": "Lapis", "preco": 5.82 },
    { "nome": "Tesoura", "preco": 19.20 }
]

const paraObjeto = json => JSON.parse(json) // json é uma string no formato JSON, parse converte para objeto JavaScript
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)