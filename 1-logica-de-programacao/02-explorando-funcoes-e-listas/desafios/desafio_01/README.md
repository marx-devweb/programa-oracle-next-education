# Resolução do desafio  da aula 01

### Código HTML para o desafio

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1></h1>
    </header>
    <main class="container">
        <button onclick="botaoConsole()" class="button">Console</button>
        <button onclick="botaoAlert()" class="button">Alert</button>
        <button onclick="botaoPrompt()" class="button">Prompt</button>
        <button onclick="botaoSoma()" class="button">Soma</button>
    </main>

      <script src="app.js"></script>
</body>
</html>
```

1. Altere o conteúdo da tag `h1` com `document.querySelector` e atribua o seguinte texto: `Hora do Desafio`.

   ```javascript
   let cabecalho = document.querySelector('h1');
   cabecalho.innerHTML = "Hora do Desafio";
   ```

2. Crie uma função que exiba no console a mensagem `O botão foi clicado` sempre que o botão `Console` for pressionado.

   ```javascript
   function botaoConsole() {
       alert("O botão foi clicado");
   }
   ```

3. Crie uma função que exiba um alerta com a mensagem: `Eu amo JS`, sempre que o botão `Alerta` for pressionado.

   ```javascript
   function botaoAlert() {
       alert("Eu amo JS");
   }
   ```

4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: `Estive em {cidade} e lembrei de você`.

   ```javascript
   function botaoPrompt() {
       let cidade = prompt("Informe uma cidade:");
       alert(`Estive em ${cidade} e lembrei de você.`)
   }
   ```

5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

   ```javascript
   function botaoSoma() {
       let numero1 = parseInt(prompt("informe um número:"));
       let numero2 = parseInt(prompt("informe outro número:"));
   
       let soma = numero1 + numero2;
       alert(`A soma de ${numero1} + ${numero2} é ${soma}`);
   }
   ```
