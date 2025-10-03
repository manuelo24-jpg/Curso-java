let contador = 0;

let numero = document.querySelector('#numeroClicks');
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    contador++;
    if (contador === 17) {
        contador = 0;
        numero.textContent = "limite alcanzado";
    } else {
        numero.textContent = contador + " clicks";
    }
});