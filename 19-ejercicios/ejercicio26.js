function cuentaLetras(datos) {
    let nuevosDatos = datos.map((elemento) => elemento.length);

    return nuevosDatos;
}

const frutas = ["naranja", "manzana", "pera", "kiwi", "banana"];

console.log(cuentaLetras(frutas));