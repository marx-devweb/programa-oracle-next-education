# Resolução do desafio  da aula 02

### Enunciado e Código:

1. Criar uma função que exibe "Olá, mundo!" no console.

   ```javascript
   function exibirMensagem() {
       return console.log("Olá mundo!");
   }
   exibirMensagem();
   ```

2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

   ```javascript
   function exibirNome(nome) {
       console.log(`Olá, ${nome}!`);
   }
   exibirNome('Marx');
   ```

3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

   ```javascript
   function calcularDobro(numero) {
       return numero * 2;
   }
   let resultadoDobro = calcularDobro(13);
   console.log(resultadoDobro);
   ```

4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

   ```javascript
   function calcularMedia(numero1, numero2, numero3) {
       return (numero1 + numero2 + numero3) / 3
   }
   let resultadoMedia = calcularMedia(30, 40, 50)
   console.log(resultadoMedia);
   ```

5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

   ```javascript
   function retornaMaior(numero1, numero2) {
   return numero1 > numero2 ? numero1 : numero2;
   }
   let resultadoMaior = retornaMaior(120, 22);
   console.log(resultadoMaior);
   ```

6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

   ```javascript
   function multiplicaPorEle(numero) {
      return numero * numero;
   }
   let resultadoMultiplica = multiplicaPorEle(13);
   console.log(resultadoMultiplica);
   ```
