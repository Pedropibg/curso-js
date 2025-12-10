function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //- obj1 e obj2 foram criados com new MeuObjeto, então ambos têm o mesmo protótipo.
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
//- Agora, qualquer objeto criado com new MeuObjeto() terá acesso a nome e falar via herança.

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar()

/* Conclusão
Esse exemplo mostra como:
- Funções construtoras definem protótipos compartilhados.
- Instâncias criadas com new herdam comportamento via __proto__.
- Métodos e propriedades no protótipo são acessíveis por todas as instâncias.
- É possível conectar objetos manualmente à cadeia de protótipos. */
