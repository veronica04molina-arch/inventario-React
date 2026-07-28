import { useState } from "react";

function Inventario() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");

  const [productos, setProductos] = useState([]);

  // Agregar producto
  const agregarProducto = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      categoria.trim() === "" ||
      precio === "" ||
      cantidad === ""
    ) {
      alert("Complete todos los campos.");
      return;
    }

    const nuevoProducto = {
      id: productos.length + 1,
      nombre,
      categoria,
      precio,
      cantidad: Number(cantidad),
    };

    setProductos([...productos, nuevoProducto]);

    // Limpiar formulario
    setNombre("");
    setCategoria("");
    setPrecio("");
    setCantidad("");
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter(
      (producto) => producto.id !== id
    );

    setProductos(nuevaLista);
  };

  return (
    <div className="container">
      <div className="encabezado">
        <img src="/img.png" alt="Logo Inventario" />
        <h1>Sistema de Gestión de Inventario</h1>
      </div>

      <p>
        Bienvenido al sistema de gestión de inventario. Esta herramienta permite
        registrar, visualizar y controlar los productos disponibles,
        facilitando la organización y administración eficiente del stock.
      </p>

      <div className="contenedor-formulario">
        <h2>Agregar producto</h2>

        <form onSubmit={agregarProducto}>
          <div className="campo">
            <label htmlFor="nombre">Nombre del producto:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              minLength={5}
            />
          </div>

          <div className="campo">
            <label htmlFor="categoria">Categoría:</label>
            <input
              type="text"
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="cantidad">Cantidad:</label>
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="boton">
            Agregar producto
          </button>
        </form>
      </div>

      <div className="contenedor-tabla">
        <h2>Inventario de Productos</h2>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>${producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>
                  {producto.cantidad < 5 ? "Bajo Stock" : "Normal"}
                </td>
                <td>
                  <button>Editar</button>

                  <button
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Inventario;