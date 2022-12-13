// tipo de dado
// booleanos

// CONVERSÃO IMPLÍCITA
// permite que cccconvertamos um  tipo de dado em outro. Numero em string, string em numero, etc

const numero = 456;
const numeroString = "456";
console.log(numero === numeroString) // retorna false pois apesar dos valores serem iguais, os tipos de variaveis não (numero é diferente de string)
console.log(numero == numeroString) // retorna true, pois ele iguala os conteúdos
// no segundo caso, o JS transforma tudo em string e faz a comparação.
// Essa comparação pode gerar alguns bugs no código

console.log(numero + numeroString) // Como previsto, a soma vira uma concatenação

// CONVERSÃO EXPLÍCITA
// Usa as funções NUmber() e String()

console.log(numero + Number(numeroString)) // retorna a soma dos valores
// Se a string tiver algo diferente de Numero, a função retorna NaN
const numeroErrado = "456a";
console.log(Number(numeroErrado))