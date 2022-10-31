class Calculadora {
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }

    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }

    Potenciar(num, exp){
        let numero = num;
        for(var i = 1; i < exp; i++){
            numero = numero * num ;
        }
        return num**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
}