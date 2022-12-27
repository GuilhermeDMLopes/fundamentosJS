// Exemplo de acesso aos valores do objeto utilizando ponto

const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

//Mostra o Objeto todo
console.log(cliente)

//Mostra apenas um valor do objeto
console.log(cliente.nome)

//Mensagem customizada
console.log(`o nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`)

//Chamar metodos do valor recebido/ Manipular valores
console.log(`os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}`)