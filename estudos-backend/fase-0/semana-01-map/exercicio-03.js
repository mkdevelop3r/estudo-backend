/*
 * Exercício 03 — Lista de chamada
 *
 * O professor quer imprimir uma lista numerada com o nome e a nota de cada aluno.
 *
 * Novidade: a função que você passa para o map() pode receber DOIS parâmetros.
 *   - o 1º é o item da vez (como você já usou);
 *   - o 2º é a POSIÇÃO desse item no array (começa em 0).
 *
 * 1. Criar uma constante chamada listaDeChamada.
 * 2. Utilizar o método map() com os dois parâmetros.
 * 3. Para cada aluno, retornar um texto no formato:  "1. Ana - nota 8"
 *    (a numeração deve começar em 1, não em 0).
 * 4. Exibir o resultado com console.log().
 *
 * Regras: não usar for, não usar filter(), não escrever os números 1, 2, 3, 4
 *         na mão — eles precisam vir da posição.
 *
 * Saída esperada:
 * [ '1. Ana - nota 8', '2. Bruno - nota 6.5', '3. Carla - nota 9', '4. Diego - nota 7' ]
 */

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 6.5 },
  { nome: "Carla", nota: 9 },
  { nome: "Diego", nota: 7 },
];

// Sua solução:

const listaDeChamada = alunos.map(function(aluno,posicao){
  return posicao[0]
});

console.log(listaDeChamada)
