const perguntas = [
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Uma constante que armazena um valor",
        "Um nome simbólico para um valor",
        "Uma função que retorna um valor",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a diferença entre null e undefined?",
      respostas: [
        "null representa a ausência de um valor, enquanto undefined significa que um valor não foi definido",
        "null significa que um valor não foi definido, enquanto undefined representa a ausência de um valor",
        "null e undefined são sinônimos e podem ser usados indiferentemente",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "&",
        "+",
        ".",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma maneira de agrupar trechos de código e reutilizá-los",
        "Um tipo de dado que armazena um valor",
        "Uma estrutura de controle de fluxo",
      ],
      correta: 0,
    },
    {
      pergunta: "Como se declara um array em JavaScript?",
      respostas: [
        "using 'array' keyword",
        "using square brackets []",
        "using curly brackets {}",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um objeto em JavaScript?",
      respostas: [
        "Uma estrutura de dados que armazena pares chave-valor",
        "Um tipo de dado que armazena um valor",
        "Uma maneira de agrupar trechos de código e reutilizá-los",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a diferença entre == e === em JavaScript?",
      respostas: [
        "== compara apenas o valor, enquanto === compara tanto o valor quanto o tipo",
        "== compara tanto o valor quanto o tipo, enquanto === compara apenas o valor",
        "== e === são sinônimos e podem ser usados indiferentemente",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o this em JavaScript?",
      respostas: [
        "Uma palavra-chave que se refere ao objeto global",
        "Uma palavra-chave que se refere ao objeto atual",
        "Uma palavra-chave que é usada para declarar uma função",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o propósito do escopo em JavaScript?",
      respostas: [
        "Definir a visibilade de variáveis e funções em um trecho de código",
        "Definir a ordem de execução de um trecho de código",
        "Definir o tipo de dado de uma variável",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o Hoisting em JavaScript?",
      respostas: [
        "Um mecanismo que move as declarações de variáveis e funções para o topo do escopo",
        "Um mecanismo que move as atribuições de variáveis e funções para o topo do escopo",
        "Um mecanismo que move as declarações de variáveis ​​e funções para o final do escopo",],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  // pra cada item das perguntas
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // pra cada resposta item das repostas
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }