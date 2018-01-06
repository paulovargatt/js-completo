function getInteiro(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 5000

do{
    opcao = getInteiro(-1, 5)
    console.log('opcao' + opcao)
} while (opcao != -10)