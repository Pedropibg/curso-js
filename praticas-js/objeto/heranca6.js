function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

/*- Essa função novo recria o comportamento do new:
- Cria um objeto vazio.
- Define seu protótipo manualmente.
- Executa a função construtora com apply, passando o objeto como contexto (this).
- Retorna o objeto.
 */

const aula3 = novo(Aula, 'Bem Vindo')
const aula4 = novo(Aula, 'Até Breve')
console.log(aula3, aula4)

//Esse exemplo mostra que o operador new não é mágico — ele segue uma sequência lógica que pode ser reproduzida manualmente. Isso é útil para entender como funciona a criação de instâncias, como o protótipo é atribuído, e como métodos e propriedades são herdados.