function Contacto() {
    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Contáctanos</h1>

            <div className="card shadow-sm p-4">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese su nombre" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" placeholder="Ingrese su correo" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mensaje</label>
                        <textarea className="form-control" rows="4" placeholder="Escriba su mensaje"></textarea>
                    </div>

                    <button type="button" className="btn btn-primary">
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;