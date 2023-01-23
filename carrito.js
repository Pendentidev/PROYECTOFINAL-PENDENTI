let carritoDeCompras = [] || JSON.parse(localStorage.getItem('carritoDeCompras'));

const validarProductoRepetido = (productoId)=>{
    
    if(localStorage.getItem("carritoDeCompras")){
        carritoDeCompras = getCarritoStorage();
    }

    const productoRepetido = carritoDeCompras.find( producto => producto.id === productoId );

    if (productoRepetido){
        productoRepetido.cantidad ++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carritoDeCompras);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = async (productoId) =>{

    const carritoContenedor = document.getElementById('carrito-contenedor');
    const productos = await obtenerProductos();
    
    const producto = productos.find( producto => producto.id === productoId);
    carritoDeCompras.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');

    div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="restar${producto.id}" class="boton-restar bi bi-dash-square" value="${producto.id}"></button>
                        <button id="sumar${producto.id}" class="boton-sumar bi bi-plus-square" value="${producto.id}"></button>
                        <button id="eliminar${producto.id}" class="boton-eliminar fa-solid fa-trash-can" value="${producto.id}"></button>
                        `;

    carritoContenedor.appendChild(div);
    actualizarTotalesCarrito(carritoDeCompras);
};

const actualizarTotalesCarrito =  (carritoDeCompras) =>{

    const totalCantidad = carritoDeCompras.reduce((acc,producto) => acc + producto.cantidad,0); 
    const totalCompra = carritoDeCompras.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0); 

    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precio-total');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;

    saveCarritoStorage(carritoDeCompras);
};

const pintarCarrito = (carritoDeCompras) =>{

    const carritoContenedor = document.getElementById('carrito-contenedor');
    
    carritoContenedor.innerHTML = '';

    carritoDeCompras.forEach(producto => {
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')

    div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="restar${producto.id}" class="boton-restar bi bi-dash-square" value="${producto.id}"></button>
                        <button id="sumar${producto.id}" class="boton-sumar bi bi-plus-square" value="${producto.id}"></button>
                        <button id="eliminar${producto.id}" class="boton-eliminar fa-solid fa-trash-can" value="${producto.id}"></button>
                        `;

    carritoContenedor.appendChild(div);
    })
};

const vaciarCarrito = (carritoDeCompras) =>{
    
    const carritoVacio = carritoDeCompras.splice(0,carritoDeCompras.length);

    actualizarTotalesCarrito(carritoVacio);
    pintarCarrito(carritoVacio);
}

const eliminarItem = (productoId) =>{

    const carritoStorage = getCarritoStorage();

    const carritoActualizado = carritoStorage.filter( producto => producto.id != productoId);
    
    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

const sumarProducto = (productoId) => {

    const carritoDeCompras = getCarritoStorage();
    const producto = carritoDeCompras.find( producto => producto.id == productoId );

    producto.cantidad ++;

    const cantidadProducto = document.getElementById(`cantidad${producto.id}`);
    cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;

    actualizarTotalesCarrito(carritoDeCompras);
};

const restarProducto = (productoId) => {

    const carritoDeCompras = getCarritoStorage();
    const producto = carritoDeCompras.find( producto => producto.id == productoId );

    producto.cantidad --;

    const cantidadProducto = document.getElementById(`cantidad${producto.id}`);
    cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;
    actualizarTotalesCarrito(carritoDeCompras);

    if(producto.cantidad === 0){
        eliminarItem(producto.id);
    }
}





