# Resolução do desafio da aula 03

### Enunciado e Código:

1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

   ```javascript
   let contCrescente = 1;
   while (contCrescente <= 10) {
       console.log(contCrescente);
       contCrescente++;
   }
   ```

2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

   ```javascript
   let contDecrecente = 10;
   while (contDecrecente >= 0) {
       console.log(contDecrecente);
       contDecrecente--;
   }
   ```

3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

   ```javascript
   let contRegre = prompt('Infome um número:');
   while(contRegre >=0 ) {
       console.log(contRegre);
       contRegre--;
   }
   ```

4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

   ```javascript
   let contProgressiva = prompt('Infome um número:');
   contador = 0;
   while (contador <= contProgressiva) {
       console.log(contador);
       contador++
   }
   ```

