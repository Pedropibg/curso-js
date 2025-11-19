function tratarErroELancar(erro) {
    // throw new Error('...') // lançando um novo erro
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally {
        throw new Error('Erro no bloco finally')
        console.log('final')
    }
    
}

const obj = { name: null } // altere para { name: null } para gerar o erro
imprimirNomeGritado(obj)

// conclusão: o bloco try tenta executar um código que pode gerar um erro. Se ocorrer um erro, o bloco catch captura esse erro e executa um código para lidar com ele. O bloco finally é opcional e sempre será executado, independentemente de ter ocorrido um erro ou não. um exemplo de erro é tentar acessar uma propriedade de um objeto que é undefined ou null.