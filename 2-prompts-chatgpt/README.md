# ChatGPT: otimizando a qualidade dos resultados

### 1. Criando os primeiros prompts

Um **prompt nada mais é do que uma instrução** ou uma entrada fornecida a um modelo de linguagem, como o ChatGPT, para orientar sua geração de texto.

É uma forma de solicitar ao modelo que produza uma resposta ou texto relevante com base na informação fornecida. Os prompts desempenham um papel crucial na interação com o modelo, permitindo que os usuários forneçam direcionamentos específicos para as respostas que desejam obter.

Segundo, a [OpenAI](https://openai.com/blog/chatgpt) o ChatGPT possui algumas limitações: 

- Às vezes, o ChatGPT escreve respostas plausíveis, mas incorretas ou sem sentido. Isso ocorre porque o modelo é treinado com base em grandes quantidades de texto da internet, mas nem todas as informações nesses dados são precisas. Portanto, o modelo pode ocasionalmente produzir respostas incorretas ou inventar informações.
- O ChatGPT também é sensível a ajustes nos prompts ou às tentativas da mesma solicitação várias vezes. Por exemplo, podemos escrever algo e o modelo pode afirmar que não sabe a resposta, mas fizermos alguma reformulação no prompt a resposta pode vir de forma correta. Ou se utilizarmos o mesmo prompt várias vezes as respostas podem não ser consistentes. 
- O modelo também pode ser prolixo e usar demais certas frases. Esses problemas surgem de viéses nos dados de treinamento e problemas de super otimização.

Além disso, o ChatGPT tem limitações em sua capacidade de memória e contexto. O modelo leva em consideração apenas uma quantidade limitada de texto anterior ao gerar uma resposta. Isso significa que se a tarefa exigir informações ou referências anteriores específicas, o modelo pode não conseguir acessá-las adequadamente. Isso pode levar a respostas inconsistentes ou que parecem ignorar completamente o histórico da conversa.

Por fim, o modelo pode sofrer com problemas de viés e gerar respostas que podem ser imprecisas e tendenciosas, devido à natureza dos dados de treinamento usados e à maneira como eles foram coletados. 

Por isso, é fundamental que ao utilizar o ChatGPT, sejam adotadas estratégias que maximizem o potencial do modelo e garantam resultados mais precisos e confiáveis. 

#### Estratégias para criar prompts

- Colocar um título;
- Sugerir começo da frase;
- Fornecer exemplos;

<br>

### 2. Melhorando a confiabilidade dos resultados

Existem algumas dicas de boas práticas que podem te ajudar a melhorar a escrita dos prompts para o ChatGPT. Aqui estão algumas delas:

- **Use delimitadores para indicar claramente partes distintas do prompt:**

  Os delimitadores podem ajudar a escrever prompts melhores no ChatGPT, porque fornecem uma estrutura clara para o modelo entender o que está sendo solicitado e gerar respostas mais precisas e relevantes.

  O seguintes delimitadores normalmente são utilizados:

  1) `"""` (três aspas duplas): O uso de três aspas duplas é comum em várias linguagens de programação e serve para indicar um texto que não deve ser processado ou interpretado. No ChatGPT, isso pode ser usado para separar o texto da instrução. Isso ajuda a deixar a intenção da pergunta ou tópico mais clara para o modelo, facilitando a geração de uma resposta.

     Exemplo:

     ```
     Texto:
     
     “””Python é uma linguagem de propósito geral de alto nível, multiparadigma, suporta o paradigma orientado a objetos, imperativo, funcional e procedural. Possui tipagem dinâmica e uma de suas principais características é permitir a fácil leitura do código e exigir poucas linhas de código se comparado ao mesmo programa em outras linguagens. “””
     
     Título:
     ```

  2) *```* (três crases): As três crases são usadas para indicar que o conteúdo entre elas é tratado como um bloco de código. 

     Exemplo: 

     ```
     Explique o código abaixo:
     
     for i in range(5):
        print(i)
     ```

  3) `_____` (sublinhados): Os sublinhados podem ser usados para gerar um resultado no formato de formulário. Isso é interessante, caso você queira automatizar o resultado de um prompt e não deseja que o resultado seja em código, apenas em texto.

     A seguir temos um prompt que utiliza esse recurso:

     ```
     Estou lançando uma campanha de dia das mães de um kit de beleza. O vídeo no youtube precisa de título, descrição, ideia de thumbnail e texto de thumbnail. Sugira a duração em minutos e em quais canais posso fazer parceria para divulgar a campanha. Descreva também os pontos fortes dela. Devolva o resultado no formato abaixo:
     
     Título: _____
     Descrição: _____
     Ideia de thumbnail: _____
     Texto de thumbnail: _____
     Duração: _____
     Canais: _____, _____,_____
     Pontos fortes: _____,_____,_____
     ```

     

- **Use acentos e caracteres especiais:** 

  Se você escrever os prompts em português é interessante usar acentos ou caracteres especiais. Isso pode ajudar o modelo a entender melhor aquilo que você está solicitando.

  <br>

- **Use sinais de pontuação: **

  É legal usar sinais de pontuação:vírgulas, interrogações e pontos finais, para separar as cláusulas e tornar o prompt mais fácil de ler e entender. 

  Por exemplo, "Qual é a diferença entre as linguagens Python e R?" É mais fácil de entender do que "Qual é a diferença entre as linguagens Python e R".

  <br>

- **Use citações:**

  Use aspas para citar trechos de texto relevantes em seu prompt, especialmente se estiver fazendo uma pergunta baseada em uma citação de um texto. Por exemplo:

  ```
  Sobre o que é o livro "Storytelling com Dados" da autora Cole Nussbaumer Knaflic?
  ```

  <br>

- **Tenha clareza e especificidade:** 

  Ao escrever um prompt, é importante ser claro(a) e específico(a) sobre o que você deseja que o ChatGPT faça. Isso ajuda o modelo a entender exatamente o que você está pedindo e a gerar uma resposta mais precisa. Por isso, é importante evitar usar termos vagos ou ambíguos que possam confundir o modelo.

  Por exemplo, em vez de escrever "Me dê informações sobre Python", tente escrever "Como é a sintaxe da linguagem de programação Python?".

  <br>

- **Forneça contexto:**

  Fornecer informações adicionais ou contexto relevante para o ChatGPT pode ajudar o modelo a entender melhor a pergunta e gerar uma resposta mais precisa. Se você estiver fazendo uma pergunta sobre um tópico específico, você pode fornecer algumas informações básicas sobre esse tópico no prompt.

  Por exemplo, se você estiver fazendo uma pergunta sobre um erro em um código Python, forneça alguns detalhes básicos sobre o que é aquele código.

  <br>

- **Evite perguntas complexas:**

  Evite fazer perguntas complexas ou que exijam respostas detalhadas. O ChatGPT funciona melhor quando recebe perguntas simples e diretas. Por isso, tente dividir perguntas complexas em perguntas menores e mais simples.

### 3. Estratégias para textos longos

Podemos escrever prompts para diversas finalidades, tanto para nosso dia-a-dia quanto no ambiente de trabalho. 

