console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
/* Adiciona um método reverse() a todas as strings.
• 	 this é a string atual.
• 	 split('') transforma em array de caracteres.
• 	 reverse() inverte.
• 	 join('') reconstrói a string.*/

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

//- Retorna o primeiro elemento do array.
//- Funciona com qualquer array:


console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou Tudo'
}

//- Isso altera o comportamento padrão de conversão de string.
//- Pode afetar qualquer operação que dependa de toString().

console.log('Escola Cod3r'.reverse())

/*Conclusão
Esse exemplo mostra que:
- É possível estender objetos nativos com novos métodos.
- Isso pode ser útil para reutilização e legibilidade.
- Mas modificar protótipos nativos (especialmente sobrescrever métodos como toString) pode causar efeitos colaterais em bibliotecas, frameworks ou outros trechos do código.
 */