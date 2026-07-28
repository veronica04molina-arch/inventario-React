let productos = [];
const formulario = document.getElementById("formulario");
const tbody = document.getElementById("cuerpoTabla");

formulario.addEventListener("submit", function (event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    let producto = {
    id: productos.length + 1,
    nombre:nombre,
    categoria:categoria,
    precio:precio,
    cantidad:cantidad
    }
    productos.push(producto);

    let fila = document.createElement("tr");
    let celdaId = document.createElement("td");
    let celdaNombre = document.createElement("td");
    let celdaCategoria = document.createElement("td");
    let celdaPrecio = document.createElement("td");
    let celdaCantidad = document.createElement("td");
    let celdaEstado = document.createElement("td");
    let celdaAcciones = document.createElement("td");
    
    // Crear botón Editar
    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar"; 

    // Crear botón Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    celdaAcciones.appendChild(botonEditar);
    celdaAcciones.appendChild(botonEliminar);
    celdaId.textContent = id;
    celdaNombre.textContent = nombre;
    celdaCategoria.textContent = categoria;
    celdaPrecio.textContent = precio;
    celdaCantidad.textContent = cantidad;

    let estado;
    if (cantidad < 5){
    estado = "Bajo Stock"}
    else {estado = "Normal"}
    celdaEstado.textContent = estado;

});

