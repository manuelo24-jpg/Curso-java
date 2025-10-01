let numeros = [];

for (let i = 0; i < 6; i++) {
    let numerito = Number(prompt("Introduce un numero"), 0);
    numeros.push(numerito);
}

function mostrar(coleccion) {
    for (let i in coleccion) {
        document.write(coleccion[i] + "<br>");
    }
    return coleccion
}

mostrar(numeros);

numeros.sort(function (a, b) { return a - b });

document.write("<br>Ordenados de menor a mayor:<br>");
mostrar(numeros);

numeros.reverse();

document.write("<br>Ordenados de mayor a menor:<br>");
mostrar(numeros);

document.write("<br>Hay " + numeros.length + " numeros en el array<br>");

let busqueda = parseInt(prompt("Busca un numero"), 0);

let posicion = numeros.findIndex(numero => numero === busqueda);

if (posicion && posicion != -1) {
    document.write("El numero " + busqueda + " esta en la posicion " + posicion);
} else {
    document.write("El numero " + busqueda + " no esta en el array");
}


