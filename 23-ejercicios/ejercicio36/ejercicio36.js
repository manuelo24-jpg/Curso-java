let contador = document.querySelector("#contador");

contador.addEventListener("input", () => {

    let texto = contador.value.length;
    document.querySelector("#pulsaciones").textContent = "Pulsaciones: " + texto;

});