// Queremos criar um array sem alterar o original
/*const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${novasNotas}`);*/

// O array original foi alterado pois as novasNotas e notas estão viniculados como se fossem o mesmo.
// o JS entende que eles estão apontando para o mesmo endereço de memoria

// Para evitar isso, fazemos o spread operator

const notas = [7, 7, 8, 9];

const novasNotas = [...notas];

novasNotas.push(10);
//Tambem podemos fazer 
// const novasNotas = [...notas, 10]; para adicionar 10 no final do array
// const novasNotas = [8, ...notas, 10]; para adicionar 8 no inicio do array

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);