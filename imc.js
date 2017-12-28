(function () {
    function calculaIMC(peso, altura) {
        return peso / (altura * altura);
    }


    function classificaIMC(imc) {
        if(imc <= 16.9){
            return 'Muito abaixo do peso';
        }
        else if(imc <=  18.4){
            return 'abaixo do peso';
        }
        else if(imc <= 24.9){
            return 'normal'
        }
        else if (imc <= 29.9){
            return 'acima do peso';
        }
        else if(imc <= 34.9){
            return 'Gordo Obeso'
        }
        else if (imc <= 40) {
            return 'Gordo Obeso 2'
        }else{
            return 'Gordo obeso 3'
        }
    }

    var peso = 77
    var altura = 1.77;

    var imc = calculaIMC(peso, altura);
    var classificacao = classificaIMC(imc);

    console.log('Vc está ein: ', imc )

})()