const notas = [10, 6, 8];

// Inserindo nota no array
notas.push(7);

const media = (notas[0] +  notas[1] + notas[2] + notas[3])/notas.length;
console.log(media)

// Mesmo que o array seja const, ou seja, não podemos alterar. As funções do array permitem