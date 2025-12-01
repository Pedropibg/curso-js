function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

console.log(getPreco()) // NaN, pois this não está referenciando o objeto produto
console.log(produto.getPreco()) // R$ 3900.65, pois this está referenciando o objeto produto

const carro = { preco: 49990, desconto: 0.20 }

console.log(getPreco.call(carro)) // R$ 39992, pois call define this como o objeto carro
console.log(getPreco.apply(carro)) // R$ 39992, pois apply define this como o objeto carro

console.log(getPreco.call(carro, 0.17, 'US$')) // US$ 46790.64, passando argumentos para call
console.log(getPreco.apply(global, [0.17, 'US$'])) // US$ 46790.64, passando argumentos para apply como array