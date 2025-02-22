let form = document.getElementById("form-login");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    
    logar();
})

function logar() {
    var email = document.getElementById("email-login").value;
    var senha = document.getElementById("senha-login").value;

    if(localStorage.meusUsuarios){
        usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));

        let vericaLogin = usuarios.some(user => user.email === email && user.senha === senha);
        if (!vericaLogin) {
        alert("Usuário ou senha incorretas!");
        return;
        } else{
            window.location.href = 'pagina_principal_logado.html';
        }
    }
}