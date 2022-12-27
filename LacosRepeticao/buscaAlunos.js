const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

/*
function exibeNomeENota(aluno){
    // Verifica se o aluno passado como parametro esta incluido na lista de alunos
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        //console.log(`${aluno} esta cadastrado`)

        //Pega o index do aluno na lista Alunos, passado como parametro 
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        //console.log(indice)

        const mediaDoALuno = listaDeAlunosEMedias[1][indice];
        console.log(`A média do ${aluno} é ${mediaDoALuno}`)
    } else {
        console.log("Aluno não encontrado")
    }
}
*/

// Seguindo boas praticas, fazemos:
function exibeNomeENota(aluno){
    // Verifica se o aluno passado como parametro esta incluido na lista de alunos
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];
        //Desestruturação de lista
        const [alunos, medias] = listaDeAlunosEMedias; // Realiza a mesma operação das 2 linhas anteriores

        const indice = alunos.indexOf(aluno);       

        const mediaDoALuno = medias[indice];
        console.log(`A média do ${aluno} é ${mediaDoALuno}`)
    } else {
        console.log("Aluno não encontrado")
    }
}

exibeNomeENota("João")