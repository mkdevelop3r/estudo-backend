/*
 * Exercício 02 — Conta da lanchonete
 *
 * Uma lanchonete quer saber o valor total da conta de uma mesa.
 *
 * Novidade: agora cada item tem PREÇO e QUANTIDADE.
 * Não basta somar os preços: cada item precisa entrar na conta
 * já multiplicado pela quantidade que foi pedida.
 *
 * 1. Criar uma constante chamada totalDaConta.
 * 2. Utilizar o método reduce() com valor inicial.
 * 3. Somar, para cada item, o preço multiplicado pela quantidade.
 * 4. Exibir o resultado com console.log().
 *
 * Regras: não usar for, não usar map(), não usar filter(),
 *         não usar += , não escrever o 88 na mão — ele precisa ser calculado.
 *
 * Saída esperada:
 * 88
 *
 * Antes de codar, faça a conta no papel: quanto o acumulador vale
 * depois de cada volta?
 */

const pedido = [
  { nome: "Hambúrguer", preco: 20, quantidade: 2 },
  { nome: "Refrigerante", preco: 6, quantidade: 3 },
  { nome: "Batata frita", preco: 12, quantidade: 1 },
  { nome: "Sorvete", preco: 9, quantidade: 2 },
];

// Sua solução:

const total_DaConta = pedido.reduce(function(acumalador,pedido_cliente){
  return pedido_cliente.preco * pedido_cliente.quantidade + acumalador
},0)

console.log(total_DaConta)