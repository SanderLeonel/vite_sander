export function calcularCompra(lista, edad) {
    if (edad === '' || !Number.isInteger(Number(edad)) || Number(edad) < 0 || Number(edad) > 120) {
        throw new Error('Ingresa una edad válida entre 0 y 120 años.');
    }
    if (lista.length === 0) throw new Error('Agrega productos antes de comprar.');
    const anios = Number(edad);
    if (anios < 18 && lista.some(producto => producto.esLicor)) {
        throw new Error('No se pueden vender licores a menores de edad. Retira los licores del carrito o reinicia la compra.');
    }
    const redondear = valor => Math.round((valor + Number.EPSILON) * 100) / 100;
    const subtotal = redondear(lista.reduce((suma, producto) => suma + producto.total, 0));
    const ivaBase = redondear(subtotal * 0.15);
    const descuentoIva = anios > 65 ? redondear(ivaBase * 0.08) : 0;
    const iva = anios < 18 ? 0 : redondear(ivaBase - descuentoIva);
    const ice = anios >= 18 && anios <= 65 ? 10.41 : 0;
    return { subtotal, iva, descuentoIva, ice, total: redondear(subtotal + iva + ice) };
}