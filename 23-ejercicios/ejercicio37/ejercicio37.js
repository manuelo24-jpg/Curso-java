const formulario = document.querySelector('#formulario');
let cajaInfo = document.querySelector('.info');
let nombre = document.querySelector('#nombre').value;
let apellido = document.querySelector('#apellido').value;
let edad = document.querySelector('#edad').value;
let infoNombre = document.querySelector('.info-nombre strong');
let infoApellido = document.querySelector('.info-apellido strong');
let infoEdad = document.querySelector('.info-edad strong');

let errorNombre = document.querySelector('#error-nombre');
let errorApellido = document.querySelector('#error-apellidos');
let errorEdad = document.querySelector('#error-edad');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nombre.value.trim() == null || nombre.value.trim().length == 0) {
        errorNombre.innerText = 'El nombre no es válido';
        return false;
    } else {
        errorNombre.display = 'none';
    }

    //validar apellido
    if (apellido.value.trim() == null || apellido.value.trim().length == 0) {
        errorApellido.innerText = 'El apellido no es válido';
        return false;
    } else {
        errorApellido.display = 'none';
    }

    //validar edad
    if (edad.value.trim() == null || edad.value <= 0 || isNaN(edad.value)) {
        errorEdad.innerText = 'La edad no es válida';
        return false;
    } else {
        errorEdad.display = 'none';
    }

    cajaInfo.style.display = 'block';
    infoNombre.innerHTML = `${nombre}`;
    infoApellido.innerHTML = `${apellido}`;
    infoEdad.innerHTML = `${edad}`;

    formulario.reset();
    cajaInfo.style.display = 'none';


});