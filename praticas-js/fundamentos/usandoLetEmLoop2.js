const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {  // cria uma função e armazena no array
        console.log(i)
    })
}

funcs[2]() // usamos [] e () para chamar a função armazenada no índice 2 do array
funcs[6]()
funcs[8]()