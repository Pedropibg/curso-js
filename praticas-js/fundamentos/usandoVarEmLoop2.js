const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// Nesse caso, como 'var' não respeita escopo de bloco, o valor final de 'i' após o loop é 10.
// Portanto, todas as funções armazenadas no array 'funcs' irão imprimir 10 quando chamadas.