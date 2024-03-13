document.addEventListener("DOMContentLoaded", function() {
    abrirPagina("vender");
  });
  
  function abrirPagina(viewName) {
    var content = document.getElementById("content");
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        content.innerHTML = xhr.responseText;
      }
    };
  
    var url = getViewUrl(viewName);
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  function getViewUrl(viewName) {
    var viewUrls = {
      "vender": "Views/venderView.html",
      "inventario": "Views/inventarioView.html",
      "historialVentas": "Views/historialVentasView.html"
    };
  
    return viewUrls[viewName];
  }
  // Función para mostrar la vista por defecto al cargar la página
  function showDefaultView() {
    // Puedes cambiar 'vista1' a 'vista2' o 'vista3' si prefieres que otra vista sea la predeterminada
    abrirPagina('vender');
  }
  
  // Mostrar la vista por defecto al cargar la página
  showDefaultView();
  