/*
let titulo = document.querySelector('h1'); //Selecionando a tag h1
titulo.innerHTML = "JOGO DO NÚMERO SECRETO"; //inserindo o texto 

let paragrafo = document.querySelector('p'); //Selecionando a tag p
paragrafo.innerHTML = "Escolha um número entre 1 e 10:"; //inserindo o texto
*/

let numeroSecreto = gerarNumAleatorio(); //armazenando o número aleatório.
let quantidadeTentativas = 1; //armazenando a quantidade de tentativas.

//FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO.
function gerarNumAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

//FUNÇÃO PARA SELECIONAR A TAG E INSERIR O TEXTO.
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'JOGO DO NÚMERO SECRETO');
    exibirTexto('p', 'Escolha um número entre 1 e 10:');
}
exibirMensagemInicial()

//FUNÇÃO PARA VERIFICAR SE O NÚMERO INFORMADO PELO USUÁRIO É IGUAL AO NÚMERO SECRETO.
function verificarChute() {
    let numeroInformado = document.querySelector('input').value; //sece
    let palavraTentativa = quantidadeTentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} com ${quantidadeTentativas} ${palavraTentativa}.`;
    
    if (numeroInformado == numeroSecreto) {
        exibirTexto('h1', 'Parabéns!!!'); 
        exibirTexto('p', mensagemTentativas); 
        document.getElementById('btnReiniciarJogo').removeAttribute('disabled'); //habilitando o botão de novo jogo.
    } else {
        numeroInformado > numeroSecreto ? exibirTexto('p', 'O número secreto é menor.') : exibirTexto('p', ' número secreto é maior.')
        quantidadeTentativas++; //contando a quantidade de tentativas.
    }
    limparCampo();
}

function limparCampo() {
    let numeroInformado = document.querySelector('input');
    numeroInformado.value = '';
}

//FUNÇÃO PARA REINICIAR JOGO
function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    quantidadeTentativas = 1;
    limparCampo(); 
    exibirMensagemInicial();
    document.getElementById('btnReiniciarJogo').setAttribute('disabled', true); //desabilitando o botão novo jogo quando invocar a função.
}