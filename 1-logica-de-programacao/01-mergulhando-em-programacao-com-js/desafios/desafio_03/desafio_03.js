//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contCrescente = 1;
while (contCrescente <= 10) {
    console.log(contCrescente);
    contCrescente++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contDecrecente = 10;
while (contDecrecente >= 0) {
    console.log(contDecrecente);
    contDecrecente--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contRegressiva = prompt('Infome um número:');
while(contRegressiva >=0 ) {
    console.log(contRegressiva);
    contRegressiva--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contProgressiva = prompt('Infome um número:');
contador = 0;
while (contador <= contProgressiva) {
    console.log(contador);
    contador++
}