import CarritoCard from "./CarritoCard.jsx"
import "../styles/Carrito.css"

export default function Carrito({ productosCarrito }) {
    const total = productosCarrito.reduce((subTotal, producto) => subTotal + producto.price * producto.cantidad, 0)

    console.log("Total: " + total)

    return (
        <div className="carrito-container">
            {productosCarrito.length > 0 ? (
                productosCarrito.map((producto) => <CarritoCard producto={producto} />)
            ) : (
                <p>Carrito vacío</p>
            )}
            {total > 0 ? <span>Total a pagar: {total} $</span> : <></>}
        </div>
    )
}
