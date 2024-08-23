function imc(altura, peso){
    somaIMC = peso / (altura*altura);
    if (somaIMC <  16.9){
        alert("Muito abaixo do peso!");
    }else if (somaIMC >=  16.9 && somaIMC <= 18.4){
        alert("Abaixo do peso!");
    }else if(somaIMC >= 18.5 && somaIMC <= 24.9){
        alert("Peso normal!");
    }else if(somaIMC >= 25 && somaIMC <= 29.9){
        alert("Acima do peso!");
    }else if (somaIMC >= 30 && somaIMC <= 34.9){
        alert("Obesidade I");
    }else if (somaIMC >= 35 && somaIMC <= 40){
        alert("Obesidade II");
    }else{
        alert("Obesidade III!");
    }
}

imc(1.60, 43)

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(6));

function conversao(valorEmDolar){
    let cotacaoEmDolar = 4.80
    let valorEmReais = cotacaoEmDolar * valorEmDolar
    return valorEmReais.toFixed(2);
}

console.log(`${conversao(300)} dólares equivalem a R$ ${valorEmReais}`);

function areaRetangular(largura,altura){
    return largura*altura;
}

console.log(areaRetangular(12.9, 25.8));

function salaCircular(raio){
    areaSala = Math.PI * (raio*raio);
    perimetroSala = 2 * Math.PI * raio;

    return areaSala, perimetroSala;
}

console.log(salaCircular(12.5));

function tabuada(numeroParametro){
    resultado = "";
    for(let i = 0; i <11; i++){
        soma = numeroParametro * i;
        resultado = `${numeroParametro} x &{i} = ${soma}`;
    }

    return resultado;
}
console.log(tabuada(2));