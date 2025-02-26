var tabela_usuarios = document.getElementById("tabela_usuarios");
var tabela_consulta = document.getElementById("tabela_consulta");

function adicionarLinhaTabela(usuario, indice) {
    let novaLinha = tabela_usuarios.insertRow();

    let celulaId = novaLinha.insertCell();
    let celulaNome = novaLinha.insertCell();
    let celulaEmail = novaLinha.insertCell();
    let celuladata = novaLinha.insertCell();
    let celulaTelefone = novaLinha.insertCell();
    let celulaSexo = novaLinha.insertCell();
    let celulaPeso = novaLinha.insertCell();
    let celulaAltura = novaLinha.insertCell();

    celulaId.textContent = indice + 1;
    celulaNome.textContent = usuario.login;
    celulaEmail.textContent = usuario.email;
    celuladata.textContent = usuario.data_Nascimento;
    celulaTelefone.textContent = usuario.telefone;
    celulaSexo.textContent = usuario.sexo;
    celulaPeso.textContent = usuario.peso;
    celulaAltura.textContent = (usuario.altura + "m");

    celulaId.classList.add("LineTable1");
    celulaNome.classList.add("LineTable1");
    celulaEmail.classList.add("LineTable1");
    celuladata.classList.add("LineTable1");
    celulaTelefone.classList.add("LineTable1");
    celulaSexo.classList.add("LineTable1");
    celulaPeso.classList.add("LineTable1");
    celulaAltura.classList.add("LineTable1");
}

function adicionarConsultaTabela(consulta, indice) {
    let novaLinha = tabela_consulta.insertRow();

    let celulaId = novaLinha.insertCell();
    let celulaNome = novaLinha.insertCell();
    let celulaEmail = novaLinha.insertCell();
    let celulaTelefone = novaLinha.insertCell();
    let celulaEspecialista = novaLinha.insertCell();
    let celuladata = novaLinha.insertCell();

    celulaId.textContent = indice + 1;
    celulaNome.textContent = consulta.nome;
    celulaEmail.textContent = consulta.email;
    celuladata.textContent = consulta.dataConsulta;
    celulaTelefone.textContent = consulta.telefone;
    celulaEspecialista.textContent = consulta.interesse;
    

    celulaId.classList.add("LineTable2");
    celulaNome.classList.add("LineTable2");
    celulaEmail.classList.add("LineTable2");
    celuladata.classList.add("LineTable2");
    celulaTelefone.classList.add("LineTable2");
    celulaEspecialista.classList.add("LineTable2");
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.meusUsuarios) {
        let usuarios = JSON.parse(localStorage.getItem("meusUsuarios"));
        let consultas = JSON.parse(localStorage.getItem("consultas"));
        consultas.forEach((consulta, index) => adicionarConsultaTabela(consulta, index))
        usuarios.forEach((usuario, index) => adicionarLinhaTabela(usuario, index));
    }
});
