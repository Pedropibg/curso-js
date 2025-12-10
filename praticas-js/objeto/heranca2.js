// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += this.velMax
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

/*Por que usar super.status()?
- super é usado dentro de métodos para acessar o método do protótipo pai.
- Aqui, volvo.status() está sendo redefinido, mas ele reutiliza o método original de carro para complementar a saída.
 
 Quando usar super?
- Dentro de métodos que sobrescrevem métodos herdados.
- Quando você quer estender o comportamento, não substituir completamente.
- Funciona em objetos com Object.setPrototypeOf ou em classes com extends.

*/

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//- Define carro como protótipo de ferrari e volvo.

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())