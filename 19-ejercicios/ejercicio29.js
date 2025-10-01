function misVocales(cadena) {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(misVocales("Hola me llamo Pepe")); // 7