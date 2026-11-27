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

const estoque = [
  { produto: "Teclado", preco: 100, quantidade: 3 },
  { produto: "Mouse", preco: 50, quantidade: 5 },
  { produto: "Monitor", preco: 800, quantidade: 2 },
  { produto: "Headset", preco: 150, quantidade: 4 },
];

// Sua solução:

const resumo = estoque.reduce(function(acumulador/* o que já foi juntado até agora*/,produto/*um produto, o da vez.*/)

{ //estoque.reduce(...): percorre o array estoque, um produto por vez, e junta tudo num resultado só. //a função que roda a cada volta. Ela recebe dois parâmetros:


  return {unidades: acumulador.unidades + produto.quantidade, valorTotal: produto.preco * produto.quantidade + acumulador.valorTotal}

  /*A cada volta, a função devolve um objeto novo:

unidades = o que já tinha + a quantidade deste produto
valorTotal = o que já tinha + (preço × quantidade deste produto) */

},{unidades: 0, valorTotal: 0})//o valor inicial  

// A diferença é que aqui ele é um objeto, porque o resultado tem duas informações.

console.log(resumo)


/*Parte 5: as voltas, uma a uma
      Volta	acumulador chega como	produto	                  return devolve
1	{unidades: 0, valorTotal: 0}	Teclado (100 × 3)	{unidades: 3, valorTotal: 300}
2	{unidades: 3, valorTotal: 300}	Mouse (50 × 5)	{unidades: 8, valorTotal: 550}
3	{unidades: 8, valorTotal: 550}	Monitor (800 × 2)	{unidades: 10, valorTotal: 2150}
4	{unidades: 10, valorTotal: 2150}	Headset (150 × 4)	{unidades: 14, valorTotal: 2750}
   */