import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import Nav from "../components/Nav"
import ProductosContainer from "../components/ProductosContainer"

function Home() {
    const productos = [
        {
            id: 1,
            nombre: "Mamboreta",
            descripcion: "Pendiente/Broche, bronce y acero.",
            precio: 28000,
            imagen: "../src/assets/crisol-1-mamboreta.jpg"
        },
        {
            id: 2,
            nombre: "Ouroboros",
            descripcion: "Anillo, plata sterling patinada",
            precio: 45000,
            imagen: "../src/assets/crisol-2-ouroboros.jpg"
        },
        {
            id: 3,
            nombre: "Cthulhu",
            descripcion: "Anillo, plata sterling patinada",
            precio: 45000,
            imagen: "../src/assets/crisol-3-cthulhu.jpg"
        },
        {
            id: 4,
            nombre: "Hamadrias",
            descripcion: "Accesorio p/celular en metal blanco",
            precio: 65000,
            imagen: "../src/assets/crisol-4-hamadrias.jpg"
        }
    ]
    return (
        <div>
            <div>
                <Nav />
                <Header />
                <Main />
                <Footer />
            </div>
            <div>
                <Nav />
                <ProductosContainer productos={productos} />
                <Footer />
            </div>
        </div>
    )
}
export default Home
