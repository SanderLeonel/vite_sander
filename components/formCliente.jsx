function FormCliente({ cliente, onChange }) {
    return (
        <div className="card shadow border-0 rounded-4">
            <div className="card-header bg-dark text-white rounded-top-4 p-3"><h4 className="mb-0">Datos del cliente</h4></div>
            <div className="card-body p-3">
                <label htmlFor="cliente-nombre" className="form-label">Nombre</label>
                <input id="cliente-nombre" name="nombre" className="form-control mb-3" required value={cliente.nombre} onChange={onChange} />
                <label htmlFor="cliente-ciudad" className="form-label">Ciudad</label>
                <input id="cliente-ciudad" name="ciudad" className="form-control mb-3" required value={cliente.ciudad} onChange={onChange} />
                <label htmlFor="cliente-edad" className="form-label">Edad</label>
                <input id="cliente-edad" name="edad" type="number" min="0" max="120" step="1" className="form-control" required value={cliente.edad} onChange={onChange} />
                <label htmlFor="cliente-genero" className="form-label mt-3">Género</label>
                <select id="cliente-genero" name="genero" className="form-select" value={cliente.genero} onChange={onChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                    <option value="prefiero-no-decir">Prefiero no decirlo</option>
                </select>
            </div>
        </div>
    );
}
export default FormCliente;