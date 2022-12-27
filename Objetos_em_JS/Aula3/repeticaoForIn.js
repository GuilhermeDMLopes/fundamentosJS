// Percorrer objeto com For..in

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

// Percorre as chaves de cada propriedades em cliente
for (let chave in cliente) {
    /*// Chaves
    console.log(chave)
    // Valores
    console.log(cliente[chave])
    */
    //console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    //Para os Obejtos ele retorna [object Object]
    // Podemos contornar fazendo:
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}