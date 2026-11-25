/*
 * Exercício 03 — Resumo do estoque
 *
 * Uma loja de informática quer um resumo do estoque com DUAS informações:
 *   - quantas unidades existem no total;
 *   - quanto vale o estoque inteiro (preço × quantidade de cada produto).
 *
 * Novidade: até agora o acumulador era um NÚMERO. Aqui ele vai ser um OBJETO,
 * com duas propriedades: unidades e valorTotal.
 * Pense no valor inicial: se o acumulador é um objeto, com o que ele começa?
 *
 * 1. Criar uma constante chamada resumo.
 * 2. Utilizar o método reduce() UMA única vez (não vale fazer dois reduce).
 * 3. Em cada volta, retornar um objeto com as duas propriedades atualizadas.
 * 4. Exibir o resultado com console.log().
 *
 * Regras: não usar for, não usar map(), não usar filter(), não usar += ,
 *         não escrever 14 nem 2750 na mão — eles precisam ser calculados.
 *
 * Saída esperada:
 * { unidades: 14, valorTotal: 2750 }
 *
 * Antes de codar, faça a tabela das voltas no papel:
 * como fica o acumulador (o objeto inteiro) depois de cada volta?
 */

const { access } = require("node:fs");

const estoque = [
  { produto: "Teclado", preco: 100, quantidade: 3 },
  { produto: "Mouse", preco: 50, quantidade: 5 },
  { produto: "Monitor", preco: 800, quantidade: 2 },
  { produto: "Headset", preco: 150, quantidade: 4 },
];

// Sua solução:

const auditoria_Estoque = estoque.reduce(function(total_preco,quantidade_total,acumulador){
  return total_preco.preco + quantidade_total.quantidade +  acumulador
})

console.log(auditoria_Estoque)