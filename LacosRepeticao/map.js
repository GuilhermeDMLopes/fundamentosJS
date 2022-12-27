const notas = [10, 9.5, 8, 7, 6];
//Vamos adicionar um ponto extra para cada nota

// O metodo map também recebe uma função callback como parametro, assim como forEach.
// Para cada uma das notas ele vai adicionar mais um e retornar esse valor para o array
// Ele não altera o array original!
// Muito útil quando queremos reescrever array
// DIferente do FOrEach, o map possui retorno
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10:nota+1; // Se a nota for maior que 10 retornamos apenas 10, se não, o valor da nota.
})

console.log(notasAtualizadas)

// Alterando strings com o map()

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})

// Também podemos utilizar essa escrita:
//const nomesPadronizados = nomes.map((nome) => nome.toUpperCase())

console.log(nomesPadronizados)
