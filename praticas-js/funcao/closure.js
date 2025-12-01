// closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // imprime 'Global' porque dentro() acessa a variável x do escopo global

// No exemplo acima, a função dentro() é uma closure que captura o contexto léxico onde foi definida.
// Mesmo quando dentro() é chamada fora do seu escopo original, ela ainda tem acesso à variável x do escopo onde foi criada (fora()).
// Isso demonstra como closures podem "lembrar" do ambiente em que foram criadas, permitindo o acesso a variáveis externas mesmo após o término da execução da função externa.