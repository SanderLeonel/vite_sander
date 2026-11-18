import { useState } from 'react';
import FormCliente from '../components/formCliente.jsx';
import { calcularCompra } from '../src/compra.js';

function Compras({ lista, reiniciarCompra }) {
    const [cliente, setCliente] = useState({ nombre: '', ciudad: '', edad: '', genero: '' });
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState('');
    function cambiarCliente(event) {
        setCliente(actual => ({ ...actual, [event.target.name]: event.target.value }));
        setResultado(null);
        setError('');
    }
    function comprar(event) {
        event.preventDefault();
        setResultado(null);
        try {
            if (!cliente.nombre.trim() || !cliente.ciudad.trim()) throw new Error('Completa el nombre y la ciudad.');
            setResultado({ ...calcularCompra(lista, cliente.edad), lista });
            setError('');
        } catch (errorCompra) {
            setError(errorCompra.message);
        }
    }
    function reiniciar() {
        reiniciarCompra();
        setCliente({ nombre: '', ciudad: '', edad: '', genero: '' });
        setResultado(null);
        setError('');
    }
    const compra = resultado?.lista === lista ? resultado : null;
    const subtotal = lista.reduce((suma, producto) => suma + producto.total, 0);
    const iva = compra ? compra.iva : subtotal * 0.15;
    const ice = compra ? compra.ice : 0;
    const total = compra ? compra.total : subtotal + iva;
    return (
        <form onSubmit={comprar} className="row g-4">
            <div className="col-12 col-lg-8">
        <div className="card shadow border-0 rounded-4">
            <div className="card-header bg-dark text-white rounded-top-4 p-3">
                <h4 className="mb-0">🛒 Carrito de Compras</h4>
            </div>

            <div className="card-body p-3">
                {lista.length === 0 ? (
                    <p className="text-center text-muted my-4">
                        Tu carrito está vacío
                    </p>
                ) : (
                    <ul className="list-group list-group-flush">
                        {lista.map((producto, index) => (
                            <li key={index} className="list-group-item px-0 py-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="fw-bold mb-1">
                                        {producto.nombre}
                                    </h5>

                                    <span className="fw-bold text-success fs-5">
                                        ${producto.total.toFixed(2)}
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <span className="badge bg-primary rounded-pill">
                                        Cantidad: {producto.cantidad}
                                    </span>

                                    <small className="text-muted">
                                        Precio unitario: ${producto.precio.toFixed(2)}
                                    </small>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="card-footer bg-light p-3 rounded-bottom-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Subtotal:</span>
                    <span className="fw-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">IVA:</span>
                    <span className="fw-semibold">${iva.toFixed(2)}</span>
                </div>
                {compra && Number(cliente.edad) < 18 && <p className="small text-success">Exento de IVA por ser menor de edad.</p>}
                {compra && compra.descuentoIva > 0 && <p className="small text-success">Descuento del 8% sobre el IVA: ${compra.descuentoIva.toFixed(2)} (ya aplicado).</p>}
                <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">ICE:</span><span className="fw-semibold">${ice.toFixed(2)}</span>
                </div>
                {!compra && <p className="small text-muted">Pulsa Comprar para aplicar los impuestos según la edad.</p>}
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Total a pagar:</h5>

                    <h4 className="text-success fw-bold mb-0">
                        ${total.toFixed(2)}
                    </h4>
                </div>
                {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
                {compra && <div className="alert alert-success mt-3" role="status">Compra calculada correctamente. Total a pagar: ${total.toFixed(2)}</div>}
                <button type="submit" className="btn btn-success w-100 mt-3" disabled={lista.length === 0}>Comprar</button>
                <button
                    type="button"
                    className="btn btn-outline-danger w-100 mt-3"
                    onClick={reiniciar}
                    disabled={lista.length === 0}
                >
                    Reiniciar compra
                </button>
            </div>
        </div>
            </div>
            <div className="col-12 col-lg-4">
                <FormCliente cliente={cliente} onChange={cambiarCliente} />
            </div>
        </form>
    );
}
export default Compras;


