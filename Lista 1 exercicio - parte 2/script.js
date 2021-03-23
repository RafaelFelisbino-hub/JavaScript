//ATIVIDADE 11

/* Que gere o preço de um carro ao consumidor e os valores pagos pelo imposto e pelo lucro do distribuidor, sabendo o custo de fábrica do 
carro e que são pagos:
a) de imposto: 45% sobre o custo do carro;
b) de lucro do distribuidor: 12% sobre o custo do carro.*/

function precoCarro(){
    var precoFabrica = parseFloat(document.querySelector("#precoFabrica").value);
    var imposto, lucro, precoConsumidor;

    imposto = precoFabrica * 45 / 100;
    lucro = precoFabrica * 12 / 100;

    precoConsumidor = precoFabrica + imposto + lucro;

    document.querySelector("#resultado").innerHTML = "O preço do carro ao consumidor é: " + precoConsumidor;
    document.querySelector("#resultado2").innerHTML = "Valor do imposto: " + imposto;
    document.querySelector("#resultado3").innerHTML = "Lucro do distribuidor: " + lucro;
}

// ATIVIDADE 12

/*Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista estava dirigindo nela e calcule a multa que uma pessoa
 vai receber, sabendo que são pagos:
a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida 
(ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h);
b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida.
c) 200 reais, se estiver acima de 31km/h da velocidade permitida.*/

function velocidade(){
    var limiteVelocidade = parseInt(document.querySelector("#limiteVelocidade").value);
    var velocidadeMotorista = parseInt(document.querySelector("#velocidadeMotorista").value);

    if(velocidadeMotorista < limiteVelocidade || velocidadeMotorista == limiteVelocidade) 
    document.querySelector("#resultado").innerHTML = "Sem multa";

    else if(velocidadeMotorista > limiteVelocidade && velocidadeMotorista < limiteVelocidade + 10) 
    document.querySelector("#resultado").innerHTML = "Multa de 50 reais";

    else if(velocidadeMotorista > limiteVelocidade + 11 && velocidadeMotorista < limiteVelocidade + 30) 
    document.querySelector("#resultado").innerHTML = "Multa de 100 reais";

    else if(velocidadeMotorista > limiteVelocidade + 31) 
    document.querySelector("#resultado").innerHTML = "Multa de 200 reais";
}

// ATIVIDADE 13

/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de cada um desses componentes para se 
obter uma certa quantidade de latão (requerida pelo usuário).
*/

function elementosQuimicos(){
    var quantidade = parseInt(document.querySelector("#quantidade").value);
    var cobre, zinco;

    cobre = quantidade * 70 / 100;
    zinco = quantidade * 30 / 100;

    document.querySelector("#resultado").innerHTML = "Quantidade de cobre: " + cobre;
    document.querySelector("#resultado2").innerHTML = "Quantidade de zinco: " + zinco;
}

// ATIVIDADE 14

/*Ler 2 números inteiros do teclado. Se o segundo for diferente de zero, 
calcular e imprimir o quociente do primeiro pelo segundo. Caso contrário, imprimir a mensagem: “DIVISÃO POR ZERO”.
*/

function numeros(){
    var a = parseInt(document.querySelector("#valorA").value);
    var b = parseInt(document.querySelector("#valorB").value);
    var quociente;

    if(b != 0){
        quociente = a / b;
        document.querySelector("#resultado").innerHTML = quociente;
    }
    else document.querySelector("#resultado").innerHTML = "Divisão por zero";
}

// ATIVIDADE 15

/* Ler três valores e determinar o maior dentre eles.*/

function maior(){
    var a = parseInt(document.querySelector("#a").value);
    var b = parseInt(document.querySelector("#b").value);
    var c = parseInt(document.querySelector("#c").value);

    if(a > b && a > c) document.querySelector("#resultado").innerHTML = "A é maior";
    else if(b > a && b > c) document.querySelector("#resultado").innerHTML = "B é maior";
    else document.querySelector("#resultado").innerHTML = "C é maior";

}

// ATIVIDADE 16

/*Ler três valores e colocá-los em ordem crescente.*/

function ordemCrescente(){
    var a = parseInt(document.querySelector("#a").value);
    var b = parseInt(document.querySelector("#b").value);
    var c = parseInt(document.querySelector("#c").value);
    var aux;

    if(a > c)
    {
        aux = c;
        c = a;
        a = aux;
    }

    if(a > b)
    {
        aux = b;
        b = a;
        a = aux;
    }

    if(b > c)
    {
        aux = c;
        c = b;
        b = aux;
    }

    document.querySelector("#resultado").innerHTML = a;
    document.querySelector("#resultado2").innerHTML = b;
    document.querySelector("#resultado3").innerHTML = c;
}

// ATIVIDADE 17

/* Ler os três coeficientes de uma equação de segundo grau e determinar suas raízes.
*/

function equacao(){
    var a = parseFloat(document.querySelector("#a").value);
    var b = parseFloat(document.querySelector("#b").value);
    var c = parseFloat(document.querySelector("#c").value);
    var delta, x1 = 0, x2 = 0;

    delta = (b * b) - 4 * a * c;

	x1 =  (-b + Math.sqrt(delta)) / 2 * a;
	x2 =  (-b - Math.sqrt(delta)) / 2 * a;

    document.querySelector("#resultado").innerHTML = "x1 = " + x1;
    document.querySelector("#resultado2").innerHTML = "x2 = " + x2;
}

// ATIVIDADE 18

/* Ler três valores do teclado e dizer se eles formam um triângulo. 
Caso afirmativo, dizer seu tipo (equilátero, isósceles ou escaleno).*/

function triangulo(){
    var primeiroValor = parseInt(document.querySelector("#primeiroValor").value);
    var segundoValor = parseInt(document.querySelector("#segundoValor").value);
    var terceiroValor = parseInt(document.querySelector("#terceiroValor").value);

    if(primeiroValor >= segundoValor  + terceiroValor ||
         segundoValor >= terceiroValor + primeiroValor ||
          terceiroValor >= primeiroValor + segundoValor) 
          document.querySelector("#resultado").innerHTML = "Os valores não formam um triângulo";

    else if(primeiroValor == segundoValor && primeiroValor == terceiroValor) 
    document.querySelector("#resultado").innerHTML = "Triângulo Equilátero";

    else if(primeiroValor == segundoValor ||
         segundoValor == terceiroValor ||
          terceiroValor == primeiroValor) 
          document.querySelector("#resultado").innerHTML = "Triângulo Isóceles";

    else document.querySelector("#resultado").innerHTML = "Triângulo Escaleno";
}

// ATIVIDADE 19

/* Ler 4 números inteiros e calcular a soma dos que forem par.*/

function par(){
    var primeiroValor = parseInt(document.querySelector("#primeiroValor").value);
    var segundoValor = parseInt(document.querySelector("#segundoValor").value);
    var terceiroValor = parseInt(document.querySelector("#terceiroValor").value);
    var quartoValor = parseInt(document.querySelector("#quartoValor").value);
    var condicao=[primeiroValor, segundoValor, terceiroValor, quartoValor];
    var soma = 0, i; 

    for(i = 0; i < 4; i++)
    {
        if(condicao[i] % 2 == 0)
            soma += condicao[i];
    }
    
    document.querySelector("#resultado").innerHTML = "Soma dos pares = " + soma;
}

// ATIVIDADE 20

/*Que informe se um dado ano é ou não bissexto. Obs: um ano é bissexto se 
ele for divisível por 400 ou se ele for divisível por 4 e não por 100.*/

function ano(){
    var ano = parseInt(document.querySelector("#ano").value);

    if(ano % 4 == 0) document.querySelector("#resultado").innerHTML = "Ano bissexto";
    else document.querySelector("#resultado").innerHTML = "Ano não é bissexto";
}