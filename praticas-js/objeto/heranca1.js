const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ == null) // Object.prototype.__proto__ == null → true, porque é o topo da cadeia.

/*- Quando você acessa uma propriedade ou método, o JavaScript procura:
- No próprio objeto.
- No __proto__ (protótipo pai).
- No protótipo do protótipo… até chegar em null.

O que é __proto__?
- É uma referência interna que todo objeto tem, apontando para seu protótipo pai.
- Em objetos literais ({}), __proto__ aponta para Object.prototype.
 */

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto) // Object é uma função construtora).
console.log(Object.prototype, MeuObjeto.prototype)

/*
Conclusão
- __proto__ é a ponte entre um objeto e seu protótipo.
- Permite herança de comportamento (métodos e propriedades).
- Toda função tem .prototype, e todo objeto tem __proto__.
- A cadeia termina em Object.prototype, que tem métodos como toString, hasOwnProperty, etc.
*/