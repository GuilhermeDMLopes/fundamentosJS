// Diferenças entr "==" e "==="

// "==" => faz a conversão implícita antes da comparação
// "===" => faz a comparação entre todos os dados da variavel, tipo, valores, etc.

// == (comparacao implicita)
const numero = 5;
const texto = "5";
console.log(numero == texto) // Faz a conversão implicita e depois a comparação, logo: "5" é igual a "5". True
console.log(numero === texto) // Faz a comparação entre todos os dados da variavel. Logo: Type Numero != Type String. False

// Tipos de operadores
// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
