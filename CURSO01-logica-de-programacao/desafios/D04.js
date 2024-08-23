console.log("Boas vindas!");

let nome = "Maria Luiza"
console.log(`Bem vinda ${nome}!`);
alert(`Bem vinda ${nome}!`);

let linguagem = prompt("Qual a linguagem de programação que você mais gosta? ");
console.log("A linguagem de programação que você mais gosta é: " + linguagem);

let valor1 = 70;
let valor2 = 10;
let soma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${soma}.`)

let idade = prompt("Digite sua idade: ");
let idadeInt = parseInt(idade, 10)

if(idadeInt >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

let numeroDigitado = prompt("Digite um número: ");
let numeroInteiro = parseInt(numeroDigitado, 10);

if(numeroInteiro < 0){
    alert("Número negativo!");
}else{
    alert("Número positivo!");
}

let numeroContador = 0;
while(numeroContador < 10) {
    numeroContador++;
    console.log(numeroContador);
}

let nota1 = 10;
let nota2 = 8.5;
let media = (nota1 + nota2)/2;
console.log(`A soma de ${nota1} e ${nota2} é igual a ${media}.`);

if (media >= 7){
    console.log("Aprovado!")
}else{
    console.log("Reprovado!")
}

console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));