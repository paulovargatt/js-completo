function trataErro(erro) {
    throw new Error('...')
}

function imprimeNomeUpper(obj) {
    try {
        console.log(obj.name.toUpperCase()
    } catch (e) {
        trataErro(e)
    }
}

const obj = { nome: 'Paulo' }
imprimeNomeUpper(obj);