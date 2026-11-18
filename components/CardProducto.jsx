import { useState } from "react";
function CardProducto({ nombre, precio, disponible, stock, agregar, esLicor = false, cantidad = 0 }) {
    let iva = precio * 0.15;
    let total = precio + iva;
    const [descuento, setDescuento] = useState(0);
    let subtotal = cantidad * precio;
    let valorDescuento = subtotal * descuento / 100;
    let totalCompra = (subtotal - valorDescuento);

    function AgregarProducto() {
        if (cantidad < stock && disponible) {
            agregar(nombre, precio, descuento, esLicor);
        }
    }
    function ComprarProducto() {
        agregar(nombre, precio, descuento, esLicor);
    }

    return (
        <div className="card h-100 shadow-sm row">
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio.toFixed(2)}</p>
                <p className="card-text ">IVA: ${iva.toFixed(2)}</p>
                <p className="card-text bg-success rounded">Total: ${total.toFixed(2)}</p>
                <span className={`badge ${disponible ? 'bg-success' : 'bg-danger'}`}>
                    {disponible ? 'Disponible' : 'No disponible'}
                </span>
                <span className={`badge ${stock > 10 ? 'bg-success' : 'bg-warning'}`}>
                    {stock > 0 ? `Stock dispoible: ${stock}` : 'Agotado'}
                </span>
                <button className="btn btn-primary" onClick={AgregarProducto}>Agregar</button>
                <button className="btn btn-danger" onClick={ComprarProducto}>Comprar</button>
                <h5 className="card-title">En el carrito: {cantidad}</h5>
                <h3 className="card-title">Total: ${totalCompra.toFixed(2)}</h3>
                <h6>Descuento</h6>
                <input type="number" min="0" className="form-control" placeholder="Ingrese el descuento" value={descuento} onChange={(e) => setDescuento(parseFloat(e.target.value) || 0)} />
            </div>
        </div>
    );
}
export default CardProducto;
