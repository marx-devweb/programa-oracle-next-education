let cabecalho = document.querySelector('h1');
cabecalho.innerHTML = "Hora do Desafio";

function botaoConsole() {
    alert("O botão foi clicado");
}

function botaoAlert() {
    alert("Eu amo JS");
}

function botaoPrompt() {
    let cidade = prompt("Informe uma cidade:");
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function botaoSoma() {
    let numero1 = parseInt(prompt("informe um número:"));
    let numero2 = parseInt(prompt("informe outro número:"));

    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} + ${numero2} é ${soma}`);
}