alert("Seja bem-vidos(a) ao jogo do número secreto. Precione enter para iniciar.")
let numSecreto = 5; //armazenando o número secreto na variável.
let numInformado = prompt("Informe um número entre 1 e 10:"); //criando interação com o úsuario, onde ele irá informa um número.

//Criando uma condicional if(se). 
//Se o número informado pelo usúario for igual ao número armazenado na variável "numSecreto", a mensagem será impresa no console.
if(numSecreto == numInformado) {
    alert(`Parabéns! Você acertou o número secreto ${numSecreto}.`)
}