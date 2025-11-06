import React, { useState } from 'react';
import { AlertTriangle, Shield, Users, Play, CheckCircle, XCircle, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const iconMap = {
  'phishing': AlertTriangle,
  'malware': Shield,
  'social': Users,
  'passwords': Shield,
  'protection': Shield,
  'backup': Shield
};

const colorMap = {
  'phishing': { text: 'text-red-600', bg: 'bg-red-50 border-red-200' },
  'malware': { text: 'text-orange-600', bg: 'bg-orange-50 border-orange-200' },
  'social': { text: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
  'passwords': { text: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  'protection': { text: 'text-green-600', bg: 'bg-green-50 border-green-200' },
  'backup': { text: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' }
};

const SimulationViewer = ({ simulation, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoices, setUserChoices] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const IconComponent = iconMap[simulation.category] || Shield;
  const colors = colorMap[simulation.category] || colorMap.protection;

  const handleChoiceSelect = (choice) => {
    const newChoices = [...userChoices];
    newChoices[currentStep] = choice;
    setUserChoices(newChoices);

    setTimeout(() => {
      if (currentStep < simulation.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setUserChoices([]);
    setShowResult(false);
  };

  const calculateScore = () => {
    if (!simulation || !userChoices.length) return 0;
    const correctAnswers = userChoices.filter((choice, index) => {
      return simulation.steps[index].options.find(opt => opt.id === choice.id)?.isCorrect;
    }).length;
    return Math.round((correctAnswers / simulation.steps.length) * 100);
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">Simulação Concluída!</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="text-center space-y-6">
          <div className="text-6xl font-bold text-blue-600">{score}%</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {score >= 80 ? 'Excelente!' : score >= 60 ? 'Bom trabalho!' : 'Continue praticando!'}
            </h3>
            <p className="text-gray-600">
              {score >= 80 
                ? 'Você demonstrou excelente conhecimento em segurança digital!' 
                : score >= 60 
                ? 'Você está no caminho certo. Continue praticando com mais simulações.' 
                : 'Não desanime! A prática leva à perfeição. Que tal tentar novamente?'}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRestart} variant="outline">
              <Play className="mr-2 h-4 w-4" />
              Tentar Novamente
            </Button>
            <Button onClick={onClose}>
              Voltar ao Conteúdo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!showResult) {
    const step = simulation.steps[currentStep];
    return (
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <IconComponent className={`h-8 w-8 ${colors.text}`} />
            <div>
              <h2 className="text-2xl font-bold">{simulation.title}</h2>
              <Badge variant="secondary">{simulation.difficulty}</Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-6">
          <Progress value={((currentStep + 1) / simulation.steps.length) * 100} className="w-full" />
          <p className="text-sm text-gray-600 mt-2">
            Passo {currentStep + 1} de {simulation.steps.length}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{step.question}</CardTitle>
          </CardHeader>
          <CardContent>
            {step.scenario && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                {step.scenario.from && (
                  <div className="mb-2 break-words"><strong>De:</strong> {step.scenario.from}</div>
                )}
                {step.scenario.subject && (
                  <div className="mb-2 break-words"><strong>Assunto:</strong> {step.scenario.subject}</div>
                )}
                {step.scenario.body && (
                  <div className="mb-2">
                    <strong>Mensagem:</strong>
                    <div className="mt-2 p-3 bg-white rounded border whitespace-pre-wrap break-words">{step.scenario.body}</div>
                  </div>
                )}
                {step.scenario.description && (
                  <p className="text-gray-700 break-words">{step.scenario.description}</p>
                )}
              </div>
            )}
            
            <div className="space-y-3">
              {step.options.map((option) => {
                const isSelected = userChoices[currentStep]?.id === option.id;
                const showFeedback = isSelected;
                return (
                  <Button
                    key={option.id}
                    variant={isSelected ? (option.isCorrect ? "default" : "destructive") : "outline"}
                    className={`w-full justify-start p-4 h-auto text-left whitespace-normal break-words ${
                      showFeedback 
                        ? (option.isCorrect 
                          ? "bg-green-50 border-green-500 text-green-800 hover:bg-green-50" 
                          : "bg-red-50 border-red-500 text-red-800 hover:bg-red-50") 
                        : ""
                    }`}
                    onClick={() => !userChoices[currentStep] && handleChoiceSelect(option)}
                    disabled={!!userChoices[currentStep]}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      {showFeedback && (
                        option.isCorrect 
                          ? <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" /> 
                          : <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      )}
                      <span className="block flex-1">{option.text}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
            
            {userChoices[currentStep] && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Explicação:</h4>
                <p className="text-blue-700">{step.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default SimulationViewer;