alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroChute;
let tentativas = 0;

while(numeroChute != numeroSecreto){
    numeroChute = prompt(`Digite número entre 1 e ${numeroMaximo}:`);
    tentativas++;
    console.log("Comparação entre números: ", numeroChute == numeroSecreto);
    if (numeroChute == numeroSecreto){
        console.log("Acertou!")
        break;
    }else{
        if(numeroChute > numeroSecreto){
            alert(`Número secreto é menor que ${numeroChute}`);
        }else{
            alert(`Número secreto é maior que ${numeroChute}`);
        }   
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou! Jogou ${tentativas} ${palavraTentativa}.`);


