// Alterando/Adicionando/Deletando propriedades de um objeto

const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome) // Retorna Luma

console.log(pessoa.telefone) // Retorna undefined

// Para adicionar uma nova propriedade ao objeto, fazemos:

pessoa.telefone = "11 2223333444";
console.log(pessoa.telefone)
// Adiciona a chave e o valor de telefone ao objeto

// Para alterar um valor do objeto, fazemos:

pessoa.nome = "Luma Silva";
console.log(pessoa)

// Informação importante!!!!
// O objeto possui declaração do tipo const. No entanto, conseguimos alterar seus campos
// Isso acontece pois a const do obejto permite que alteremos seus valores, mas não o objeto todo!!!
// Se fizermos:
/*
const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa]
*/
// Vai gerar um erro pois estamos tentando mudar todos os valores do objeto.
// Retorna um erro que estamos tentando alterar o valor de uma const

// Deletando um valor

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
};

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
console.log(objPersonagem) // Retorna nome, classe e nivel

// OBS: Se tentarmos deletar algum campo que naõ existe no objeto, ele não retorna erro.