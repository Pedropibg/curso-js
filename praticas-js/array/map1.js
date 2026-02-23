const nums = [1, 2, 3, 4, 5]

// for com propósito
let resultado = nums.map(function (e) { // e é o elemento, que significa cada valor do array
  return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`//parseFloat converte para número float, toFixed(2) deixa com 2 casas decimais, replace troca o ponto por vírgula, número float significa número com casas decimais

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)