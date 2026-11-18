import { NavLink, Link } from 'react-router-dom';
function Encabezado({ titulo, cantidad = 0 }) {
    return <header className="site-header"><a href="#contenido" className="skip-link">Ir al contenido</a><div className="nav-shell">
        <Link className="brand" to="/"><span className="brand-mark" aria-hidden="true">t.</span><span>Tienda<small>{titulo}</small></span></Link>
        <nav className="nav-links" aria-label="Navegación principal">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/catalogo">Catálogo web</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <NavLink to="/ofertas">Ofertas</NavLink>
            <NavLink to="/compras">Mi carrito <span className="cart-count">{cantidad}</span></NavLink>
        </nav>
    </div></header>;
}
export default Encabezado;