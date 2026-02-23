const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 6.8, bolsista: false },
  { nome: 'Ana', nota: 8.5, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0) // 0 é o valor inicial do acumulador, caso contrário, o acumulador iniciaria com o primeiro valor do array

console.log(resultado)

// concluindo: o reduce percorre o array, pegando o valor do acumulador e somando com o valor atual, retornando a soma total das notas.
// o valor inicial do acumulador é 0, então a primeira iteração será 0 + 7.3, depois 7.3 + 9.2, e assim por diante.
// no final, o resultado será a soma total das notas dos alunos.