
let boton = document.querySelector("#btnSemaforo");
let luces = document.querySelectorAll(".luz");
let estado = 0; // 0: rojo, 1: amarillo, 2: verde

boton.addEventListener("click", () => {
    //retirar luces encendidas
    luces.forEach((luz) => luz.classList.remove("activa"));
    //encender la luz correspondiente
    luces[estado].classList.add("activa");
    //cambiar indice
    estado++;
    if (estado > 2) estado = 0;
});