const sequencia = {
    _valor: 1, // convenção: atributo privado
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
/*Esse objeto sequencia tem:
- Um atributo interno chamado _valor, que começa com 1.
- Um getter chamado valor, que retorna _valor e incrementa após retornar.
- Um setter chamado valor, que só atualiza _valor se o novo valor for maior que o atual.
*/

console.log(sequencia.valor, sequencia.valor) // 1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // 1000 1001
sequencia.valor = 900 // não altera pois é menor que o valor atual
console.log(sequencia.valor, sequencia.valor) // 1002 1003

/*Por que usar isso?
- Encapsulamento: _valor é tratado como privado (por convenção).
- Validação: o setter impede valores inválidos.
- Controle automático: o getter incrementa automaticamente, útil para gerar sequências únicas (como IDs).*/
