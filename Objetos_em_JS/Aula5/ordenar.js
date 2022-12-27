// Ordenar de acordo com algum campo do arquivo JSON

const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => { 
        //Elemento A e elemento B
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    return resultado;
}

const ordenaNome = ordenar(clientes, "nome")
console.log(ordenaNome)
// Podemos utilizar o metodo .reverse() para ordenar de tras pra frente