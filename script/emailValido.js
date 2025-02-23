const form = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans = document.querySelectorAll('.mensagem');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isEmailValid = validaEmail();
    if (isEmailValid) {
        emailrecuperar();
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

function emailrecuperar() {
    var email = document.getElementById("email-recuperar").value;

    if(localStorage.meusUsuarios){
        usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));

        let verificaEmail = usuarios.find(user => user.email === email);
        if (!verificaEmail) {
        alert("email não cadastrado!");
        return;
        } else{
            localStorage.setItem("emailRecuperar", JSON.stringify(verificaEmail.email));

            function gerarNumero4Digitos() {
                return Math.floor(Math.random() * 9000) + 1000;
            }

            let numeroAleatorio = gerarNumero4Digitos();
            localStorage.setItem("numeroAleatorio", numeroAleatorio);
            console.log("Número gerado e salvo:", numeroAleatorio);

            window.location.href = 'email_codigo.html';
        }
    }
}
