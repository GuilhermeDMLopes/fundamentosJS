// Exemplo de acesso aos valores do objeto utilizando colchetes

const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

//Mostra o Objeto todo
console.log(cliente)

//Mostra apenas um valor do objeto
console.log(cliente["nome"])

// Utilizamos colchetes quando temos objetos e não sabemos quais são suas propriedades

//Mensagem customizada
console.log(`o nome do cliente é ${cliente["nome"]} e tem ${cliente["idade"]} anos`)

// Exemplo da diferença entre '.' e colchetes
const chaves = ["nome", "idade", "cpf", "email", "altura"]; //altura retorna undefined pois a propriedade não existe
chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})