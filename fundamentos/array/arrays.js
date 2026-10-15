const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); // length é uma propriedade do array que relata o número de elementos presentes no array.

valores.push({ id: 3 }, false, null, "teste"); // push adiciona elementos no final do array.
console.log(valores);

console.log(valores.pop()); // pop remove o último elemento do array e retorna ele.
delete valores[0];
console.log(valores);

console.log(typeof valores);
