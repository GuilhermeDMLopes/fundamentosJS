// Removendo elementos repetidos

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Os elementos de um set não podem se repetir
// Retorna um Objeto
const meuSet = new Set(nomes);
// Transformado Objeto em Array
const nomesAtualizados = [...meuSet]
// Fazendo mais direto
// const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)