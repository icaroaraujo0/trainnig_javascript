// Laços de repetição

// While é utilizado quando não sabemos o número de reptições que o laço irá executar.

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida: ${opcao}`);
}

console.log("Até a próxima!");
