function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com: " + nota);
  }
}

soBoaNoticia(8);
soBoaNoticia(6);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade... " + valor);
  }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});

/* 
Operadores Comuns em Condições

• === : Igual a (em valor e tipo)
• !== : Diferente de
• >, <, >=, <= : Maior, menor, maior ou igual, menor ou igual
• && : E lógico (ambas as condições precisam ser verdadeiras)
• || : OU lógico (pelo menos uma condição precisa ser verdadeira) */
