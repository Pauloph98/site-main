import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, BarChart3, Trophy, Brain, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { useNavigate } from 'react-router-dom';

export const PreTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  // Perguntas do pré-teste para avaliar conhecimento inicial
  const preTestQuestions = [
    {
      id: 1,
      category: 'Phishing',
      question: 'Como você identifica um e-mail de phishing (golpe)?',
      options: [
        { id: 'a', text: 'Não sei identificar e-mails falsos', points: 0 },
        { id: 'b', text: 'Só desconfio se a ortografia estiver errada', points: 1 },
        { id: 'c', text: 'Verifico o remetente e nunca clico em links suspeitos', points: 3 },
        { id: 'd', text: 'Sempre confirmo diretamente com a empresa antes de agir', points: 4 }
      ]
    },
    {
      id: 2,
      category: 'Senhas',
      question: 'Como você cria suas senhas?',
      options: [
        { id: 'a', text: 'Uso a mesma senha simples para tudo (ex: 123456)', points: 0 },
        { id: 'b', text: 'Uso meu nome ou data de nascimento', points: 1 },
        { id: 'c', text: 'Uso senhas diferentes, mas simples', points: 2 },
        { id: 'd', text: 'Uso senhas complexas e diferentes para cada conta', points: 4 }
      ]
    },
    {
      id: 3,
      category: 'Wi-Fi Público',
      question: 'O que você faz ao usar Wi-Fi público?',
      options: [
        { id: 'a', text: 'Uso normalmente para tudo, incluindo banco', points: 0 },
        { id: 'b', text: 'Evito apenas sites de banco', points: 1 },
        { id: 'c', text: 'Só navego em sites seguros (https)', points: 2 },
        { id: 'd', text: 'Prefiro usar meus dados móveis para coisas importantes', points: 4 }
      ]
    },
    {
      id: 4,
      category: 'Downloads',
      question: 'Onde você baixa aplicativos para o celular?',
      options: [
        { id: 'a', text: 'De qualquer link que me mandam', points: 0 },
        { id: 'b', text: 'De sites de download que acho no Google', points: 1 },
        { id: 'c', text: 'Só da Play Store/App Store, mas não verifico avaliações', points: 2 },
        { id: 'd', text: 'Só das lojas oficiais e sempre leio avaliações antes', points: 4 }
      ]
    },
    {
      id: 5,
      category: 'Backup',
      question: 'Como você protege seus arquivos importantes?',
      options: [
        { id: 'a', text: 'Não faço backup, confio que nada vai acontecer', points: 0 },
        { id: 'b', text: 'Às vezes copio para um pendrive', points: 1 },
        { id: 'c', text: 'Faço backup regular em HD externo', points: 2 },
        { id: 'd', text: 'Uso backup automático na nuvem e HD externo', points: 4 }
      ]
    },
    {
      id: 6,
      category: 'Informações Pessoais',
      question: 'O que você compartilha nas redes sociais?',
      options: [
        { id: 'a', text: 'Tudo público: fotos, localização, telefone', points: 0 },
        { id: 'b', text: 'Compartilho bastante, mas não dados bancários', points: 1 },
        { id: 'c', text: 'Só com amigos, mas ainda compartilho localização', points: 2 },
        { id: 'd', text: 'Muito cuidadoso, só o essencial e sempre privado', points: 4 }
      ]
    },
    {
      id: 7,
      category: 'Atualizações',
      question: 'Como você lida com atualizações do sistema?',
      options: [
        { id: 'a', text: 'Nunca atualizo, tenho medo de dar problema', points: 0 },
        { id: 'b', text: 'Só atualizo quando para de funcionar', points: 1 },
        { id: 'c', text: 'Atualizo às vezes, quando lembro', points: 2 },
        { id: 'd', text: 'Sempre mantenho tudo atualizado automaticamente', points: 4 }
      ]
    },
    {
      id: 8,
      category: 'Golpes por Telefone',
      question: 'Se alguém liga dizendo ser do suporte técnico, você:',
      options: [
        { id: 'a', text: 'Sigo todas as instruções imediatamente', points: 0 },
        { id: 'b', text: 'Fico na dúvida mas geralmente ajudo', points: 1 },
        { id: 'c', text: 'Peço para ligar depois e pesquiso sobre a empresa', points: 3 },
        { id: 'd', text: 'Desligo imediatamente, sei que é golpe', points: 4 }
      ]
    },
    {
      id: 9,
      category: 'Antivírus',
      question: 'Como está a proteção do seu computador?',
      options: [
        { id: 'a', text: 'Não tenho antivírus instalado', points: 0 },
        { id: 'b', text: 'Tenho antivírus mas nunca verifico', points: 1 },
        { id: 'c', text: 'Tenho antivírus e faço verificação às vezes', points: 2 },
        { id: 'd', text: 'Antivírus sempre atualizado e verificação automática', points: 4 }
      ]
    },
    {
      id: 10,
      category: 'Links Suspeitos',
      question: 'Quando recebe um link interessante no WhatsApp, você:',
      options: [
        { id: 'a', text: 'Clico imediatamente se parecer interessante', points: 0 },
        { id: 'b', text: 'Clico mas fico atento a sinais estranhos', points: 1 },
        { id: 'c', text: 'Pergunto para quem enviou se é confiável', points: 2 },
        { id: 'd', text: 'Pesquiso no Google sobre o link antes de clicar', points: 4 }
      ]
    }
  ];

  useEffect(() => {
    // Verificar se já fez o pré-teste
    const existingPreTest = localStorage.getItem('preTestResults');
    const hasCompletedPreTest = localStorage.getItem('preTestCompleted');
    
    if (hasCompletedPreTest && existingPreTest) {
      const results = JSON.parse(existingPreTest);
      setUserProfile(results.profile);
      setTestCompleted(true);
    }
  }, []);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswers({
        ...answers,
        [currentQuestion]: selectedAnswer
      });
      
      if (currentQuestion < preTestQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        calculateResults();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const calculateResults = () => {
    const totalPoints = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
    const maxPoints = preTestQuestions.length * 4; // 4 pontos por pergunta
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    
    let level, description, recommendations;
    
    if (percentage >= 80) {
      level = 'Avançado';
      description = 'Você já tem excelente conhecimento sobre segurança digital!';
      recommendations = [
        'Continue praticando com nossos cenários avançados',
        'Ajude outros familiares a aprender',
        'Mantenha-se atualizado sobre novas ameaças'
      ];
    } else if (percentage >= 60) {
      level = 'Intermediário';  
      description = 'Você tem uma boa base, mas ainda pode melhorar!';
      recommendations = [
        'Foque nas áreas onde teve menor pontuação',
        'Pratique com nossas simulações',
        'Revise o conteúdo sobre backup e senhas'
      ];
    } else if (percentage >= 40) {
      level = 'Básico';
      description = 'Você conhece o básico, mas precisa aprender mais para se proteger melhor.';
      recommendations = [
        'Comece pelo conteúdo educativo básico',
        'Pratique bastante com as simulações',
        'Não se preocupe, vamos te ajudar a evoluir!'
      ];
    } else {
      level = 'Iniciante';
      description = 'Não se preocupe! Todo mundo começa do zero. Vamos aprender juntos!';
      recommendations = [
        'Dedique tempo ao conteúdo educativo',
        'Comece pelas simulações mais fáceis',
        'Peça ajuda a familiares quando necessário',
        'O importante é começar a se proteger!'
      ];
    }

    const results = {
      totalPoints,
      maxPoints, 
      percentage,
      level,
      description,
      recommendations,
      answers: answers,
      date: new Date().toISOString(),
      categories: calculateCategoryScores()
    };

    const profile = {
      level,
      percentage,
      weakAreas: getWeakAreas(),
      strengths: getStrengths(),
      testDate: new Date().toISOString()
    };

    // Salvar resultados no localStorage
    localStorage.setItem('preTestResults', JSON.stringify(results));
    localStorage.setItem('userProfile', JSON.stringify(profile));
    localStorage.setItem('preTestCompleted', 'true');
    
    setUserProfile(profile);
    setShowResult(true);
  };

  const calculateCategoryScores = () => {
    const categories = {};
    
    preTestQuestions.forEach((question, index) => {
      const category = question.category;
      const answer = answers[index];
      
      if (!categories[category]) {
        categories[category] = { total: 0, max: 0, count: 0 };
      }
      
      categories[category].total += answer ? answer.points : 0;
      categories[category].max += 4;
      categories[category].count += 1;
    });

    // Calcular porcentagens
    Object.keys(categories).forEach(category => {
      const cat = categories[category];
      cat.percentage = Math.round((cat.total / cat.max) * 100);
    });

    return categories;
  };

  const getWeakAreas = () => {
    const categories = calculateCategoryScores();
    return Object.entries(categories)
      .filter(([_, data]) => data.percentage < 50)
      .map(([name, _]) => name)
      .slice(0, 3);
  };

  const getStrengths = () => {
    const categories = calculateCategoryScores();
    return Object.entries(categories)
      .filter(([_, data]) => data.percentage >= 70)
      .map(([name, _]) => name)
      .slice(0, 3);
  };

  const handleStartLearning = () => {
    navigate('/conteudo');
  };

  const handleRetakeTest = () => {
    // Limpar dados do pré-teste
    localStorage.removeItem('preTestResults');
    localStorage.removeItem('preTestCompleted');
    setTestCompleted(false);
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAnswer(null);
    setUserProfile(null);
  };

  // Se já completou o pré-teste, mostrar dashboard
  if (testCompleted && userProfile && !showResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-center">
                <Trophy className="h-6 w-6 text-yellow-600" />
                <span>Seu Perfil de Conhecimento</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Nível {userProfile.level}
                </div>
                <div className="text-2xl text-gray-600">
                  {userProfile.percentage}% de conhecimento
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userProfile.strengths.length > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">💪 Seus Pontos Fortes:</h4>
                    <ul className="space-y-1">
                      {userProfile.strengths.map((strength, index) => (
                        <li key={index} className="text-green-700">• {strength}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {userProfile.weakAreas.length > 0 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">📚 Áreas para Melhorar:</h4>
                    <ul className="space-y-1">
                      {userProfile.weakAreas.map((area, index) => (
                        <li key={index} className="text-orange-700">• {area}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button onClick={handleStartLearning} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Brain className="mr-2 h-5 w-5" />
                  Começar Aprendizado
                </Button>
                <Button onClick={handleRetakeTest} variant="outline" size="lg">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Refazer Avaliação
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Mostrar resultados após completar o teste
  if (showResult) {
    const results = JSON.parse(localStorage.getItem('preTestResults'));
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                🎯 Resultado da Sua Avaliação Inicial
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-blue-600">
                {results.percentage}%
              </div>
              
              <div>
                <Badge className="text-lg px-4 py-2 mb-4">
                  Nível: {results.level}
                </Badge>
                <p className="text-xl text-gray-700">{results.description}</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-4">📋 Recomendações Personalizadas:</h3>
                <ul className="space-y-2 text-blue-700">
                  {results.recommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 mb-2">💡 Importante:</h3>
                <p className="text-yellow-700">
                  Esta avaliação inicial nos ajuda a personalizar seu aprendizado. 
                  Após estudar o conteúdo, você poderá fazer o quiz final para ver sua evolução!
                </p>
              </div>

              <Button onClick={handleStartLearning} size="lg" className="bg-green-600 hover:bg-green-700">
                <ArrowRight className="mr-2 h-5 w-5" />
                Começar Meu Aprendizado Personalizado
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Vista das perguntas do pré-teste
  const question = preTestQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Avaliação Inicial de Conhecimento
          </h1>
          <p className="text-xl text-gray-600">
            Vamos descobrir seu nível atual para personalizar seu aprendizado
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Pergunta {currentQuestion + 1} de {preTestQuestions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((currentQuestion + 1) / preTestQuestions.length) * 100)}%
            </span>
          </div>
          <Progress 
            value={((currentQuestion + 1) / preTestQuestions.length) * 100} 
            className="w-full h-3"
          />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <Badge variant="secondary">
                {question.category}
              </Badge>
            </div>
            <CardTitle className="text-xl">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = selectedAnswer?.id === option.id;
                
                return (
                  <Button
                    key={option.id}
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full justify-start p-4 h-auto text-left ${
                      isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        isSelected 
                          ? "bg-white border-white" 
                          : "border-gray-300"
                      }`}>
                        {isSelected && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full m-0.5"></div>
                        )}
                      </div>
                      <span className="flex-1">{option.text}</span>
                    </div>
                  </Button>
                );
              })}
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                💡 Seja honesto em suas respostas! Isso nos ajuda a criar um plano de aprendizado 
                personalizado para você. Não há respostas certas ou erradas aqui.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            onClick={handlePreviousQuestion}
            variant="outline"
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Anterior</span>
          </Button>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
          >
            <span>{currentQuestion === preTestQuestions.length - 1 ? 'Ver Resultado' : 'Próxima'}</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔒 Seus dados ficam salvos apenas no seu navegador e são usados só para personalizar seu aprendizado
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreTest;