let form = document.getElementById("form-login");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    logar();
})

function logar() {
    var email = document.getElementById("email-login").value;
    var senha = document.getElementById("senha-login").value;

    if(localStorage.meusUsuarios) {
        let usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));

        let usuarioLogado = usuarios.find(user => user.email === email && user.senha === senha);
        
        if (!usuarioLogado) {
            alert("Usuário ou senha incorretos!");
            return;
        } else {
            usuarioLogado.logado = true;

            localStorage.setItem("meusUsuarios", JSON.stringify(usuarios));
            window.location.href = 'pagina_principal_logado.html';
        }
    }
}
