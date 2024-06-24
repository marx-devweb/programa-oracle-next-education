/*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".*/
let diaDaSemana = alert('Infome o dia da semana:');
if (diaDaSemana == 'Sábado' || 'Domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}

/*Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.*/
let numeroInformado = alert('Informe um número');
if (numeroInformado >= 0 ) {
    alert('O número informado é positivo.');
} else {
    alert('O número informado é negativo.');
}

/*Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".*/
let pontuacao = prompt('Informe a pontuação');
if(pontuacao >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

/*Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.*/
saldoConta = 3490;
alert(`Seu saldo atual é de R$ ${saldoConta}.`)

/*Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/
let nome = prompt('Informe seu nome completo:')
alert(`Seja bem vindo(a) ${nome}.`)