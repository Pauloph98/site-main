import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

const TutorialViewer = ({ tutorial }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  if (!tutorial) return null;

  const step = tutorial.steps[currentStep];
  const isStepCompleted = completedSteps.includes(currentStep);

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const handleNextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getProgress = () => {
    return ((currentStep + 1) / tutorial.steps.length) * 100;
  };

  return (
    <div className="mt-6 border-t-2 pt-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{tutorial.title}</h3>
      <div className="mb-6">
        <Progress value={getProgress()} className="w-full h-3" />
        <p className="text-sm text-gray-600 mt-2">Passo {currentStep + 1} de {tutorial.steps.length}</p>
      </div>

      <Card className="mb-8 shadow-md">
        <CardHeader>
            <CardTitle className="flex items-center justify-between">
                <span>{step.title}</span>
                {isStepCompleted && <CheckCircle className="h-6 w-6 text-green-600" />}
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <p className="text-lg text-gray-700">{step.content}</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">📋 Passo a Passo:</h4>
                <div className="space-y-2">
                    {step.details.map((detail, index) => (
                        <div key={index} className="text-blue-700">{detail}</div>
                    ))}
                </div>
            </div>
            {step.tip && <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"><p className="text-yellow-800 font-medium">{step.tip}</p></div>}
            <div className="flex items-center justify-center pt-4">
                <Button onClick={handleStepComplete} variant={isStepCompleted ? "secondary" : "default"} disabled={isStepCompleted}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {isStepCompleted ? 'Passo Concluído' : 'Marcar como Concluído'}
                </Button>
            </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button onClick={handlePreviousStep} variant="outline" disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Passo Anterior
        </Button>
        <Button onClick={handleNextStep} disabled={currentStep === tutorial.steps.length - 1}>
            Próximo Passo <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TutorialViewer;