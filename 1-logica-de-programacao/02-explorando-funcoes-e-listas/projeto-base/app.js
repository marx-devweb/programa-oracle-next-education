let listaDeNumerosSorteados = []; //array para armazenar os números já sorteados.
let numeroMaximo = prompt('informe um número máximo para ser sorteado');
let numeroSecreto = gerarNumAleatorio(); //armazenando o número aleatório.
let quantidadeTentativas = 1; //armazenando a quantidade de tentativas.

//FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO.
function gerarNumAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1); //armazenando o número sorteado em uma variável.
    
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //armazenando a quantidade máxima de elementos do array.
    //Se a quantidade máxima de elementos do array for igual a numeroMaximo, nossa lista será reiniciada.
    if(quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }
    
    //CONDICIONAL PARA VERIFICAR SE O NÚMERO JÁ FOI SORTEADO OU NÃO
    //verificanso se o número sorteado já contém no array "listaDeNumerosSorteados" através do método .includes()
    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        //caso já contenha, a função irá sortear um novo número
        return gerarNumAleatorio();
    } else {
        //caso não contrario, a função irá armazenar o número sorteado no array "listaDeNumerosSorteados" e retornar o número sorteado.
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados)
        return numeroSorteado;
    }
}

//FUNÇÃO PARA SELECIONAR A TAG E INSERIR O TEXTO.
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'JOGO DO NÚMERO SECRETO');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroMaximo}:`);
}
exibirMensagemInicial();

//FUNÇÃO PARA VERIFICAR SE O NÚMERO INFORMADO PELO USUÁRIO É IGUAL AO NÚMERO SECRETO.
function verificarChute() {
    let numeroInformado = document.querySelector('input').value; //sece
    let palavraTentativa = quantidadeTentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} com ${quantidadeTentativas} ${palavraTentativa}.`;
    
    if (numeroInformado == numeroSecreto) {
        exibirTexto('h1', 'Parabéns!!!'); 
        exibirTexto('p', mensagemTentativas); 
        document.getElementById('btnReiniciarJogo').removeAttribute('disabled'); //habilitando o botão de novo jogo.
        document.getElementById('btnChutar').setAttribute('disabled', true); //desabilitando o botão de chutar
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
    document.getElementById('btnChutar').removeAttribute('disabled'); //habilitando o botão chutar.
}