function getInteiro(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 5000

while (opcao != -10) {
    opcao = getInteiro(-1, 1000000000)
    console.log('opcao' + opcao)
}