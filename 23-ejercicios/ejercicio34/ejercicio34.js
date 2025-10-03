let pequena = document.querySelector("#pequena");
let mediana = document.querySelector("#mediana");
let grande = document.querySelector("#grande");

let ventana = (anchura, altura) => {
    window.open("ventana.html", "ventana", `width=${anchura},height=${altura}`);
};

pequena.addEventListener("click", () => {
    ventana(200, 200);
});

mediana.addEventListener("click", () => {
    ventana(500, 500);
});

grande.addEventListener("click", () => {
    ventana(800, 800);
});