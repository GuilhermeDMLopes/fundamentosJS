//Tipo String, consegue guardar qualquer coisa

const text1 = "Ola, mundo"; //Pode ser aspas duplas ou simples
const text2 = 'Ola, mundo';
const senha = "senhaSegura123!";
const stringDeNumeros = "34567";

const citacao = 'o Gui disse "oi"'; //Podemos trocar as aspas simples e duplas
console.log(citacao)

// concatenação (+)

console.log(citacao + senha)

// template string ou template literal
// É uma forma de declarar Strings de forma dinâmica, podendo colocar expressões dentro dela

const idade = 26;
const descricaoGui = `Meu nome é Guilherme e tenho ${idade} anos`
console.log(descricaoGui)

//Cada idioma possui alfabeto e simbolos diferentes. Como forma de padronizar os idiomas, surgiram as codificações de linguagens
//Utilizando exemplo do UTF-16

const cifrao = '\u0024';
const check = '\u2705';
console.log(cifrao, check)

//Podemos fazer comparação de Strings utilizando métodos do JS
// '==' compara as strings; '===' compara strings e bytes (mais confiável se quiser 2 strings exatamente iguais)
const cidade1 = "Belo Horizonte";
const cidade2 = "belo horizonte";
console.log(cidade1 == cidade2)
console.log(cidade1 === cidade2)
//Para contornar essas situações podemos fazer:
const cidade1Minusculo = cidade1.toLowerCase();
console.log(cidade1Minusculo == cidade2)
console.log(cidade1Minusculo === cidade2)

//Também podemos contar o tamanho/qtd caracteres da string, fazendo:
console.log(senha.length)
