const form = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans = document.querySelectorAll('.mensagem');

function trocada(){
    const isSenhaValid = validaSenha();
    const isTamanhoValid = validaTamanho();
    if (isSenhaValid && isTamanhoValid) {
        window.alert("Senha trocada com sucesso");
        window.location.href = 'pagina_de_login.html';
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