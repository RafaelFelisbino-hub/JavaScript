// VALIDAR LOGIN

const emailLogin = document.getElementById('emailLogin')
const senhaLogin = document.getElementById('senhaLogin')
const formLogin = document.getElementById('formLogin')

function login(){
    let contadorLogin = 0
    let regexEmailLogin = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    let jestEmailLogin = email.value;

    if(jestEmailLogin != ''){
        document.getElementById('emailInvalido').innerText = 'E-mail inválido'
        contador++
    }

    if(!regexEmailLogin.test(emailLogin.value)){
        document.getElementById('emailInvalidoLogin').innerText = 'E-mail inválido'
        contadorLogin++
    }

    else if(regexEmailLogin.test(emailLogin.value))
    document.getElementById('emailInvalidoLogin').innerText = ''

    if(senhaLogin.value == ''){
        document.getElementById('senhaInvalidaLogin').innerText = 'Senha inválida'
        contadorLogin++
    }

    if(contadorLogin >0){
        validaLogin.preventDefault()
    }
}

module.exports = {login};