

function mostrarPeliculas() {
    //seleccionar la etiqueta del listado
    let listado = document.querySelector('#listado');
    listado.innerHTML = '';

    //sacar todas las peliculas 
    let peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];

    // si no hay peliculas mostrar mensaje
    if (peliculasGuardadas.length === 0) {
        listado.innerHTML = '<li>No hay películas guardadas</li>';
        return;
    }

    // mostrar las peliculas
    peliculasGuardadas.forEach(pelicula => {
        let li = document.createElement('li');
        li.innerHTML = `${pelicula.titulo} - ${pelicula.fecha} - Popularidad: ${pelicula.popularidad}`;
        listado.appendChild(li);
    });
}

function guardarPelicula() {

    //titulo
    let titulo = document.querySelector('#titulo').value;
    //validar titulo
    if (titulo.trim() === '') {
        alert('El título no es válido');
        return false;
    }

    // fecha actual
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

    // generar un numero aleatorio
    let popularidad = Math.floor(Math.random() * 10);

    // crear objeto pelicula
    let pelicula = {
        titulo: titulo,
        fecha: fechaActual,
        popularidad: popularidad
    };

    // sacar todas las peliculas 
    let peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || [];

    if (!peliculasGuardadas) {
        peliculasGuardadas = [];
    }

    // guardar en el localstorage
    localStorage.setItem('peliculas', JSON.stringify(peliculasGuardadas));

    // limpiar campo de texto 
    document.querySelector('#titulo').value = '';

    //mostrar peliculas
    mostrarPeliculas();
}

window.addEventListener('load', () => {
    //cargar todas las peliculas
    mostrarPeliculas();
    //seleccionar el formulario
    let formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        guardarPelicula();

    });
});

