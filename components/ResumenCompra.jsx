function ResumenCompra({ productos }) {
    let subtotal = productos.reduce((suma, producto) => suma + producto.total, 0);
    let iva = subtotal * 0.15;
    let total = subtotal + iva;
    return (
        <div className="card shadow position-sticky" style={{ top: "20px" }}>
            <div className="card-body">
                <h4 className="card-title">Resumen de compra</h4>
                <h6>Datos del cliente</h6>
                <input type="text" className="form-control mb-2" placeholder="Nombre del cliente" />
                <input type="text" className="form-control mb-2" placeholder="Ciudad" />
                <input type="number" className="form-control mb-3" placeholder="Edad" />
                <h6>Productos agregados</h6>
                {productos.map((producto) => (
                    <div key={producto.nombre} className="border-bottom mb-2">
                        <p>{producto.nombre}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Total: ${producto.total.toFixed(2)}</p>
                    </div>
                ))}
                <h6>Subtotal: ${subtotal.toFixed(2)}</h6>
                <h6>IVA: ${iva.toFixed(2)}</h6>
                <h4>Total: ${total.toFixed(2)}</h4>
            </div>
        </div>
    );
}
export default ResumenCompra;
