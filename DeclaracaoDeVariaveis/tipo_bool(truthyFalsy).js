// boolean pode ser true ou false

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0 ou "" => false
// 1 => true

console.log(0 == false) // retorna True pois 0 é considerado false
console.log("" == false) // retorna True pois "" é considerado false
console.log(1 == true)  // retorna True pois 1 é considerado true
// Quando recebemos um resultado Nao esperado, ele pode retornar true por conta disso

// null => vazio ou nada

let minhaVar;
let varNull = null;
let numero = 3;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof minhaVar)
console.log(typeof varNull) //A variavel null é considerada objeto. É um bug do JS
//



