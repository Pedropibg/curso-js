const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // forma tradicional
const obj2 = { a, b, c } // forma simplificada (ES6)
console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // forma tradicional
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr } // forma simplificada (ES6)
console.log(obj4)

//- A forma tradicional exige criar o objeto e depois atribuir a propriedade.
//- Com ES6, você pode usar colchetes diretamente na definição para criar chaves dinâmicas.


const obj5 = {
    funcao1: function() {
        // forma tradicional
        return 'Olá'
    },
    funcao2() {
        // forma simplificada (ES6) // es6 significa ECMAScript 2015
        return 'Olá'
    }
}

console.log(obj5.funcao1())
console.log(obj5.funcao2())