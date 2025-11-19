function notasDaProva(nota) {
    if(nota >=7){
        console.log('Aprovado com ' + nota)
    }   
    if(nota < 7){
        console.log('Reprovado com ' + nota)
    }        
}

notasDaProva(8.1)
notasDaProva(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // undefined
seForVerdadeEuFalo(null) // null
seForVerdadeEuFalo(undefined) // undefined
seForVerdadeEuFalo(NaN) // Not a Number
seForVerdadeEuFalo('') // string vazia
seForVerdadeEuFalo(0) // zero 
seForVerdadeEuFalo(-1) // negativo
seForVerdadeEuFalo(' ') // string com espaço
seForVerdadeEuFalo('?') // string com caractere
seForVerdadeEuFalo([]) // array vazio
seForVerdadeEuFalo([1, 2]) // array com valores
seForVerdadeEuFalo({}) // objeto vazio

// mostra o que foi preenchido