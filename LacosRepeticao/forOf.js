const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
// FOR-OF le cada elemento em um array. Executa um bloco de codigo apra cada elemento
for (let elemento of notas) {
    //console.log(elemento)
    somaDasNotas += elemento
}

const media = somaDasNotas / notas.length;

console.log(media)

// Apesar do ForOf ser mais sucinto, o for comum abrange mais possibilidades de manuseamento