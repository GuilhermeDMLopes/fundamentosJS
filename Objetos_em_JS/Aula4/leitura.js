// Interação com o arquivo no formato JSON

/* Esse formato é muito utilizado quando temos um padrão no código e queremos acessar em outros lugares.
Podemos transformar o objeto em uma string e transmitir esses dados na rede.
Isso faz com que seja possível manipular o objeto em sistemas que não necessariamente usem JS
Por isso ele tem as limitações citadas no arquivo json.js*/

// Forma de importação de módulos e métodos de outros arquivos 
//Veremos mais informações do require no curso de NodeJS com Express
const dados = require("./cliente.json")
// Lemos um arquivo .json e transformamos em um objeto do JS
console.log(dados)

console.log(typeof dados) //Retorna um objeto


// Transformar o objeto em string
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString)
console.log(typeof clienteEmString) //retorna string
console.log(clienteEmString.nome) // retorna undefined pois não é um objeto

// Assim conseguiremos transmitir os dados do objeto para a rede e ser reutilizado em diversas formas

// Retransformar em Objeto. Parse significa "traduzir"/adaptar
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente)

// Artigo sobre clonagem de objetos: https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js

