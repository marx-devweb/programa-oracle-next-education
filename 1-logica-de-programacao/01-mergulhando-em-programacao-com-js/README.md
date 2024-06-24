# Lógica de Programação

A lógica de programação nada mais é do que uma sequência de passos para resolver um problema. Quem vai resolver o problema, nesse caso, é o computador, baseado nas instruções que passamos para ele. Então, precisamos saber quais tipos de instruções o computador entende e qual a melhor forma de passarmos os comandos para nos comunicarmos com ele.

### Índice

[Aula 01: Iniciando com JavaScript](#ancora1)

[Aula 02: Condicionais e concatenação](#ancora2)

[Aula 03: Loops e tentativas](#ancora3)

[Aula 03: Loops e tentativas](#ancora4)

[Aula 04: Boas práticas de programação](#ancora5)

[Aula 05: Desafio](#ancora5)

[Desafios das Aulas](desafios)

<br>

<a id="ancora1"></a>

### Aula 01: Iniciando com JavaScript

Nesta aula, foi abordado os seguintes tópicos:

- Preparamos o ambiente de desenvolvimento com a instalação do Visual Studio Code para criar programas utilizando a linguagem JavaScript;

- Entendemos o conceito de variável para guardar informações, como números ou palavras;

- Usamos o `alert` para exibir uma mensagem passando algumas instruções sobre o programa e usamos o `prompt` para interagir com a pessoa permitindo inserir um valor e armazenando em uma variável;

  ```javascript
  alert("Seja bem-vidos(a) ao jogo do número secreto. Precione enter para iniciar.")
  let numInformado = prompt("Informe um número entre 1 e 10:");
  ```

- Criamos um `if`, que é uma instrução em programação que permite ao computador tomar decisões ao executar um bloco de código apenas se uma condição específica for verdadeira.

  ```
  if(numSecreto == numInformado) {
      console.log("Parabéns! Você acertou o número secreto.")
  }
  ```

---

<a id="ancora2"></a>

### Aula 02: Condicionais e concatenação

Nesta aula, foi abordado os seguintes tópicos:

- Utilizamos o console para testar e depurar nosso código, exibindo mensagens e valores durante a execução do programa;

- Aprendemos a utilizar estruturas condicionais (if/else) para criar lógicas que permitem ao programa tomar decisões com base em condições específicas;

- Implementamos um bloco de código para exibir uma mensagem caso o chute do usuário não seja igual ao número secreto;

  ```javascript
  if(numSecreto == numInformado) {
      alert(`Parabéns! Você acertou o número secreto ${numSecreto}.`)
  } else {
      alert("Você errou! Tente novamente.")
  }
  ```

---

<a id="ancora3"></a>

### Aula 03: Loops e tentativas

Nesta aula, foi abordado os seguintes tópicos:

- Aprendemos a verificar se um número é maior ou menor do que outro utilizando estruturas condicionais `if/else` em nosso programa;

  ```javascript
  if (numInformado > numSecreto) { 
    //Se "numInformado" for maior que "numSecreto" exibirá a mensagem:
    alert(`O número secreto é menor que ${numInformado}.`)
  } else {
    //caso contrário exibirá a mensagem:
    alert(`O número secreto é maior que ${numInformado}.`)
  }
  ```

- Utilizamos o loop `while` para repetir um bloco de código enquanto uma determinada condição for verdadeira, e permitir assim que o programa execute uma ação várias vezes;

  ```javascript
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
  }
  ```

- Implementamos um contador de tentativas para acompanhar e exibir a quantidade de vezes que o usuário tentou adivinhar um número secreto. Podemos fazer isso, por exemplo, em um jogo de adivinhação.

  ```javascript
  let tentativas = 1;
  
  tentativas++ //++ irá adicionar 1 a variável "tentativas".
  ```

---

<a id="ancora4"></a>

### Aula 04: Boas práticas de programação

Nesta aula, foi abordado os seguintes tópicos:

- Aprendemos a interromper a execução de um loop `while` usando o comando `break`.

  ```javascript
  while (numInformado != numSecreto) {
      numInformado = prompt("Informe um número entre 1 e 100:");
  
      if(numInformado == numSecreto) {
          break; 
          //Se "numInformado" for igual a "numSecreto", o break irá parar a execução do while e exibirá o alert que está fora do bloco while.
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
  ```

- Implementamos uma lógica com o operador ternário para ajustar automaticamente o plural e o singular da palavra 'tentativa', dependendo do número de tentativas realizadas pelo usuário.

  ```javascript
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  ```

- Para gerar um número aleatório e armazená-lo na variável `numSecreto`, utilizamos a função `Math.random()` combinada com a função `parseInt()`, que garante que o valor armazenado seja um número inteiro.

  ```
  let numSecreto = parseInt(Math.random() * 100 + 1);
  ```

---

<a id="ancora5"></a>

### Aula 05: Desafio

Nesta aula, foi abordado os seguintes tópicos:

- Implementamos uma lógica para que o usuário informe o número máximo do desafio.

  ```javascript
  let numMaximo = prompt("informe um número máximo para o desafio:") 
  ```

  ```javascript
  let numSecreto = parseInt(Math.random() * numMaximo + 1)
  ```

  ```javascript
  numInformado = prompt(`Informe um número entre 1 e ${numMaximo}:`);
  ```

<br>

