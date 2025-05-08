import "../styles/Carrito.css"

function CarritoCard({ producto, funcionCarrito }) {
    function agregarAlCarrito() {
        funcionCarrito(producto)
    }

    return (
        <div className="carrito-card">
            <h3 className="carrito-titulo" style={{ color: "black" }}>
                {producto.nombre}
            </h3>
            {
                <p className="descripcion-carrito" style={{ color: "black" }}>
                    {producto.descripcion}
                </p>
            }
            <img className="carrito-image" src={producto.imagen}></img>
            <span style={{ color: "black" }}>{producto.cantidad}</span>
            <div>
                <p style={{ color: "black" }}>Precio unitario</p>
                <span style={{ color: "black" }}>{producto.price} $</span>
            </div>
            <div>
                <p style={{ color: "black" }}>Precio total</p>
                <span style={{ color: "black" }}>{producto.cantidad * producto.price} $</span>
            </div>

            <button className="boton-carrito" onClick={agregarAlCarrito} style={{ backgroundColor: "red", color: "black" }}>
                X
            </button>
        </div>
    )
}

export default CarritoCard
