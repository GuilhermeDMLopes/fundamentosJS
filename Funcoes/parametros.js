// Parametros das funções

function soma(num1, num2) {
    return num1 + num2;
}

//console.log(soma()) // Ao rodar dessa forma, o resultado é NaN pois qualquer operação com undefined resulta NaN
//console.log(soma(2,3));

// Diferença entre parametro e argumento
// Parametro são as variaveis 
// Argumentos são os valores dessas variaveis

// Os parametros tem uma ordem. No exemplo acima, a ordem é (num1 =2, num2=3)

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(26, "Gui")) //nome recebe 26 e idade recebe Gui

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

//console.log(multiplica(soma(2,3), soma(2,3))) // os parametros de multiplica são os resultado das funções soma()
//console.log(multiplica(soma(2,3))) // Se passarmos apenas um parametro, o resultado é NaN.
//Para evitar o problema de colocar apenas um parametro, podemos fazer
function multiplica2(num1 = 1, num2 = 1) {
    return num1 * num2;
}
//console.log(multiplica2(soma(1,2))) //O valor da função soma() substitui o valor passado anteriormente na função. Resultado = 3
