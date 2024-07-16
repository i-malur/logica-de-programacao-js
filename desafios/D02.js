let diaSemana = prompt("Que dia é hoje? ").toLowerCase();

if(diaSemana == 'sábado' || diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert("Bom final de semana!");
}else{
    alert("Boa semana!");
}

let numeroDigitado = prompt("Digite um número: ");
let numeroInteiro = parseInt(numeroDigitado, 10);

if(numeroInteiro < 0){
    alert("Número negativo!");
}else{
    alert("Número positivo!");
}

let pontos = prompt("Qual é a pontuação? ");
let pontuacaoInteira = parseInt(pontos, 10);

if(pontuacaoInteira >= 100){
    alert("Você venceu!");
}else{
    alert("Tente novamente! Não foi dessa vez :(");
}

let saldo = 700;
alert(`Saldo atual ${saldo}`);

let nome = prompt("Digite seu nome: ");
alert(`Bem vindo ${nome}!`)