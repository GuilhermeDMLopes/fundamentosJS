// Tipo Number

const meuNumero = 3;

const num1 = 1;
const num2 = 2;

const operacaoMatematica = num1 + num2;

console.log(operacaoMatematica) //Para rodar o arquivo, basta utilizar o comando 'node nome_arquivo' no terminal

// ponto flutuante

const numeroFlutuante = 3.3;
const numeroFlutuanteSemZero = .5; //Equivale ao 0.5

const novaOperacaoMatematica = num1 / numeroFlutuanteSemZero;

console.log(novaOperacaoMatematica);

// NaN -> Not A Number
// Acontece quando fazemos operações matematicas entre numeros e nao numeros, como mostrado abaixo.
 
const alura = "Alura";

console.log(alura * num2); //Em caso de soma (+), o JS entende que devemos juntar os 2. Neste caso o resultado seria Alura2 (Alura + 2)