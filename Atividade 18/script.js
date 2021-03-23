// ATIVIDADE 1

/*O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição.
 Escreva um programa que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar.*/

function prato(){
    var pesoPrato = parseFloat(document.querySelector("#pesoPrato").value);

    document.querySelector("#resultado").innerHTML = "Valor a pagar = "+pesoPrato * 12+" reais";
}
// ATIVIDADE 2

/* Faça um programa que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. 
Sabe-se que o segundo número não pode ser zero.*/

function divisao(){
    var primeiroNumero = parseFloat(document.querySelector("#primeiroNumero").value);
    var segundoNumero = parseFloat(document.querySelector("#segundoNumero").value);

    if(segundoNumero != 0){
        let divisor = primeiroNumero / segundoNumero;
        document.querySelector("#resultado").innerHTML = divisor;
        
    }else document.querySelector("#resultado").innerHTML = "O segundo número não pode ser zero";
}
// ATIVIDADE 3

/*Faça um programa que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas.*/

function pesoPessoa(){
    var peso = parseFloat(document.querySelector("#pesoPessoa").value);

    var gramas = peso * 1000;
    document.querySelector("#resultado").innerHTML = "Seu peso em gramas = " + gramas;
}
// ATIVIDADE 4

/*Faça um programa que receba um número e diga se este número está no intervalo entre 100 e 200.*/

function intervalo(){
    var num = parseInt(document.querySelector("#intervalo").value);

    if(num > 100 && num < 200) document.querySelector("#resultado").innerHTML = "O número está entre 100 e 200";
    else document.querySelector("#resultado").innerHTML = "O número não está entre 100 e 200";
}
// ATIVIDADE 5

/*Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução?*/

function maiorDeTres(){
    var primeiroValor = parseInt(document.querySelector("#primeiroValor").value);
    var segundoValor = parseInt(document.querySelector("#segundoValor").value);
    var terceiroValor = parseInt(document.querySelector("#terceiroValor").value);
    var aux;

    if(primeiroValor > terceiroValor)
    {
        aux = terceiroValor;
        terceiroValor = primeiroValor;
        primeiroValor = aux;
    }

    if(primeiroValor > segundoValor)
    {
        aux = segundoValor;
        segundoValor = primeiroValor;
        primeiroValor = aux;
    }

    if(segundoValor > terceiroValor)
    {
        aux = terceiroValor;
        terceiroValor = segundoValor;
        segundoValor = aux;
    }

    document.querySelector("#resultado").innerHTML = "Maior valor = " + terceiroValor;
    document.querySelector("#resultado2").innerHTML = "Menor valor = " + primeiroValor;
}
// ATIVIDADE 9

/*Escreva um programa que recebe um número inteiro e diga se é par ou ímpar. Use o operador matemático % 
(resto da divisão ou módulo) e o teste condicional if.*/

function parOuImpar(){
    var valor = parseInt(document.querySelector("#parOuImpar").value);

    if(valor % 2 == 0) document.querySelector("#resultado").innerHTML = "O valor é par";
    else document.querySelector("#resultado").innerHTML = "O valor é impar";
}
// ATIVIDADE 10

/* Escreva um programa que pergunte o raio de uma circunferência, e sem seguida mostre o diâmetro, 
comprimento e área da circunferência.*/

function raio(){
    var raio = parseFloat(document.querySelector("#raio").value);
    var comprimento, area, diametro;
    const pi = 3.14;

    comprimento = 2 * pi * raio;
    diametro = Math.pow(raio,2);
    area = pi * Math.pow(raio,2);

    document.querySelector("#resultado").innerHTML = "Comprimento = " + comprimento;
    document.querySelector("#resultado2").innerHTML = "Diâmetro = " + diametro;
    document.querySelector("#resultado3").innerHTML = "Área = " + area;
}
// ATIVIDADE 13

/*Crie um programa que peça um número ao usuário e armazene ele na variável x. 
Depois peça outro número e armazene na variável y. Mostre esses números.
 Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.*/

function inversor(){
    var x = parseInt(document.querySelector("#x").value);
    var y = parseInt(document.querySelector("#y").value);
    var aux;

    document.querySelector("#resultado").innerHTML = "X = " + x;
    document.querySelector("#resultado2").innerHTML = "Y = " + y;

    aux = x;
    x = y;
    y = aux;

    document.querySelector("#resultado3").innerHTML = "Novo valor de X =  " + x;
    document.querySelector("#resultado4").innerHTML = "Novo valor de Y =  " + y;
}
// ATIVIDADE 16

/*Faça um programa que receba a idade de uma pessoa e mostre mensagem informando “maior de idade”, “menor de idade” ou "idoso(a)". 
Considere a idade a partir de 18 anos como maior de idade.*/

function idade(){
    var idade = parseInt(document.querySelector("#idade").value);

    if (idade < 18 && idade > 0) 
    document.querySelector("#resultado").innerHTML = "Menor de idade";
    else if(idade > 17 && idade <= 59)
    document.querySelector("#resultado").innerHTML = "Maior de idade";
    else if(idade > 59 && idade < 122)
    document.querySelector("#resultado").innerHTML = "Idoso(a)";
    else if(idade < 0)
    document.querySelector("#resultado").innerHTML = "Idade inexistente";
    else if(idade > 122)
    document.querySelector("#resultado").innerHTML = "Idade inexistente";
}
   
// ATIVIDADE 17

/* Escrever um programa que leia o nome e o sexo de uma pessoa e informe o nome e se ela é homem, mulher ou outros.*/

function sexo(){
    var sexo = document.querySelector("#sexoPessoa").value;
    var res = sexo.toUpperCase();

    if(res == "MASCULINO") document.querySelector("#resultado").innerHTML = "Homem";
    else if (res == "FEMININO") document.querySelector("#resultado").innerHTML = "Mulher";
    else document.querySelector("#resultado").innerHTML = "Outros";
}