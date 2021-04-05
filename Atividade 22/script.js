const name = document.getElementById('nome')
const email = document.getElementById('email')
const password = document.getElementById('senha')
const form = document.getElementById('form')
const erros = document.getElementById('erro')

form.addEventListener('submit', (e) =>{
    let mensagens = []
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ // Deve conter texto; @ ; "." e text.length de 2 a 4 após "."

    if(name.value === '' || name.value == null){
        mensagens.push('É necessário preencher o nome')
    }

    if(password.value.length <= 5){
        mensagens.push('A senha deve conter mais de 5 caracteres')
    }

    if(password.value.length >= 25){
        mensagens.push('A senha deve ser menor que 30 caracteres')
    }

    if(password.value == 'senha' || password.value == 'password'){
        mensagens.push('A senha não pode ser "senha" ou "password"')
    }

    if(!regexEmail.test(email.value)){
        mensagens.push('E-mail inválido')
    }
    
    if(mensagens.length > 0){
        e.preventDefault()
        erros.innerText = mensagens.join('\n ')
    }

})