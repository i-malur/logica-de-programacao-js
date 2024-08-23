let h1 = document.querySelector("h1");
h1.innerHTML("Hora do Desafio.");

function exibirMensagem(){
    console.log("O botão foi clicado.");
}

function exibirAlerta(){
    alert("Eu amo JS!");
}

function exibirCidade(){
    let cidade = prompt("Digite um nome de cidade: ");
    alert("Estive em " + cidade + " e pensei em você :)");
}

function exibirSoma(){
    alert("Atenção! Digite APENAS números INTEIROS!")
    let numero01 = prompt("Digite um número: ");
    num01 = parseInt(numero01, 10);
    let numero02 = prompt("Digite outro número número: ");
    num02 = parseInt(numero02, 10);
    let soma = num01 + num02;
    alert("Soma dos dois número digitados: " + soma);
}