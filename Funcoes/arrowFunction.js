// Novidade do ES6

function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//Arrow Function
//Não pode ser nomeada e vem como forma de expressão
//Função                //parametro        //resultado
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2;

//Arrow Function com mais de uma linha de instrução
//Possuem mais vantagens quando trabalhamos com Objetos
// Hoisting: Se comporta como expressão

const somaNumPequenos = (num1,num2) => {
    if(num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(somaNumPequenos(10,9))