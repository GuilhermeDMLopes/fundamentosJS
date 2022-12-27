// Filtrar as pessoas que vivem em apartamento e não tem complemento do arquivo JSON

const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter(cliente => {
        return (cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        ); //Verifica se o endereço tem complemento
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados)