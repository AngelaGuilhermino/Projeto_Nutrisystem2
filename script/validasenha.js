const form = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans = document.querySelectorAll('.mensagem');

function trocada(){
    const isSenhaValid = validaSenha();
    const isTamanhoValid = validaTamanho();
    if (isSenhaValid && isTamanhoValid) {
        trocarsenha();
    }
}

function erro(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeErro(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validaTamanho() {
    if (campos[0].value.length < 9) {
        erro(0);
        return false;
    } else {
        removeErro(0);
        return true;
    }
}

function validaSenha() {
    if (campos[1].value === campos[0].value) {
        removeErro(1);
        return true;
    } else {
        erro(1);
        return false;
    }
}

function trocarsenha() {
    var senha = document.getElementById("senha-nova").value;
    var email = JSON.parse(localStorage.getItem("emailRecuperar"));
    if(localStorage.meusUsuarios){
        usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));
        let verificaEmail = usuarios.find(user => user.email === email);
        if (!verificaEmail) {
        alert("email não cadastrado!");
        return;
        } else {
            verificaEmail.senha = senha; 
            localStorage.setItem("meusUsuarios", JSON.stringify(usuarios));
            window.alert("Senha trocada com sucesso");
            window.location.href = 'pagina_de_login.html';
        }
    }
}