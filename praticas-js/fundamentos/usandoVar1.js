{
    {
        {
            {
                var sera = 'Será???' // var não respeita escopo de bloco
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)// erro, pois 'local' está fora do escopo da função