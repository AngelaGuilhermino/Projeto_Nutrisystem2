let form = document.getElementById("form-consulta");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    marcar();
})

function marcar() {
    var nome = document.getElementById("login").value;
    var email = document.getElementById("email-consulta").value;
    var senha = document.getElementById("senha-consulta").value;
    var telefone = document.getElementById("tel-consulta").value;
    var descricao = document.getElementById("descricao").value;
    var dataConsulta = document.getElementById("consulta-data").value;
    var interesse = document.getElementById("interesse").value;

    if(localStorage.meusUsuarios) {
        let usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));

        let verificaLogin = usuarios.some(user => user.email === email && user.senha === senha);
        if (!verificaLogin) {
            alert("Usuário ou senha incorretos!");
            return;
        } else {
            let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
            consultas.push({nome, email, dataConsulta, interesse, telefone, descricao});
            localStorage.setItem("consultas", JSON.stringify(consultas));

            alert("Consulta marcada");
        }
    }
}
