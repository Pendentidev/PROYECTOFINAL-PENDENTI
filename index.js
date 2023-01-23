document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    apiClima();

    if(localStorage.getItem('carritoDeCompras')){
        const carritoDeCompras = getCarritoStorage();
        pintarCarrito(carritoDeCompras);
        actualizarTotalesCarrito(carritoDeCompras);
    }
});