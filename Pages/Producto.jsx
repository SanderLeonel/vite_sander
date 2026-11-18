
import CardProducto from '../components/CardProducto.jsx';
import SeccionCategoria from '../components/SeccionCategoria.jsx';
import ResumenCompra from '../components/ResumenCompra.jsx';

function Productos({ agregar, productos }) {
    return (
        <div className="bg bg-info">
            <div className="row">

                <div className="col-md-9">

                    <SeccionCategoria titulo="Electrónica">
                        <div className="row row-cols-1 row-cols-md-3">
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Laptop')?.cantidad ?? 0} nombre="Laptop" precio={650} disponible={false} stock={0} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Mouse')?.cantidad ?? 0} nombre="Mouse" precio={15} disponible={false} stock={0} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Teclado')?.cantidad ?? 0} nombre="Teclado" precio={45} disponible={true} stock={5} agregar={agregar}/>
                        </div>
                    </SeccionCategoria>

                    <SeccionCategoria titulo="Snacks">
                        <div className="row row-cols-1 row-cols-md-3">
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Kachitos')?.cantidad ?? 0} nombre="Kachitos" precio={1.5} disponible={true} stock={10} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Papitas')?.cantidad ?? 0} nombre="Papitas" precio={1} disponible={false} stock={0} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Cueritos')?.cantidad ?? 0} nombre="Cueritos" precio={5} disponible={true} stock={35} agregar={agregar}/>
                        </div>
                    </SeccionCategoria>

                    <SeccionCategoria titulo="Bebidas">
                        <div className="row row-cols-1 row-cols-md-3">
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Agua')?.cantidad ?? 0} nombre="Agua" precio={1} disponible={true} stock={100} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Refresco')?.cantidad ?? 0} nombre="Refresco" precio={2} disponible={true} stock={50} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Jugo')?.cantidad ?? 0} nombre="Jugo" precio={3} disponible={false} stock={0} agregar={agregar}/>
                        </div>
                    </SeccionCategoria>
                    <SeccionCategoria titulo="Licores">
                        <div className="row row-cols-1 row-cols-md-3">
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Ron')?.cantidad ?? 0} nombre="Ron" precio={18} disponible={true} stock={15} agregar={agregar} esLicor={true}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Whisky')?.cantidad ?? 0} nombre="Whisky" precio={35} disponible={true} stock={10} agregar={agregar} esLicor={true}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Vodka')?.cantidad ?? 0} nombre="Vodka" precio={22} disponible={true} stock={20} agregar={agregar} esLicor={true}/>
                        </div>
                    </SeccionCategoria>
                    <SeccionCategoria titulo="Ropa">
                        <div className="row row-cols-1 row-cols-md-3">
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Playera')?.cantidad ?? 0} nombre="Playera" precio={15} disponible={true} stock={20} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Pantalón')?.cantidad ?? 0} nombre="Pantalón" precio={30} disponible={false} stock={0} agregar={agregar}/>
                            <CardProducto cantidad={productos.find(producto => producto.nombre === 'Sudadera')?.cantidad ?? 0} nombre="Sudadera" precio={50} disponible={true} stock={10} agregar={agregar}/>
                        </div>
                    </SeccionCategoria>

                </div>
                <div className="col-md-3">
                    <ResumenCompra productos={productos}/>
                </div>

            </div>
        </div>
    );
}

    export default Productos;
