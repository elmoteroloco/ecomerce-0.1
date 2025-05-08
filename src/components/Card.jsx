import "../styles/Productos.css"

function Card({ producto, funcionCarrito }) {
    function agregarAlCarrito() {
        console.log("paso 1")
        funcionCarrito(producto)
    }
    return (
        <div className="producto-card">
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <img className="producto-image" src={producto.imagen}></img>
            <p>{producto.precio} $</p>
            <button onClick={() => funcionCarrito(producto)} style={{ color: "lightcoral" }}>
                cart++
            </button>
        </div>
    )
}
export default Card
