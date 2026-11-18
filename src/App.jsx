import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Encabezado from '../components/encabezado.jsx'
import Pie from '../components/pie.jsx'

import Inicio from '../Pages/Inicio.jsx'
import Productos from '../Pages/Producto.jsx'
import Contacto from '../Pages/Contactos.jsx'
import Compras from '../Pages/Compras.jsx'
import CatalogoWeb from '../Pages/CatalogoWeb.jsx'
import Ofertas from '../Pages/Ofertas.jsx'
function App() {
    let [lista, setLista] = useState([]);

    const reiniciarCompra = () => {
        setLista([]);
    }

    function agregar(nombre, precio, descuento = 0, esLicor = false) {
        const total = precio * (1 - descuento / 100);
        setLista(listaActual => {
            const existe = listaActual.some(producto => producto.nombre === nombre);
            if (existe) {
                return listaActual.map(producto =>
                    producto.nombre === nombre
                        ? { ...producto, cantidad: producto.cantidad + 1, total: producto.total + total }
                        : producto
                );
            }
            return [...listaActual, { nombre, precio, cantidad: 1, total, esLicor }];
        });
    }
    return (
        <BrowserRouter>
            <Encabezado titulo="PUCE IBARRA" cantidad={lista.reduce((suma, producto) => suma + producto.cantidad, 0)} />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos agregar={agregar} productos={lista} />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/compras" element={<Compras lista={lista} reiniciarCompra={reiniciarCompra} />} />
                <Route path="/catalogo" element={<CatalogoWeb agregar={agregar} productosCarrito={lista} />} />
                <Route path="/ofertas" element={<Ofertas agregar={agregar} productosCarrito={lista} />} />
            </Routes>

            <Pie />
        </BrowserRouter>
    )
}

export default App

