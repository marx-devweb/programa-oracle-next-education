/*
let titulo = document.querySelector('h1'); //Selecionando a tag h1
titulo.innerHTML = "JOGO DO NÚMERO SECRETO"; //inserindo o texto 

let paragrafo = document.querySelector('p'); //Selecionando a tag p
paragrafo.innerHTML = "Escolha um número entre 1 e 10:"; //inserindo o texto
*/

let numeroAleatorio = gerarNumAleatorio();
console.log(`Número aleatório: ${numeroAleatorio}`);

//FUNÇÃO PARA SELECIONAR A TAG E INSERIR O TEXTO.
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('h1', 'JOGO DO NÚMERO SECRETO');
exibirTexto('p', 'Escolha um número entre 1 e 10:');

//CRIANDO UMA FUNÇÃO PARA VERIFICAR SE O NÚMERO INFORMADO PELO É IGUAL AO NÚMERO SECRETO.
function verificarChute() {
    let numeroInformado = document.querySelector('input').value;
    console.log(numeroInformado == numeroAleatorio)
}

function gerarNumAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}