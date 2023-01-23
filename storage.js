const saveCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem('carritoDeCompras',JSON.stringify(carritoDeCompras));
};

const getCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carritoDeCompras'));
    return carritoStorage;
};