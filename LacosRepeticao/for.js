const numero = [100, 200, 300, 400, 500, 600];

// Primeira expressão: executada um vez
// Segunda expressão: condição de execução
// Terceira expressão: executada no final do bloco

for (let indice = 0; indice < numero.length; indice++) {
    console.log(numero[indice])
}

// Calcular media usando for
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// Calulando media de listas 2D
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media2d = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media2d += notasGerais[i][j]/notasGerais[i].length;
  }
}

media2d = media/notasGerais.length

console.log(media2d)