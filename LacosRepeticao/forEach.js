const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// Para cada elemento em notas, executar um codigo.
// Utiliza função callback, para cada elemento de notas, a função é chamada
notas.forEach(function (nota, indice) {
    //console.log("ola")
    somaDasNotas += nota;
    console.log(indice)
})

const media = somaDasNotas / notas.length;
console.log(media)

// O ForEach tem vantagem sobre o ForOf pois alem de cada elemento, conseguimos utilizar os indices