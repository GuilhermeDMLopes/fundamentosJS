const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//Pega os 10 primeiros nomes do array. o 10º não é incluído
alunos.slice(0,10);
// Os metodos push e pop alteram o array original. O slice não
console.log(alunos)

//Para pegar os 10 primeiros termos, devendo salvar em uma variavel.
//const sala1 = alunos.slice(0,10);
//const sala2 = alunos.slice(10); //Pega da posição 10 até o final.

//Também podemos fazer de forma mais dinamica, usando:
const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);
