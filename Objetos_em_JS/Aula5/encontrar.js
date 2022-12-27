// Encontrar informações de objetos do arquivo JSON

const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860" )

console.log(encontrado)
console.log(encontrado2) // Retorna undefined pois o telefone é um array