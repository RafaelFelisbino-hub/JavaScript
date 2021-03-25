/*Faça uma página web para tratar das autuações por excesso de
velocidade. Precisa ter um input onde o usuário digite a velocidade máxima
permitida pela via. Precisa ter um input onde o usuário digite a velocidade do
carro. Criar uma div para exibir o resultado. Dependendo da velocidade
exibir: - Até 7 km/h acima da permitida pela via informar: Advertência - Acima
de 7 km/h. Até 20% informar: Autuado. Infração Grave - Entre 20% e 50%
informar. Autuado. Infração gravíssima. - Acima de 50% informar. Autuado.
Infração gravíssima. Penalidade de suspensão do direito de dirigir.*/

function multa(){
    var velocidadeMotorista = parseInt(document.querySelector("#velCarro").value);
    var velocidadeMaxima = parseInt(document.querySelector("#velMax").value);
    var vinte = velocidadeMaxima * 20 / 100;
    var cinquenta = velocidadeMotorista * 50 / 100;
    var diferenca = velocidadeMotorista - velocidadeMaxima;

    if(velocidadeMotorista > velocidadeMaxima &&
        velocidadeMotorista < velocidadeMaxima + 7)
    document.querySelector("#resultado").innerHTML = "Advertência - Acima de 7km/h.    "  + "Diferença de: " + diferenca + "km/h";

    else if(velocidadeMotorista > velocidadeMaxima + 7 &&
        velocidadeMotorista < velocidadeMaxima + 7 + vinte)
        document.querySelector("#resultado").innerHTML = " Autuado. Infração Grave.   " + "Diferença de: " + diferenca + "km/h";

    else if(velocidadeMotorista > velocidadeMaxima &&
        velocidadeMotorista > velocidadeMaxima + vinte &&
        velocidadeMotorista <= velocidadeMaxima + cinquenta)
        document.querySelector("#resultado").innerHTML = " Autuado. Infração Gravissima.   " + "Diferença de: " + diferenca + "km/h";

    else if(velocidadeMotorista > velocidadeMaxima &&
        velocidadeMotorista >= velocidadeMaxima + cinquenta)
        document.querySelector("#resultado").innerHTML = " Autuado. Infração Gravissima, penalidade de suspensão do direito de dirigir.   " + "Diferença de: " + diferenca + "km/h";
    
    else document.querySelector("#resultado").innerHTML = "Sem multas";
}

// ATIVIDADE 6

/*Fazer um programa para ler o código de uma peça 1, o número de peças 1, o valor unitário de cada
peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Calcule e
mostre o valor a ser pago.*/

function pecas(){
    var codigoPeca1 = parseInt(document.querySelector("#codigoPeca1").value);
    var numeroPeca1 = parseInt(document.querySelector("#numeroPeca1").value);
    var valorPeca1 = parseInt(document.querySelector("#valorPeca1").value);
    var codigoPeca2 = parseInt(document.querySelector("#codigoPeca2").value);
    var numeroPeca2 = parseInt(document.querySelector("#numeroPeca2").value);
    var valorPeca2 = parseInt(document.querySelector("#valorPeca2").value);

    let resultado1 = numeroPeca1 * valorPeca1;
    let resultado2 = numeroPeca2 * valorPeca2;

    document.querySelector("#resultado").innerHTML = "Valor a pagar nas peças de código " + codigoPeca1 + ":  " + resultado1 + "reais";
    document.querySelector("#resultado2").innerHTML = "Valor a pagar nas peças de código " + codigoPeca2 + ":  " + resultado2 + "reais";
}

// ATIVIDADE 8

/*Com base na tabela de preços ao lado, faça um programa que leia o código de um item e a
quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.*/

function fastfood(){
    var codigo = parseFloat(document.querySelector("#codigoItem").value);
    var quantidade = parseFloat(document.querySelector("#quantidadeItem").value);

    if(codigo == 1){
        let quantidade1 = 4 * quantidade;
        document.querySelector("#resultado").innerHTML = "Valor a pagar = " + quantidade1;
    }

    else if(codigo == 2){
        let quantidade2 = 4.50 * quantidade;
        document.querySelector("#resultado").innerHTML = "Valor a pagar = " + quantidade2;
    }
    
    else if(codigo == 3){
        let quantidade3 = 5 * quantidade;
        document.querySelector("#resultado").innerHTML = "Valor a pagar = " + quantidade3;
    }
    
    else if(codigo == 4){
        let quantidade4 = 2 * quantidade;
        document.querySelector("#resultado").innerHTML = "Valor a pagar = " + quantidade4;
    }
    
    else if(codigo == 5){
        let quantidade5 = 1.50 * quantidade;
        document.querySelector("#resultado").innerHTML = "Valor a pagar = " + quantidade5;
    }

    else document.querySelector("#resultado").innerHTML = "Nenhum código digitado";
}

// ATIVIDADE 11

/*Para doar sangue é necessário ter entre 18 e 67 anos. Faça um aplicativo na linguagem C que
pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores
lógicos OU (||) e E (&&).*/

function idadeSangue(){
    var sangue = parseInt(document.querySelector("#idadeSangue").value);

    if(sangue > 18 && sangue < 67)
    document.querySelector("#resultado").innerHTML = "Você pode doar sangue";

    else
    document.querySelector("#resultado").innerHTML = "Você não pode doar sangue";
}

// ATIVIDADE 15

/*Elabore um programa que, dada a idade de um nadador. Classifique-o em uma das seguintes
categorias: Infantil A = 5 - 7 anos, Infantil B = 8 - 10 anos, juvenil A = 11- 13 anos juvenil B =
14 - 17 anos e Sênior = 18 - 25 anos. Apresentar mensagem “idade fora da faixa etária” quando
for outro ano não contemplado.*/

function idadeNadador(){
    var idade = parseInt(document.querySelector("#idadeNadador").value);

    if(idade >= 5 && idade <=7)
    document.querySelector("#resultado").innerHTML = "Infantil A";

    else if(idade >=8 && idade <= 10)
    document.querySelector("#resultado").innerHTML = "Infantil B";

    else if(idade >= 11 && idade <= 13)
    document.querySelector("#resultado").innerHTML = "Juvenil A";

    else if(idade >= 14 && idade <= 17)
    document.querySelector("#resultado").innerHTML = "Juvenil B";

    else if(idade >= 18 && idade <= 25)
    document.querySelector("#resultado").innerHTML = "Sênior";

    else
    document.querySelector("#resultado").innerHTML = "Idade fora da faixa etária";
}

// ATIVIDADE 18

/*Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura
de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for
informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo
encerrado. Considere que a senha correta é o valor 2002.*/

function senha(){
    var senha = parseInt(document.querySelector("#senha").value);

    if(senha == 2002)
    document.querySelector("#resultado").innerHTML = "Acesso permitido";

    else
    document.querySelector("#resultado").innerHTML = "Senha inválida"; 
}