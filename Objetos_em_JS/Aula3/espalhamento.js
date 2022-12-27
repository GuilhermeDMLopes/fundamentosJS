// Usar o espalhamento (Spread Operator) em uma função externa

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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`ligando para ${telefoneComercial}`)
    console.log(`ligando para ${telefoneResidencial}`)
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1])

// Utilizando a sintaxe de espalhamento
ligaParaCliente(...cliente.telefone)

// Conseguimos utilizar o espalhamento com objetos?

const encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.enderecos[0],
}

console.log(encomenda)

// Uma forma de passar os campos individualmente

const encomenda1 = {
    destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero: cliente.enderecos[0].numero    
}

console.log(encomenda1)

// E se tivermos muitos campos?
// Para isso, utilizamos o espalhamento, para preencher todos os dados de um campo

const encomenda3 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda3)

// Caso tentemos utilizar o Spread Operator com chaves de nomes iguais, ele irá sobrescrever com o último passado
// Ex:

const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)
