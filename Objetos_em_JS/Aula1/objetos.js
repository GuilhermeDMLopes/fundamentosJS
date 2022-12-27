// Descrevendo Objetos em JS. Exemplo com lista de cpfs

const listaCPFs = [1111111,22222,3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// Para acessar o nome da pessoa
console.log(informacoesPessoa[1]);
//Porém, caso haja algum problema na ordem; informação duplicada, etc. O índice não sera o mesmo

// Os objetos vieram para facilitar e padronizar esse tipo de uso. 

const objetoPessoa = {
    // Propriedades do Objeto. (Tudo aquilo que descreve o objeto)
    // EM JS isso é feito de forma par chave:valor
    nome: "Jose",
    idade: 32,
};

console.log(objetoPessoa.nome);