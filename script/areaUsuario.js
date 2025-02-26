window.onload = function() {
    if(localStorage.meusUsuarios) {
        let usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));
        let usuarioLogado = usuarios.find(user => user.logado === true);

        if (usuarioLogado) {
            document.getElementById("login").textContent = usuarioLogado.login || "Nome não disponível";
            document.getElementById("email").textContent = usuarioLogado.email || "E-mail não disponível";
            document.getElementById("tel").textContent = usuarioLogado.telefone || "Telefone não disponível";
            document.getElementById("data").textContent = usuarioLogado.data_Nascimento || "Data de nascimento não disponível";
        } else {
            alert("Você precisa estar logado para acessar esta página.");
            window.location.href = 'pagina_login.html';
        }
    } else {
        alert("Nenhum usuário encontrado.");
        window.location.href = 'pagina_login.html';
    }
}
