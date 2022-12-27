// Ferramentas para verificar chaves, valores de um objeto

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

// Metodo que retorna um array com todas as chaves e propriedades que foram inicializados
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

// Verifica se existe algum endereço cadastrado. Se não houver, recebemos mensagem de erro conforme abaixo:
if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado")
}

// Mais em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects