// O let surgiu a partir da versão de 2015 do JS

let altura = 5;
let comprimento = 7;
let forma = 'retangulo';
let area; // o 'let' deve ser inicializado antes de ser utilizado

if(forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura*comprimento)/2;
}

console.log(area)

//Porque usar o let e não o var?
//Dentro do programa, temos varios blocos de codigo. Não é interessante termos
//uma variável dentro dos blocos em que conseguimos mexer no valor dela dentro dos blocos
//pois podemos reutilizar essa variavel em outros blocos do código. POr isso a variavel VAR
//não é indicada.

//Mas ainda sim podemos mudar os valores das variáveis dentro do código.
//Se tivessemos inicializado let area = 0, o valor seria alterado de acordo com a formula.