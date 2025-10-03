const anchura = window.screen.width;
const altura = window.screen.height;

const abrirVentana = document.querySelector("#abrirVentana");
const arribaIZQ = document.querySelector("#arribaIZQ");
const abajoIZQ = document.querySelector("#abajoIZQ");
const arribaDER = document.querySelector("#arribaDER");
const abajoDER = document.querySelector("#abajoDER");
const centro = document.querySelector("#centro");

let miVentana;

abrirVentana.addEventListener("click", () => {
    miVentana = window.open("", "", "width=200,height=200,top=100,left=100");
});

arribaIZQ.addEventListener("click", () => {
    miVentana.moveTo(0, 0);
});

abajoIZQ.addEventListener("click", () => {
    miVentana.moveTo(0, altura);
});

arribaDER.addEventListener("click", () => {
    miVentana.moveTo(anchura, 0);
});

abajoDER.addEventListener("click", () => {
    miVentana.moveTo(anchura, altura);
});

centro.addEventListener("click", () => {
    miVentana.moveTo(anchura / 2, altura / 2);
});