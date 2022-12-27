// Bloco aninhado é quanto temos um bloco dentro do outro

// Adicionando um objeto dentro de outro objeto
const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente)
// Podemos acessar o objeto da seguinte forma. Podemos manipular como objeto também
console.log(cliente.endereco)
console.log(cliente.endereco["rua"])