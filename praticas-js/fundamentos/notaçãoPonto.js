console.log(Math.ceil(6.1)) // arredonda para cima

const obj1 = {}
obj1.nome = 'Bola' 
// obj1['nome'] = 'Bola' // outra forma de fazer
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // isso faz referência ao objeto que está sendo criado
    this.exec = function() {  // this.exec significa que a função exec pertence ao objeto que está sendo criado
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

// conclusão: funções construtoras são usadas para criar objetos!