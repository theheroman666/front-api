let precioOrdenActual = 0;
let totalCarrito = 0;
const ordenes = [];
const carrito = [];
let carga = 0;
let cargavista = 0;
let ordenId = 1;


function crearOrden() {
  document.getElementById('preview-container').style.display = 'none';
  document.getElementById('ordenes-title').style.display = 'none';
  document.getElementById('section-Pos').style.display = 'flex';




  let url = "http://74.208.184.93:8082/products"

fetch(url, { mode: "cors" })
.then(res => {console.log(res.json)
return res.json()
})
.then(response => {console.log(response)
  if (carga == 0 ) {
    carga = response.data.length
    
    let producto = response.data.forEach(elemnt => {
      agregarBotonProducto(elemnt.name, elemnt.price)
      
    })
  }
})
.catch(error => console.log(error))
}

function finalizarOrden() {
  if (carrito.length === 0) {
    alert('No hay productos en la orden.');
    return;
  }
  // carrito.length = 0;
  // actualizarCarrito();


  document.getElementById('nombre-cliente-input').value = '';
  document.getElementById('nombre-cliente-modal').style.display = 'block';
  document.getElementById('modal-background').style.display = 'block';
}

function finalizarOrdenConNombre() {
  const nombreCliente = document.getElementById('nombre-cliente-input').value.trim();

  if (nombreCliente === '') {
    alert('Por favor, ingresa el nombre del cliente.');
    return;
  }

  const orden = {
    nombreCliente,
    "order_id":nombreCliente,
    "products": carrito.slice(),
    "total": precioOrdenActual,
  };

  
let url = "http://74.208.184.93:8081/orders"
fetch(url, { mode: "no-cors", method: "POST", body: JSON.stringify(orden), headers: {
  'Content-Type': 'application/json',
},})
.then(res => {console.log(res.json)
return res.json()
})
.then(response => {console.log(response)
  if (carga == 0 ) {
    carga = response.data.length
    
    let producto = response.data.forEach(elemnt => {
      agregarBotonProducto(elemnt.name, elemnt.price)
      
    })
  }
})
.catch(error => console.log(error))
  ordenes.push(orden);

  carrito.length = 0;
  actualizarCarrito();
  limpiarProductosSeleccionados();

  document.getElementById('section-Pos').style.display = 'none';
  document.getElementById('preview-container').style.display = "block"

  cerrarModal('nombre-cliente-modal');
  cargarVistaPrimaria();
}

function limpiarProductosSeleccionados() {
  carrito.length = 0;
}

function cargarVistaPrimaria() {
  const orderList = document.getElementById('order-list');

  if (orderList) {
    orderList.innerHTML = '';
    
  let url = "http://74.208.184.93:8081/orders"
  cargavista = 0

  fetch(url, { mode: "cors"})
  .then(res => {console.log(res.json)
    return res.json()
  })
  .then(response => {console.log(response)
    if (cargavista == 0 ) {
      cargavista = response.length
      if (0< cargavista) {
        
        response.forEach(orden => {
          const orderItem = document.createElement('li');
          orderItem.className = 'order-item'
          orden.products.forEach(items => {console.log(items.name)
            orderItem.innerHTML = ` <span class="span-orden-nombre">Cliente: ${orden.order_id}</span> <span class="span-orden-precio"> Total: $${orden.total}</span><span class="span-orden-precio"> Total: $${items.name} x ${items.quantity}</span> <span class="span-acciones"> <button id="btn-editar" onclick="editarOrden()">Editar</button>  <button id="btn-cobrar" onclick="pago(${items.ID})">Cobrar</button>   <button id="btn-borrar" id="btn-borrar"><i class="bi bi-trash3"></i></button> </span>`;
            orderList.appendChild(orderItem);
          })
          // console.log(elemnt.name, elemnt.price)
          
        })
      }
    }
    })
    .catch(error => console.log(error))
    document.getElementById('preview-container').style.display = 'flex';
    document.getElementById('ordenes-title').style.display = 'block';
  } else {
    console.error("El elemento 'order-list' no fue encontrado.");
  }
}


function agregarBotonProducto(nombre, precio) {
  if ( 0 < carga ) {
    
    const productButtons = document.querySelector('.product-buttons');
    const button = document.createElement('button');

  button.className = 'product-button';
  button.innerText = `${nombre}`;
  button.onclick = function () {
    agregarProductoAlCarrito(nombre, parseFloat(precio));
  };
  productButtons.appendChild(button);

}

}

function agregarProductoAlCarrito(name, price) {
  const existingProduct = carrito.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    carrito.push({ name, price, quantity: 1 });
  }


  console.log(carrito);

  actualizarCarrito();

}

function actualizarCarrito() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  carrito.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'product-item';
    listItem.innerHTML = `<span>${item.name} x${item.quantity}</span><span>$${item.price * item.quantity} <button id="btn-borrar-orden"><i class="bi bi-trash3"></i></button> </span>`;
    productList.appendChild(listItem);
  });

  const totalVenta = carrito.reduce((total, item) => total + item.price * item.quantity, 0);
  precioOrdenActual = totalVenta
  document.getElementById('product-total').innerText = `${totalVenta.toFixed(2)}`;
  console.log(totalVenta);


}

function editarOrden() {
  cargarProductosEnPOS(carrito);
}

function cargarProductosEnPOS() {
  document.getElementById('preview-container').style.display = 'none';
  document.getElementById('ordenes-title').style.display = 'none';
  document.getElementById('section-Pos').style.display = 'flex';

  carrito.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'product-item';
    listItem.innerHTML = `<span>${item.nombre} x${item.cantidad}</span><span>$${item.precio * item.cantidad}</span>`;
    productList.appendChild(listItem);
  });
}

function cerrarModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.getElementById('modal-background').style.display = 'none';
  cargarVistaPrimaria();

}

function pago(id) { 
  let orden = {
    "status":1
  }

let url = "http://74.208.184.93:8082/orders/"+id
fetch(url, { mode: "no-cors", method: "POST", body: JSON.stringify(orden), headers: {
  'Content-Type': 'application/json',
},})
.then(res => {console.log(res.json)
return res.json()
})
.then(response => {console.log(response)
})
.catch(error => console.log(error))
// cargavista = 0
cargarVistaPrimaria();

 }