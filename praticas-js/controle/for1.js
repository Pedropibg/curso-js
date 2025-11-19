let contador = 1 // Inicializa o contador com 1
while (contador <= 10) { // Enquanto o contador for menor ou igual a 10
    console.log(`contador = ${contador}`) // Imprime o valor do contador
    contador++ // Incrementa o contador em 1
}

for (let i = 1; i <= 10; i++) { // Inicializa i com 1, enquanto i for menor ou igual a 10, incrementa i em 1
    console.log(`i = ${i}`) // Imprime o valor de i
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // Array de notas
for (let i = 0; i < notas.length; i++) { // Percorre o array de notas
    console.log(`nota = ${notas[i]}`) // Imprime cada nota
}