function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final') // fora da caixa só se associa 1
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com ponto e vígula
        console.log(num)
    }
}

teste2(6)
teste2(8)