const notas = [6.5, 7.4, 9.8, 8.2, 7.7];

for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: "Lyvia",
  sobrenome: "Silva",
  idade: 18,
  peso: 62,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
