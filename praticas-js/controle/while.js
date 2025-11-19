function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Gera número aleatório entre min e max
    return Math.floor(valor) // Arredonda para baixo e retorna um número inteiro
}

let opcao = 0 // Inicializa a variável opcao com 0

while (opcao != -1) { // Enquanto opcao for diferente de -1, o loop continua
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')