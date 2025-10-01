let numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99, 78];

let numeroDos = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

let elige = prompt("Elige un numero del 1 al 100");

if (numeros.includes(parseInt(elige))) {
    console.log("El numero " + elige + " esta en el array");
} else {
    console.log("El numero " + elige + " no esta en el array");
}