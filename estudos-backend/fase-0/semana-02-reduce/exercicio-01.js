/*
 * Exercício 01 — Total do carrinho
 *
 * Uma loja quer saber quanto o cliente vai pagar no total.
 *
 * Novidade: o reduce() percorre o array e vai JUNTANDO tudo em UM valor só.
 * A função que você passa para ele recebe dois parâmetros:
 *   - o 1º é o ACUMULADOR: o resultado que já foi juntado até agora;
 *   - o 2º é o item da vez (como no map).
 * Depois da função, o reduce() recebe um 2º argumento: o VALOR INICIAL
 * do acumulador (com o que ele começa antes da primeira volta).
 *
 * 1. Criar uma constante chamada total.
 * 2. Utilizar o método reduce().
 * 3. Somar o preço de todos os produtos.
 * 4. Exibir o resultado com console.log().
 *
 * Regras: não usar for, não usar map(), não usar filter(),
 *         não escrever o 150 na mão — ele precisa ser calculado.
 *
 * Saída esperada:
 * 150
 */

const carrinho = [
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 70 },
  { nome: "Caneta", preco: 15 },
  { nome: "Estojo", preco: 40 },
];

// Sua solução:

const total = carrinho.reduce(function(acumulador,material){
  return  material.preco + acumulador
},0)

/*
Por que o 0 vai aí
O reduce recebe duas coisas, dentro dos mesmos parênteses:

carrinho.reduce( function(...){...} ,  0 )
                 └── 1ª: o que fazer ──┘   └ 2ª: com quanto começar
                     em cada volta


*/

console.log(total);