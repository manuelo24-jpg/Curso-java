let elFactorial = (numero) => {
    if (numero <= 1) return 1;

    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(elFactorial(Number(prompt("Introduce un numero"), 0))); 