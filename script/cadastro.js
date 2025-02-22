const form = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans = document.querySelectorAll('.mensagem');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let cadastrou = false;

// Campos:
// [0] Email
// [1] Senha
// [2] Confirmação de senha
// [3] Data de Nascimento
// [4] Masculino
// [5] Feminino
// [6] Telefone
// [7] Peso
// [8] Altura

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Valida todos os campos
    const isEmailValid = validaEmail();
    const isSenhaValid = validaSenha();
    const isTamanhoValid = validaTamanho();
    const isCamposValid = validaCampos(3) && validaCampos(4) && validaCampos(5) && validaCampos(6);

    // Se todas as validações passarem, o formulário pode ser enviado
    if (isEmailValid && isSenhaValid && isTamanhoValid && isCamposValid) {
        cadastrar();
        if(cadastrou){
            window.location.href = 'pagina_de_login.html';
        }
    }
});

function erro(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeErro(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validaEmail() {
    if (emailRegex.test(campos[0].value)) {
        removeErro(0);
        return true;
    } else {
        erro(0);
        return false;
    }
}

function validaTamanho() {
    if (campos[1].value.length < 9) {
        erro(1);
        return false;
    } else {
        removeErro(1);
        return true;
    }
}

function validaSenha() {
    if (campos[1].value === campos[2].value) {
        removeErro(2);
        return true;
    } else {
        erro(2);
        return false;
    }
}

function validaCampos(index) {
    if (campos[index].value.length < 1) {
        erro(index);
        return false;
    } else {
        removeErro(index);
        return true;
    }
}

function cadastrar() {
    var login = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    let usuarios = new Array();

    if(localStorage.meusUsuarios){
        usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));

        let usuarioExistente = usuarios.some(user => user.login === login || user.email === email);
        if (usuarioExistente) {
        alert("Usuário ou e-mail já cadastrado!");
        return;
        }
    }

    usuarios.push({login, email, senha});
    login = document.getElementById("login").value = "";
    email = document.getElementById("email").value = "";
    senha = document.getElementById("senha").value = "";
    localStorage.setItem("meusUsuarios", JSON.stringify(usuarios));

    cadastrou = true;
}
