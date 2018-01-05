const imprimeResul = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
            case 8: case 7:
            console.log('Aprovado')
            break
            case 6: case 5: case 4:
            console.log('Recuperação')
            break
            case 3: case 2: case 1: case 0:
            console.log('Se Fodeu')
            break
            default:
            console.log('Invalid')
    }
}

imprimeResul(9)
imprimeResul(8.9)
imprimeResul(6)
imprimeResul(2)
imprimeResul('error')