function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Gera número aleatório entre min e max
    return Math.floor(valor) // Arredonda para baixo e retorna um número inteiro
}

let opcao = 0 // Inicializa a variável opcao com 0

do { // Executa o bloco pelo menos uma vez
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1)// Enquanto opcao for diferente de -1, o loop continua

console.log('Até a próxima!')

// O bloco dentro do 'do' será executado pelo menos uma vez, mesmo que a condição no while seja falsa desde o início.