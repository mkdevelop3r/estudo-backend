---
name: ler-codigo
description: Exercício de leitura de código — o Claude mostra um trecho curto e o estudante explica o que ele faz. Use quando ele digitar /ler-codigo.
---

# Leitura de código

Objetivo: treinar a habilidade de entender código escrito por outra pessoa ou por uma IA.

1. Leia a semana atual em `PROGRESSO.md`. Use só conteúdos já concluídos.
2. Escreva **na conversa** (nunca em arquivo) um trecho de 8 a 25 linhas com um
   problema realista: dados de funcionários, pedidos, estoque etc.
   - Nunca use o enunciado de um exercício pendente do estudante.
   - Às vezes (cerca de 1 vez em 3) coloque um bug sutil, mas não avise.
3. Faça três perguntas, uma de cada vez, esperando a resposta:
   1. "Qual é a saída deste código?" (sem rodar)
   2. "Explique com suas palavras o que acontece na linha X."
   3. "Tem algum problema ou algo que você mudaria? Por quê?"
4. Depois de cada resposta, diga se está certa e por quê. Se estiver errada, não dê a
   resposta logo de cara: faça uma pergunta que o leve a perceber o erro.
5. No fim, rode o código com `node -e` para confirmar a saída e dê uma nota de 0 a 3.
