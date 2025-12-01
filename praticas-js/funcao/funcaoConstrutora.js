function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0
    // método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro // instância do objeto Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // instância do objeto Carro com parâmetros personalizados
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// conclusão: funções construtoras são usadas para criar objetos com propriedades e métodos.
// Elas são definidas com a primeira letra maiúscula por convenção e são chamadas com o operador new.
// O this dentro da função construtora refere-se à nova instância do objeto que está sendo criada.