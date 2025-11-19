const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break // Interrompe o loop quando x é igual a 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue // Pula a iteração quando y é igual a 5
    }
    console.log(`${y} = ${nums[y]}`) // Imprime todos os valores, exceto quando y é 5
}

externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // Interrompe o loop externo quando a é 2 e b é 3
        }
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')