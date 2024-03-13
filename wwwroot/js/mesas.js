// Variable para almacenar el ID de la mesa seleccionada
let mesaSeleccionada = null;

// Objeto para almacenar los carritos asociados a cada mesa
const mesasCarritos = {};

function mostrarPOS(mesaId) {
    mesaSeleccionada = mesaId;
    document.getElementById('mesaSeleccionadaLabel').textContent = `Orden mesa ${mesaId}`;

    /* const posIframe = document.getElementById('posIframe');
    posIframe.src = '/venderView.hmtml'; 
    var modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
    <div class="contenedor-superior">
        <div id="product-list-container">
            <h2><span id="mesaSeleccionadaLabel"></span></h2>
            <ul id="product-list">
            </ul>
        </div>

        <div id="pos-container">
            <input type="text" placeholder="Buscar producto..." class="search_box" />
            <div id="product-buttons">
            </div>
        </div>
    </div>
    <div class="d-flex col-6" style="height: 12vh; margin-top: 10px;">
        <input class="col-10" type="number" id="amount-input" placeholder="Ingrese la cantidad de dinero recibida">
        <button class="btn btn-primary col-2" onclick="realizarVenta()">Pagar</button>
    </div>`; */
}