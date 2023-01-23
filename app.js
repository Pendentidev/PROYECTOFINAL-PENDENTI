const obtenerProductos = async () => {
    const response = await fetch('./stock.json');
    const data = await response.json();

    return data;
};


const mostrarProductos = async () => {

    const contenedorProductos = document.getElementById('producto-contenedor');
    const productos = await obtenerProductos();
    
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción: ${producto.desc}</p>
                                <p class="card-text>Talle: ${producto.talle}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                             </div>
                            </div>`

            contenedorProductos.appendChild(div);

            const boton = document.getElementById(`boton${producto.id}`);
            boton.addEventListener('click', ()=>{
                validarProductoRepetido(producto.id);
                Toastify({
                    title:"",
                    text: `Se agregó ${producto.nombre} al carrito`,
                    duration: 600,
                }).showToast();
            })
        });
};

// Formulario //

let formulario = document.getElementById("formulario");
let nombreFormulario = document.getElementById("nombre-formulario");
let mailFormulario = document.getElementById("mail-formulario");
let telefonoFormulario = document.getElementById("telefono-formulario");

formulario.addEventListener("submit",validarFormulario);

function validarFormulario (e){

    e.preventDefault();

    const nombre = nombreFormulario.value;
    const mail = mailFormulario.value;
    const telefono = telefonoFormulario.value; 
    
    nombre.length === 0 || mail.length === 0 || telefono.length === 0 ? swal("Faltan completar datos","","error") : swal("Usuario registrado!",`
    Nombre: ${nombre}
    Mail: ${mail}
    Teléfono: ${telefono}`, "success")
};

