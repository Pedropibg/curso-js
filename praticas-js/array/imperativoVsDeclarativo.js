const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
];

// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativo
const getNota = aluno => aluno.nota;
const soma = (total, valor) => total + valor;
const total2 = alunos.map(getNota).reduce(soma, 0);
console.log(total2 / alunos.length);

// Concluindo: na abordagem imperativa, descrevemos passo a passo como calcular a média das notas dos alunos usando um loop for.
// na abordagem declarativa, usamos métodos de array como map e reduce para expressar o que queremos fazer (calcular a média) sem detalhar o processo passo a passo.
// a abordagem declarativa tende a ser mais concisa e expressiva, focando no resultado desejado em vez dos detalhes de implementação.