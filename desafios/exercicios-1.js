// Crie um programa que armazene dois números em variáveis e apresente no console:

// A soma dos dois números:

let num1 = 5;
let num2 = 4;

console.log("A soma dos dois números é: " + (num1 + num2));

// A subtração dos dois números:

console.log("A subtração dos dois números é: " + (num1 - num2));

// A multiplicação dos dois números:

console.log("A multiplicação dos dois números é: " + num1 * num2);

// A divisão dos dois números:

console.log("A divisão entre os dois números é: " + num1 / num2);

// Desenvolva um programa que receba a nota de um aluno e determine sua situação acadêmica.

/* Regras:

- Nota maior ou igual a 7: Aprovado.
- Nota maior ou igual a 5 e menor que 7: Recuperação.
- Nota menor que 5: Reprovado. 

*/

function verificarSituacaoAcademica(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

verificarSituacaoAcademica(8);
verificarSituacaoAcademica(4);
verificarSituacaoAcademica(6);
