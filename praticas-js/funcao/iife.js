// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})();

// conclusão: IIFEs são úteis para criar um escopo isolado, evitando poluição do escopo global e protegendo variáveis e funções de interferências externas.
// Elas são definidas como expressões de função e invocadas imediatamente após sua criação.