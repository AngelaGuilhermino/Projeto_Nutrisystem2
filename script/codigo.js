var form = document.getElementById("form");
form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    var numero = document.getElementById("num").value;
    let codigo = localStorage.getItem("numeroAleatorio");

    if(codigo === numero) {
        window.location.href = 'troca_Senha.html';
    } else {
        alert("Código inválido!");
        alert("Código gerado: " + codigo);
    }
});

function codigo() {
    let codigo = localStorage.getItem("numeroAleatorio");
    alert("Código gerado: " + codigo);
}
