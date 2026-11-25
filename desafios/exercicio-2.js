// EXERCÍCIOS - OPERADORES LÓGICOS

// Exercício 1 — Iniciante: Par ou ímpar
// Leia um número e informe se ele é par ou ímpar.

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
  } else {
    console.log("O número " + numero + " é ímpar.");
  }
}

verificarParOuImpar(4);
verificarParOuImpar(7);

// Exercício 2 — Iniciante: Classificação por idade
// Leia a idade de uma pessoa e classifique-a como criança (até 12 anos),
// adolescente (13 a 17 anos), adulta (18 a 59 anos) ou idosa (60 anos ou mais).

function classificarIdade(idade) {
  if (idade <= 12) {
    console.log("Classificação: Criança");
  } else if (idade >= 13 && idade <= 17) {
    console.log("Classificação: Adolescente");
  } else if (idade >= 18 && idade <= 59) {
    console.log("Classificação: Adulto");
  } else {
    console.log("Classificação: Idosa");
  }
}

classificarIdade(10);
classificarIdade(15);
classificarIdade(30);
classificarIdade(65);

// Exercício 3 — Iniciante: Contagem de 1 até N
// Leia um número inteiro positivo N e mostre todos os números de 1 até N.

function contarAteN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

contarAteN(5);

// Exercício 4 — Médio: Adivinhe o número
// Defina um número secreto entre 1 e 20 e peça tentativas até a pessoa acertar.
// A cada tentativa, informe se o número secreto é maior ou menor que o palpite.

function adivinharNumero(tentativas) {
  const numeroSecreto = 13;
  let indice = 0;
  let acertou = false;

  while (!acertou && indice < tentativas.length) {
    const palpite = tentativas[indice];

    if (palpite < numeroSecreto) {
      console.log("O número secreto é maior.");
    } else if (palpite > numeroSecreto) {
      console.log("O número secreto é menor.");
    } else {
      console.log("Acertou!");
      acertou = true;
    }

    indice++;
  }

  if (!acertou) {
    console.log("As tentativas acabaram. Tente novamente!");
  }
}

adivinharNumero([7, 18, 13]);

// Exercício 5 — Médio: Calculadora com menu
// Mostre um menu com as opções: somar, subtrair, multiplicar, dividir e sair.
// Peça uma opção e os números necessários. O menu deve continuar aparecendo
// até a pessoa escolher sair. Na divisão, trate o caso em que o divisor é zero.

function calculadora(operacoes) {
  let indice = 0;

  while (indice < operacoes.length) {
    const { opcao, num1, num2 } = operacoes[indice];

    switch (opcao) {
      case "somar":
        console.log(`Resultado: ${num1 + num2}`);
        break;

      case "subtrair":
        console.log(`Resultado: ${num1 - num2}`);
        break;

      case "multiplicar":
        console.log(`Resultado: ${num1 * num2}`);
        break;

      case "dividir":
        if (num2 !== 0) {
          console.log(`Resultado: ${num1 / num2}`);
        } else {
          console.log("Erro: Divisão por zero não é permitida.");
        }
        break;

      case "sair":
        console.log("Até a próxima!");
        break;

      default:
        console.log("Opção inválida.");
    }

    indice++;
  }
}

calculadora([
  { opcao: "somar", num1: 8, num2: 2 },
  { opcao: "dividir", num1: 8, num2: 0 },
  { opcao: "sair" },
]);
