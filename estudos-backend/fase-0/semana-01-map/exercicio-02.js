/*
 * Exercício 02 — Preços com desconto
 *
 * Uma loja vai dar 10% de desconto em todos os produtos.
 *
 * 1. Criar uma constante chamada precosComDesconto.
 * 2. Utilizar o método map().
 * 3. Para cada produto, retornar o preço já com 10% de desconto.
 * 4. Exibir o resultado com console.log().
 * 5. Exibir também o array produtos e conferir que ele NÃO mudou.
 *
 * Regras: não usar for, não usar filter(), não alterar o array produtos.
 *
 * Saída esperada: [ 90, 45, 18, 225 ] e depois o array produtos original.
 */

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Mousepad", preco: 20 },
  { nome: "Monitor", preco: 250 },
];

// Sua solução:
//A sua linha 27 é do tipo A. Ela só lê o produto.preco e calcula um número novo, sem usar = para guardar nada no objeto.

const precosComDesconto = produtos.map(function(produto){
  return produto.preco * 0.9;
})

console.log(precosComDesconto);
console.log(produtos);