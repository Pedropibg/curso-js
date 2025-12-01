const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // imprime 'Global' por causa do contexto léxico, onde a função foi definida, não onde foi chamada