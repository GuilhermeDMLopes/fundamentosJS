//VAR
//Primeira que surgiu no JS. Funciona em toda parte do código
//Não é recomendada nos dias de hoje

var altura = 5;
var comprimento = 7;
//Apesar de não precisar declarar a variável 'area', é uma boa prática colocar o tipo na frente
//var area = altura * comprimento;
area = altura * comprimento; 
console.log(area);
//Podemos declarar a variável depois dela já ter sido declarada. No entando, podemos ter problemas
var area; 
//Isso acontece pois quando o JS é executado, ele faz uma varredura e carrega todas as variaveis do tipo var primeiro.
//Porém isso pode causar algumas implicações, podemos não nos atentarmos e utilizar outra variavel com mesmo nome, causando conflito.
//Para resolver esse problema, podemos utilizar o tipo let. Conforme arquivo 'tipo_let.js'