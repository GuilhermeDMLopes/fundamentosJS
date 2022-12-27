const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// Cria uma lista de 2 dimensões
const listaAlunosEMedias = [alunos, medias];

console.log(listaAlunosEMedias)
console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaAlunosEMedias[1][1]}
    `)
// Lista de alunos [0] e 1ª aluna é [1]. Lista de medias [1] e a nota da aluna é [1]
