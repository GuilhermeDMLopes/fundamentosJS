const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// vamos somar varios numeros de uma lista
//reduce(param1, 0) o 0 é o valor inicial do acumulador. Como se fosse let totalNotas = 0
function calculaMedia(notasDaSala) {
   const somasDasNotas = notasDaSala.reduce((acumulador, nota) => {
    // recebe o valor 0 do acumulador mais o valor da nota em cada indice em salaJS    
    return acumulador + nota;
    }, 0);

    const media = somasDasNotas / notasDaSala.length;
    
    return media;
}

console.log(`a média da sala é ${calculaMedia(salaJS)}`)
