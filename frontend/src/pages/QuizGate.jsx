import React from 'react';
import PreQuiz from './PreQuiz';
import Quiz from './Quiz';

// Este componente agora verifica diretamente o que está guardado
// antes de decidir qual página mostrar.
const QuizGate = () => {
  const preTestFlag = localStorage.getItem('preTestCompleted');

  if (preTestFlag === 'true') {
    // Se o pré-teste já foi feito, mostra o Quiz Final (Pós-Teste).
    return <Quiz />;
  } else {
    // Se não, mostra a página do Pré-Teste.
    return <PreQuiz />;
  }
};

export default QuizGate;