const personajes = ["V:Joker", "H:Batman", "V:Duende Verde", "H:Mujer Maravilla", "H:Flash", "H:Harry Potter", "V:Voldemort"];

const heroes = personajes.filter(personaje => personaje.startsWith("H:"));
const villanos = personajes.filter(personaje => personaje.startsWith("V:"));

console.log("Heroes:");
console.log(heroes.join(", "));

console.log("Villanos:");
console.log(villanos.join(", "));

heroes.forEach(heroe => console.log(heroe.split(":")));
villanos.forEach(villano => console.log(villano.slice(2)));