function Pesssoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); // bind associa o this da função ao this do contexto onde foi criada (Pesssoa)
}

new Pesssoa();