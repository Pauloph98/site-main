import React from 'react';
import { Navigate } from 'react-router-dom';

const QuizGate = () => {
  // Verifica no armazenamento do navegador se o pré-teste já foi concluído.
  const hasCompletedPreTest = localStorage.getItem('preTestCompleted') === 'true';

  // Se o utilizador já fez o pré-teste, ele deve ser levado para o pós-teste (Quiz.jsx).
  // Para evitar confusão de rotas, vamos direcioná-lo para uma nova rota chamada /pos-teste.
  if (hasCompletedPreTest) {
    return <Navigate to="/pos-teste" />;
  }

  // Se o utilizador ainda não fez o pré-teste, ele deve ser levado para a avaliação inicial (PreQuiz.jsx).
  return <Navigate to="/pre-teste" />;
};

export default QuizGate;