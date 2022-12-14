// Template Literal ou Template String

//Concatenação normal

const nome = "Gui";
const idade = 2022 - 1996;
const cidadeDeNascimento = "Itajuba";
//const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
//console.log(apresentacao)

// Utilizando template

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log(apresentacao)
