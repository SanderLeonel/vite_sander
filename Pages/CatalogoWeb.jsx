import { useState, useEffect } from 'react';
import CardProducto from '../components/CardProducto.jsx';

function CatalogoWeb({ agregar, productosCarrito = [] }) {
    const [busqueda, setBusqueda] = useState('');
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        async function cargarProductos() {
            try {
                const respuesta = await fetch('https://dummyjson.com/products?limit=12', {
                    signal: controller.signal,
                });
                if (!respuesta.ok) {
                    throw new Error(`Error HTTP ${respuesta.status}`);
                }
                const datos = await respuesta.json();
                if (!Array.isArray(datos.products)) {
                    throw new Error('La respuesta no contiene una lista de productos');
                }
                if (!controller.signal.aborted) {
                    setProductos(datos.products);
                }
            } catch (err) {
                if (!controller.signal.aborted) {
                    setError('Error al cargar los productos: ' + err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setCargando(false);
                }
            }
        }

        cargarProductos();
        return () => controller.abort();
    }, []);

    if (cargando) return <p role="status">Cargando productos...</p>;
    if (error) return <p role="alert">{error}</p>;

    return (
        <div>
            <div className="page-heading"><p className="eyebrow">Algo nuevo por descubrir</p><h1>Catálogo web</h1><p>Explora la selección de productos en línea.</p></div><div className="catalog-toolbar"><label htmlFor="buscar-catalogo">Buscar en el catálogo</label><input id="buscar-catalogo" type="search" className="form-control" placeholder="Nombre del producto..." value={busqueda} onChange={e => setBusqueda(e.target.value)} /></div>
            {productos.length === 0 && <p>No hay productos disponibles.</p>}
            {productos.length > 0 && !productos.some(producto => producto.title.toLocaleLowerCase().includes(busqueda.trim().toLocaleLowerCase())) && <p role="status">No se encontraron productos con ese nombre.</p>}
            <div className="catalog-grid">
                {productos.filter(producto => producto.title.toLocaleLowerCase().includes(busqueda.trim().toLocaleLowerCase())).map((producto) => (
                    <div key={producto.id}>
                        <CardProducto
                            nombre={producto.title}
                            imagen={producto.thumbnail}
                            cantidad={productosCarrito.find(item => item.nombre === producto.title)?.cantidad ?? 0}
                            precio={producto.price}
                            disponible={producto.stock > 0}
                            stock={producto.stock}
                            agregar={agregar}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CatalogoWeb;

