const form = document.getElementById('form');
const campos = document.querySelectorAll('.validacao');
const spans = document.querySelectorAll('.mensagem');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailValid = validaEmail();

    // Se todas as validações passarem, o formulário pode ser enviado
    if (isEmailValid) {
        form.submit();
        window.location.href = 'email_codigo.html';
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
