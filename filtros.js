// REMERA //
const filtroRemera = async () => {

    const remerasContenedor = document.getElementById('remeras');
    const contenedorProductos = document.getElementById('producto-contenedor');

    const productos = await obtenerProductos();
    const esRemera = producto => producto.categoria === 'remera';
    const categoriaRemera = productos.filter(esRemera);        

    remerasContenedor.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = '';
        categoriaRemera.forEach(producto =>{
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">Descripción: ${producto.desc}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                                </div>
                            </div>`

            contenedorProductos.appendChild(div);

            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', ()=>{
                validarProductoRepetido(producto.id);
                alert(`Se agrego ${producto.nombre} al carrito`);
            })
        })
    });
}

filtroRemera();


// BUZO //

const filtroBuzo = async () => {

    const productos = await obtenerProductos();
    const esBuzo = producto => producto.categoria === 'buzo';
    const categoriaBuzo = productos.filter(esBuzo);

    const buzoContenedor = document.getElementById('buzos'); 
    const contenedorProductos = document.getElementById('producto-contenedor');   

    buzoContenedor.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = '';
        categoriaBuzo.forEach(producto =>{
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">Descripción: ${producto.desc}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                                </div>
                            </div>`

            contenedorProductos.appendChild(div);

            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', ()=>{
                validarProductoRepetido(producto.id);
                alert(`Se agrego ${producto.nombre} al carrito`);
            })
        })
    });
}

filtroBuzo();


// CAMPERA //

const filtroCampera = async () => {

    const productos = await obtenerProductos();
    const esCampera = producto => producto.categoria === 'campera';
    const categoriaCampera = productos.filter(esCampera);

    const camperaContenedor = document.getElementById('camperas');    
    const contenedorProductos = document.getElementById('producto-contenedor');

    camperaContenedor.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = '';
        categoriaCampera.forEach(producto =>{
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">Descripción: ${producto.desc}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                                </div>
                            </div>`

            contenedorProductos.appendChild(div);

            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', ()=>{
                validarProductoRepetido(producto.id);
                alert(`Se agrego ${producto.nombre} al carrito`);
            })
        })
    }); 
}

filtroCampera();

// TODOS LOS PRODUCTOS //

const filtroTodosLosProductos = async () => {
    
    const productos = await obtenerProductos();

    const TodosLosProductosContenedor = document.getElementById('todos-los-productos');    
    const contenedorProductos = document.getElementById('producto-contenedor');

    TodosLosProductosContenedor.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = '';
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">Descripción: ${producto.desc}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                    <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                                </div>
                            </div>`

            contenedorProductos.appendChild(div);

            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', ()=>{
                validarProductoRepetido(producto.id);
                alert(`Se agrego ${producto.nombre} al carrito`);
            })
        })
    });
}

filtroTodosLosProductos();

// PRODUCTOS ECONOMICOS //

const filtroEconomicos = async () => {

    const productos = await obtenerProductos();
    const esEconomico = producto => producto.precio <= 4500;
    const productosEconomicos = productos.filter(esEconomico);

    const pEconomicoContenedor = document.getElementById('productos-economicos');
    const contenedorProductos = document.getElementById('producto-contenedor');    

    pEconomicoContenedor.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = '';
        productosEconomicos.forEach(producto =>{
            const div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">Descripción: ${producto.desc}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                                </div>
                            </div>`

            contenedorProductos.appendChild(div);
            
            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', ()=>{
                validarProductoRepetido(producto.id);
                alert(`Se agrego ${producto.nombre} al carrito`);
            })
        })
    });
}

filtroEconomicos();