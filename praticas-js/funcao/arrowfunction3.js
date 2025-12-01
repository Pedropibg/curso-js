let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // no node, global é o objeto global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // bind associa o this da função ao objeto obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) // no node, global é o objeto global
comparaComThisArrow(module.exports) // module.exports é o objeto do módulo atual
comparaComThisArrow = comparaComThisArrow.bind(obj) // bind não tem efeito em arrow functions
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)