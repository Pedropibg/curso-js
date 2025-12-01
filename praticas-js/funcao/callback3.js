// exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

// No exemplo acima, uma função anônima é passada como callback para o evento de clique no corpo do documento HTML.
// Quando o usuário clica em qualquer lugar do corpo do documento, a função callback é executada, exibindo a mensagem no console.
// mesmo depois do código ser excluido do arquivo, o evento permanece ativo no browser até que a página seja recarregada.