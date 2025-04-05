

function obtenDia() {
    let dia = new Date().getDate();
    let ntulipan = parseInt(dia);
    alert(dia);
    for (let i = 0; i < ntulipan; i++) {
        document.getElementById('contenedorTulipan').insertAdjacentHTML("beforeend","<span>Tulipan</span>")
    }
}

obtenDia();