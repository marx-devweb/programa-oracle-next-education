alert("Seja bem-vidos(a) ao jogo do número secreto. Precione enter para iniciar.")
let numSecreto = 5; //variável para armazenar o número secreto.
let numInformado; //variável para armazenanr o número informado pelo usuário.
let tentativas = 1; //variável para armazenar a quantidade de tentativas.

//Adicionando condicional while (enquanto).
//A execução das instruções vai continuar até que uma condição seja verdadeira.
//Neste caso, o código abaixo será executado ate que o usuário acerte o número secreto.
while (numInformado != numSecreto) {
    numInformado = prompt("Informe um número entre 1 e 10:");

    if(numInformado == numSecreto) {
        //Se "numInformado" for igual a "numSecreto" exibirá a mensagem:
        alert(`Parabéns! Você acertou o número secreto ${numSecreto} com ${tentativas} tentativas.`)
    } else { //Aninhando if/else dentro do else.
        if (numInformado > numSecreto) { 
            //Se "numInformado" for maior que "numSecreto" exibirá a mensagem:
            alert(`O número secreto é menor que ${numInformado}.`)
        } else {
            //caso contrário exibirá a mensagem:
            alert(`O número secreto é maior que ${numInformado}.`)
        }
    }
    tentativas++ //++ irá adicionar 1 a variável "tentativas" até que o usuário acerte a valor secreto.
}