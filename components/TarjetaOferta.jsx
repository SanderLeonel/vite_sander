function TarjetaOferta({ nombre, precio, descuento, agregar, cantidad = 0 }) {
    const valorDescuento = precio * (descuento / 100);
    const precioFinal = precio - valorDescuento;
    const iva = precioFinal * 0.15;
    const precioIva = precioFinal + iva;

    function oferta(){
        if(descuento>10){
            return <span className="badge bg-warning">Gran Oferta</span>
        }else{
            return <span className="badge bg-info">Oferta</span>
        }
    }

    return (
        <div className="card h-100">
            <div className="card-body">
                <span className="badge bg-success mb-2">Ahorras: ${valorDescuento.toFixed(2)}</span>
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">En el carrito: {cantidad}</p>
                <p className="card-text">Antes: ${precio.toFixed(2)}</p>
                <p className="card-text">Descuento: ${valorDescuento.toFixed(2)}</p>
                <p className="card-text">Ahora: ${precioFinal.toFixed(2)}</p>
                {oferta()}
                <span className="card-text">Con IVA: ${precioIva.toFixed(2)}</span>
                <button className="btn btn-primary" onClick={() => agregar(nombre, precio, descuento)}>
                    Agregar
                </button>
            </div>
        </div>
    );
}
export default TarjetaOferta;
