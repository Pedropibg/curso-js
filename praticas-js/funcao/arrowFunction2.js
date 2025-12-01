function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000); // arrow function herda o this do contexto onde foi criada (Pessoa)
}

new Pessoa();

