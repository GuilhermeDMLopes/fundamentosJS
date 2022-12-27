const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Filter sempre vai retornar Verdadeiro ou Falso. Se for verdadeiro, ele adiciona no novo array, se for falso, não.
const reprovados = alunos.filter((alunos, indice) => {
    return medias[indice] < 7; // Retorna apenas o marcos
})

// Observando que o parametro aluno não está sendo utilizado, podemos reescrever da seguinte forma:
/*const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7; // Retorna apenas o marcos
})*/

// Isso é necessário pois precisamos nomer o primeiro Parametro(alunos) para acessar o segundo(indice)
console.log(reprovados)