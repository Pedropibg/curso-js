const fabricantes = ['Mercedes', 'Audi', 'BMW']

// indice seria a posição do elemento no array
function imprimir(nome, indice) { 
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // passando a função imprimir como callback, forEach chama imprimir para cada elemento do array
fabricantes.forEach(fabricante => console.log(fabricante)) // usando uma arrow function como callback para imprimir cada fabricante