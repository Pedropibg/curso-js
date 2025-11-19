function random([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // destructuring para inverter os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random([50, 40]))
console.log(random([992]))
console.log(random([, 10]))
console.log(random([]))
// console.log(random()) // erro, pois a função espera um array como parâmetro