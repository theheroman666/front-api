
function abrirVistaInventario() {
  document.getElementById('vistaInventario').style.display = 'block';
  document.getElementById('modal-background-inventario').style.display = 'block';

}

function cerrarVistaInventario() {
  // Limpiar campos al cerrar la vista
  document.getElementById('descripcionInput').value = '';
  document.getElementById('precioInput').value = '';
  document.getElementById('tipoInput').value = '';
  // Ocultar la vista
  document.getElementById('vistaInventario').style.display = 'none';
  document.getElementById('modal-background-inventario').style.display = 'none';

}

function abrirVistaVerInventario() {
  // Mostrar la vista de ver inventario
  document.getElementById('vistaVerInventario').style.display = 'block';
  document.getElementById('modal-background-inventario').style.display = 'block';
  // Ocultar la vista de inventario
  document.getElementById('vistaInventario').style.display = 'none';
}

function cerrarVistaVerInventario() {
  // Ocultar la vista de ver inventario
  document.getElementById('vistaVerInventario').style.display = 'none';
  document.getElementById('modal-background-inventario').style.display = 'none';

}

function abrirModalConfirmacion() {
  document.getElementById('modalConfirmacion').style.display = 'block';
  document.getElementById('modal-confirmacion-cancelar').style.display = 'block';
  document.getElementById('modal-background-inventario').style.display = 'block';

}

function cerrarModalConfirmacion() {
  document.getElementById('modalConfirmacion').style.display = 'none';
  document.getElementById('modal-confirmacion-cancelar').style.display = 'none';
  document.getElementById('modal-background-inventario').style.display = 'none';

}

function limpiarTablaYCerrar() {
  // Limpiar la tabla al confirmar
  document.getElementById('tablaInventario').innerHTML = '';
  // Cerrar la vista de inventario
  cerrarVistaInventario();
  // Cerrar el modal de confirmación
  cerrarModalConfirmacion();
}

function agregarElemento() {
  // Obtener valores de los campos
  var descripcion = document.getElementById('descripcionInput').value;
  var precio = document.getElementById('precioInput').value;
  var tipo = document.getElementById('tipoInput').value;

  // Validar campos obligatorios
  if (!descripcion || !precio || !tipo) {
      alert("Todos los campos son obligatorios");
      return;
  }

  // Crear una fila en la tabla con los datos
  var tabla = document.getElementById('tablaInventario');
  var fila = tabla.insertRow();
  var celdaDescripcion = fila.insertCell(0);
  var celdaPrecio = fila.insertCell(1);
  var celdaTipo = fila.insertCell(2);

  celdaDescripcion.innerHTML = descripcion;
  celdaPrecio.innerHTML = precio;
  celdaTipo.innerHTML = tipo;

  // Limpiar campos después de agregar el elemento
  document.getElementById('descripcionInput').value = '';
  document.getElementById('precioInput').value = '';
  document.getElementById('tipoInput').value = '';
}

function guardarTabla() {
  // Mover los datos de la tablaInventario a la tablaVerInventario
  var tablaInventario = document.getElementById('tablaInventario');
  var tablaVerInventario = document.getElementById('tablaVerInventario');

  // Clonar filas y añadir a la nueva tabla
  for (var i = 0; i < tablaInventario.rows.length; i++) {
      var fila = tablaInventario.rows[i].cloneNode(true);
      tablaVerInventario.appendChild(fila);
  }

  // Limpiar la tablaInventario
  tablaInventario.innerHTML = '';

  // Cerrar la vista de inventario
  cerrarVistaInventario();
  // Abrir la vista de ver inventario
  abrirVistaVerInventario();
}

function verInventario() {
  // Lógica para mostrar el inventario
  abrirVistaVerInventario();
}