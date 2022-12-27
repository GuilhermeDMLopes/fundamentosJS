// Criando lista de objetos dentro de um objeto

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

//Adicionando enderecos
cliente.enderecos.push({
    rua: "R. Joseph Ledder",
    numero: 404,
    apartamento: false,
});

console.log(cliente.enderecos)

// Podemos acessar o objeto da seguinte forma. Podemos manipular como Array também
// Queremos listar todos os apartamentos dos endereços

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos)