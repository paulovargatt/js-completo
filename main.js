function minhaFuncao(n1 , n2) {
    return n1 + n2
}

var soma = minhaFuncao(1,9)
console.log(soma)

soma.teste = 'Propriedade Funcao';

console.log(soma.teste)


var x = 5;
function mostraX() {
    let x = 10;
    console.log('Mostra X: ' , x)
}
mostraX()
console.log('mostra X: ' , x)

function somar() {
    console.log(arguments);
    var result = 0;
    var x = 0;
        while (arguments[x]) {
            result += arguments[x];
            x++
        }
    console.log('result: ', result);
}

somar(20,20,10,30,1800,1500,150)