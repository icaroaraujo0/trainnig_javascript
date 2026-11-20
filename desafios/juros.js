/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  return capitalInicial + capitalInicial * taxaJuros * tempoAplicacao;
}

function jurosCompostos(capInicial, taxaDeJuros, Tempo) {
  return capInicial * (1 + taxaDeJuros) ** Tempo;
}

console.log(jurosSimples(1000, 0.3, 5));
console.log(jurosCompostos(1000, 0.3, 5));
