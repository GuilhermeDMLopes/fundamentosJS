//Vamos interpretar os erros

//ERRO 1
//const numero; //SyntaxError: Missing initializer in const declaration
// Diz que falta um inicializador na variavel do tipo const, ou seja, falta um valor para a variavel.

//ERRO 2
//console.log(numero //SyntaxError: missing ) after argument list
// Falta um ")" após a lista de argumentos

//ERRO 3
//console.log(minhaVar) //ReferenceError: minhaVar is not defined
// não foi encontrada a variável "minhaVar"

// Sempre avaliar os erros que são gerados, parte a parte
// at Object.<anonymous> (/home/guilherme/Documents/Alura/fundamentosJS/JavaScript_e_NodeJS/erros.js:12:13)
// Pegando a sequencia do erro do ERRO 3, conseguimos identificar onde está o erro exatamente, inclusive a linha (12:13)

// Tipos de erros mais comuns:
// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.
// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.
// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.
// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
