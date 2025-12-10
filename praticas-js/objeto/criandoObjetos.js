// usando a notação literal
// const obj1 = {a}
// console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // this.nome torna nome uma propriedade pública.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

// conclusão: 
// - Notação literal ({}): Simples e direta, ideal para objetos estáticos ou pequenos.
// - Construtor new Object(): Funcional, mas pouco usado hoje em dia por ser mais verboso.
// - Função construtora (function Produto): Permite criar múltiplas instâncias com encapsulamento parcial (propriedades públicas e privadas).
// - Função factory (criarFuncionario): Mais flexível e legível, ideal para encapsular lógica e evitar o uso de this.
