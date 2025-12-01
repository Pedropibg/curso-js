const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar(); // Bom dia!
const falar = pessoa.falar;
falar(); // undefined (no contexto de execução global, this não aponta para o objeto pessoa)

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia! (bind associa o this ao objeto pessoa)

// bind também pode ser usado para criar funções com contexto específico