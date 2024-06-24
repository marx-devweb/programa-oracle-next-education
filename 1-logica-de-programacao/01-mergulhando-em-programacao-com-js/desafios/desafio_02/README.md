# Resolução do desafio da aula 02

### Enunciado e Código:

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

   ```javascript
   let diaDaSemana = prompt('Infome o dia da semana:');
   if (diaDaSemana == 'Sábado' || 'Domingo') {
       alert('Bom final de semana!')
   } else {
       alert('Boa semana!')
   }
   ```

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

   ```javascript
   let numeroInformado = prompt('Informe um número');
   if (numeroInformado >= 0 ) {
       alert('O número informado é positivo.')
   } else {
       alert('O número informado é negativo.')
   }
   ```

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

   ```javascript
   let pontuacao = prompt('Informe a pontuação');
   if(pontuacao >= 100) {
       alert('Parabéns, você venceu!')
   } else {
       alert('Tente novamente para ganhar.')
   }
   ```

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

   ```javascript
   saldoConta = 3490;
   alert(`Seu saldo atual é de R$ ${saldoConta}.`)
   ```

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

   ```javascript
   let nome = prompt('Informe seu nome completo:')
   alert(`Seja bem vindo(a) ${nome}.`)
   ```

