let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let qtdCaracteres = document.querySelector('#valor');
let senha = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?/@!#0123456789"
let novaSenha = "";

qtdCaracteres.innerHTML = sliderElement.value;

slider.oninput = function(){
    qtdCaracteres.innerHTML = this.value;
}


function gerarSenha(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i ){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiaSenha (){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha);
}