const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const modalCarrito = document.querySelector('.modal-carrito')
const carritoContenedor = document.getElementById('carrito-contenedor')
const botonFinalizarCompra = document.getElementById('boton-finalizarcompra')


abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
});

modalContenedor.addEventListener('click',() => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('boton-eliminar')){
        swal({
            text: "Desea quitar la prenda del carrito de compra?",
            icon: "warning",
            buttons: ["Cancelar","Quitar"],
            dangerMode: true,
        })
        .then((quitar) => {
            if (quitar) {
            eliminarItem(e.target.value)         
            };
        });
    }

    if(e.target.classList.contains('boton-sumar')){
        sumarProducto(e.target.value)
    }

    if(e.target.classList.contains('boton-restar')){
        restarProducto(e.target.value)
    }

});

botonFinalizarCompra.addEventListener('click', (e) => {
    if(carritoDeCompras.length === 0){
        swal("No tiene productos en su carrito de compras")
        .then(modalContenedor.classList.remove('modal-active'))
    }else { swal("Compra finalizada")
        .then(() => {
            swal("Tiene una semana como máximo para realizar cambios por otro modelo");
        })
        .then(vaciarCarrito(carritoDeCompras))
        .then(pintarCarrito(carritoDeCompras))
        .then(actualizarTotalesCarrito(carritoDeCompras))
        .then(modalContenedor.classList.remove('modal-active'))
    }
});



