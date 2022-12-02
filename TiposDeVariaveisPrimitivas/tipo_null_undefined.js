// Também existem os tipos Null e Undefined
// Ambos são ausencia de valor. Porém os Null precisam ser inicializados enquanto o Undefined não
// O Undefined também é retornado quando uma função não tem return

let input = null;
let input2;

console.log(input)
console.log(input2)

//Os operadores podem ou não identificar diferenças entre eles
console.log(null == undefined) //retorna true
console.log(null === undefined) //retorna false

//Geralmente, undefined pode ser causado por bug ou erro no código
//Null é um tipo de dado. Um campo de um BD que esteja sem dado, pode ter o valor null