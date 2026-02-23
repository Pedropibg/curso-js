const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 6.8, bolsista: false },
  { nome: 'Ana', nota: 8.5, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) // false, reduce serve para reduzir o array a um único valor, a => a serve para pegar o valor de bolsista de cada aluno.

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) // true

// concluindo: no primeiro desafio, o reduce verifica se todos os valores são true usando o operador lógico AND (&&).
// no segundo desafio, o reduce verifica se algum valor é true usando o operador lógico OR (||).
// os valores iniciais do acumulador são importantes para garantir o comportamento correto da operação lógica.