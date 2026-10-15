let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);

// console.log(valor.toString()); // Erro! Não é possível chamar métodos em null

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto.preco);
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);
