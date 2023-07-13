function calcularPrecio() {
    var cantidad = document.getElementById("cantidad").value;
    var pagoContado = document.getElementById("pago").checked;
    var precioUnitario = 8000; 
    var descuentoContado = 0.10; 
    var descuentoCantidad = 0.15;
    
    var precioTotal = cantidad * precioUnitario;
    
    if (cantidad > 5){
        precioTotal -= precioTotal * descuentoCantidad;
    }

    if (pagoContado) {
      precioTotal -= precioTotal * descuentoContado;
    }
    
    document.getElementById("precio").innerHTML = "Su compra asciende a: $" + precioTotal;
  }