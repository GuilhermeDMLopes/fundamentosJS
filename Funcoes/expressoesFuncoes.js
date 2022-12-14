//Forma classica/declarativa de escrever função em JS
/*
function minhaFuncao(param) {
    //bloco de codigo
}

minhaFuncao("param")
*/

// expressão de função

//const soma = function(num1,num2) {return num1 + num2}
//console.log(soma(1,2))


// Diferença principal entre essas formas: Hoisting (içar)
// Funções e var são "listadas" no topo e depois executadas. Por isso a forma classica funciona e a expressão não
console.log(apresentar()) //Consegue retornar o Ola

function apresentar() {
    return "Ola";
}

console.log(soma(1,2)) // gera erro ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1,num2) {return num1 + num2}


