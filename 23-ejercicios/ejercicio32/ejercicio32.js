document.addEventListener('DOMContentLoaded', () => {

    let nuevoProducto = document.querySelector('#nuevoProducto');
    let btnAgregar = document.querySelector('#agregar');
    let listaProductos = document.querySelector('#listaProductos');

    btnAgregar.addEventListener('click', () => {
        let producto = nuevoProducto.value.trim();
        if (producto !== '') {
            //crear li
            let li = document.createElement('li');
            li.textContent = producto;

            //crear boton eliminar
            let botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
                listaProductos.removeChild(li);
            });
            li.appendChild(botonEliminar);
            listaProductos.appendChild(li);
            nuevoProducto.value = '';
            nuevoProducto.focus();
        }
    });

});