function SeccionCategoria({titulo, children}) {
    return (
        <div className="mb-4">
            <div className="border-bottom">
                <div className="row">
                    <h5 className="card-title">{titulo}</h5>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default SeccionCategoria;
