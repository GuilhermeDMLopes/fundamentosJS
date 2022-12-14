// O que é o Console de "console.log"?

// É uma ferramenta que tem tanto no Node quanto nos navegadores para mostrar dados na tela
// console.log é um registro no nosso console. Podemos colocar qualquer informação dentro desse registro (Numero, string, etc)
const minhaVar = true;

console.log(245)
console.log("Texto")
console.log(minhaVar)

// Podemos sempre encontrar mais detalhes na documentação do Node

// Uma outra função muito utilizada é o console.error
// Utilizamos quando queremos descrever algum erro que nossa aplicação possa ter encontrado

// Tratamento de erro
console.error("Deu erro") // No terminal ele aparece como uma saída normal
// Para tratar como mensagem de erro, devemos fazer:
console.error(new Error("Deu erro"))

// Algumas outras funções do console:
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.