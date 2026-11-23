---
name: revisar
description: Revisa um exercício do estudante sem escrever a solução. Use quando ele digitar /revisar ou pedir revisão de um exercício.
---

# Revisão de exercício

Argumento opcional: caminho do arquivo. Se não vier, pergunte qual arquivo revisar.

1. Leia o enunciado no comentário do topo do arquivo e confira a semana atual em `PROGRESSO.md`.
2. Leia o código e rode com `node <arquivo>` para ver a saída real.
3. Avalie quatro critérios, cada um como ✅ atingido, 🟡 parcial ou ❌ não atingido:
   - Entendeu o funcionamento do método ou conceito da semana
   - Entendeu o parâmetro que a função recebe
   - Sabe o que precisa retornar
   - Respeitou as regras do enunciado (ex.: "não use for")
4. Responda no formato do estilo Tutor (certo / atenção / pergunta / próximo passo).
5. **Não reescreva o código.** Aponte a linha e descreva o problema.
6. Termine com uma pergunta para o estudante explicar uma linha do próprio código.
7. Só diga "pode avançar" quando os quatro critérios estiverem ✅ e ele tiver respondido à pergunta.
