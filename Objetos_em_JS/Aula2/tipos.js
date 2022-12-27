// Adicionando tipos de variaveis no objeto
// Se quisermos que nosso usuario possua mais de 1 telefone

const clienteErrado = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: "1155555550",
    telefone2: "1144444440",
};

// Isso não fica muito trivial e dificulta a manipulação. Com isso, fazemos:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

//Conseguimos adicionar um Array no objeto
console.log(cliente)
console.log(cliente.telefone)
