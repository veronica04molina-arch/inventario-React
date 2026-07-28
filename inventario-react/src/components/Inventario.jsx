import { useState } from "react";

function Inventario() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");

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

        <form>
          <div className="campo">
            <label htmlFor="nombre">Nombre del producto:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
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
              name="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="cantidad">Cantidad:</label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
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
            {/* Aquí mostraremos los productos más adelante */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventario;