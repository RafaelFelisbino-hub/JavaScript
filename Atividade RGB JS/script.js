 // FUNÇÃO RGB

function cor(){
    let vermelho = document.getElementById('red').value;
    let verde = document.getElementById('green').value;
    let azul = document.getElementById('blue').value;

    let color = 'rgb(' + vermelho + ',' + verde + ',' + azul + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ': '+ color;  
}   

document.getElementById('red').addEventListener('input',cor);
document.getElementById('green').addEventListener('input',cor);
document.getElementById('blue').addEventListener('input',cor);

// FUNÇÃO SALÁRIO
function salario(){
    let salario = parseInt(document.querySelector("#salario").value);
    let dif;
    let difSalario;
    
    if(salario < 0)
    document.querySelector("#resultado").innerHTML = "Salário fora da faixa de cálculo: cálculo de salário de 1 à 6.443.357";

    else if(salario <= 1100){
        dif = salario * 0.75;
        document.querySelector("#resultado").innerHTML = "Salário bruto = R$" + dif + ".     Desconto de 7.5%";
    }

    else if(salario > 1100 && salario <= 2203.48){
        dif = salario * 0.9;
        document.querySelector("#resultado").innerHTML = "Salário bruto = R$" + dif + ".     Desconto de 9%";
    }

    else if(salario > 2203.48 && salario <= 3305.22){
        dif = salario * 0.12;
        difSalario = salario - dif;
        document.querySelector("#resultado").innerHTML = "Salário bruto = R$" + difSalario + ".     Desconto de 12%";
    }

    else if(salario > 3305.22 && salario <= 6443.357){
        dif = salario * 0.14;
        difSalario = salario - dif;
        document.querySelector("#resultado").innerHTML = "Salário bruto = R$" + difSalario + ".     Desconto de 14%";
    }

    else
    document.querySelector("#resultado").innerHTML = "Salário fora da faixa de cálculo: cálculo de salário de 1 à 6.443.357";

}