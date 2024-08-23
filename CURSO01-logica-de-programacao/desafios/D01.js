// desafio 01 - módulo: 01. Iniciando com JavaScript
alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
error("Erro! Preencha todos os campos")
let mensagemDeErro = "Erro! Preencha todos os campos";
let nomeUsario = prompt("Digite seu nome: ");
let idadeUsuario = prompt("Digite sua idade: ");
let idadeInteira = parseInt(idadeUsuario, 10);
if(idadeInteira >= 18){
    alert("Pode tirar a carteira de motorista, maior de idade");
}else{
    alert("Não pode tirar a carteira de motorista, menor de idade");
}

