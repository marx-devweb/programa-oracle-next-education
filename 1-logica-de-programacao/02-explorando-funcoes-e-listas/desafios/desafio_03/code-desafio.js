/*DESAFIO 01: Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura) ;
    if(imc < 18) {
        return console.log(`Seu IMC é ${imc.toFixed(2)} e você está em classificação de MAGREZA.`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        return console.log(`Seu IMC é ${imc.toFixed(2)} e você está em classificação NORMAL.`)
    } else if (imc >= 25 && imc <= 29.9) {
        return console.log(`Seu IMC é ${imc.toFixed(2)} e você está em classificação de SOBREPESO.`)
    } else if (imc >= 30 && imc <= 39.9) {
        return console.log(`Seu IMC é ${imc.toFixed(2)} e você está em classificação de OBESIDADE.`)
    } else {
        return console.log(`Seu IMC é ${imc.toFixed(2)} e você está em classificação de OBESIDADE.`)
    }
}
calcularIMC(1.63, 75)
console.log()

/*DESAFIO 02: Crie uma função que calcule o valor do fatorial de um número passado como parâmetro*/
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
console.log()


/*DESAFIO 03: Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o 
valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/
function converterMoeda(valorEmDolar) {
    let valorDoDolar = 4.80;
    let valorConvertido = valorEmDolar * valorDoDolar;

    console.log(`R$ ${valorConvertido.toFixed(2)}`);
}
converterMoeda(50.00)
console.log()

/*DESAFIO 04: Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando 
altura e largura que serão dadas como parâmetro.*/
function calcularRetangular(altura, largura) {
    let areaRetangulo = largura * altura;
    let perimetroRetangulo = 2 * (largura + altura)

    console.log(`Área da sala: ${areaRetangulo}m²`)
    console.log(`Perímetro da sala: ${perimetroRetangulo}m`)
}
calcularRetangular(11, 7)
console.log()

/*DESAFIO 05: Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu 
raio que será fornecido como parâmetro. Considere Pi = 3,14.*/
function calcularCircular(raio) {
    let pi = 3.14
    let areaCircular = pi * (raio * raio)
    let perimetroCircular = 2 * pi * raio;
    
    console.log(`Área da sala circular: ${areaCircular}m²`);
    console.log(`Perímetro da sala circular: ${perimetroCircular}m`);
}
calcularCircular(3)
console.log()

/*DESAFIO 06: Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.*/
function tabuada(numero) {
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
tabuada(10)