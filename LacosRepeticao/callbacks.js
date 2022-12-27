// Função Callback é quando temos uma função que chama outra função

const nomes = ["Evaldo", "Fabi", "Luiz"];

//3 formas de realizar esse tipo de função

//1 - Como parametro de uma função
nomes.forEach(function (nome) {
    console.log(nome);
});

//2 - Usando ArrowFunction
nomes.forEach((nome) => {
    console.log(nome);
});

//Criando uma função e depois passar como parametro
function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome);