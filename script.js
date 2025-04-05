

function obtenDia() {
    let dia = new Date().getDate();
    let ntulipan = parseInt(dia);
   /* console.log("Es el día "+dia+" deben existir "+dia+" tulipanes");*/
    for (let i = 1; i < 30; i++) {
       agregarTulipan();
    }
}

function agregarTulipan() {
    document.getElementById('contenedor-Tulipanes').insertAdjacentHTML("beforeend",
        `<div class="tulip-container">
            <div class="tulip-body">
                <div class="stem"></div>
                <div class="leaf leaf-1"></div>
                <div class="leaf leaf-2"></div>
                <div class="flower">
                    <!-- Pétalos Exteriores -->
                    <div class="petal petal-1"></div>
                    <div class="petal petal-3"></div>
                    <div class="petal petal-5"></div>
                    <!-- Pétalos Interiores -->
                    <div class="petal petal-2"></div>
                    <div class="petal petal-4"></div>
                    <div class="petal petal-6"></div>
                </div>
            </div>
            <div class="love-message">Te amo ❤️</div>
        </div>` 
        );
}





obtenDia();