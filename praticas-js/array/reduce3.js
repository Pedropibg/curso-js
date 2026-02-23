Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0];
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
}

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5];
console.log(nums.reduce2(soma, 21)); // 35

// concluindo: essa implementação personalizada do reduce funciona de maneira semelhante ao reduce nativo do JavaScript.
// ela aceita um callback e um valor inicial opcional para o acumulador.
// se o valor inicial for fornecido, o acumulador começa com esse valor; caso contrário, começa com o primeiro elemento do array.
// o loop percorre o array, aplicando o callback para acumular um único valor final.