function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2// operador lógico "OU"
    const comprarTv50 = trabalho1 && trabalho2// operador lógico "E"
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // operador lógico "OU exclusivo"
    const manterSaudavel = !comprarSorvete // operador lógico "NÃO"
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
