//é uma constante. Uma vez declarada, não podemos mudar o valor dela

const altura = 5;
const comprimento = 7;
const forma = 'retangulo';
// o 'const' deve ser inicializado antes de ser utilizado e deve ter um valor atribuido (não pode ser undefined)
//const area = 0;
//Como a variavel area será mudade, ela não pode ser 'const'
let area;
if(forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura*comprimento)/2;
}

console.log(area)