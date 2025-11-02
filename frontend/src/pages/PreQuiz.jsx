import React, { useState } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import mockData from '../mock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const PreQuiz = () => {
  const { quizQuestions } = mockData;
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAgeRange, setUserAgeRange] = useState('');
  const [consentAccepted, setConsentAccepted] = useState(false);

  const handleStartQuiz = (e) => {
    e.preventDefault();
    if (userName && userAgeRange && consentAccepted) {
      localStorage.setItem('userInfo', JSON.stringify({ name: userName, ageRange: userAgeRange }));
      setQuizStarted(true);
    }
  };

  const handleSelectAndNext = (answer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = { questionId: quizQuestions[currentQuestion].id, selectedOption: answer.id, isCorrect: answer.isCorrect };
    setUserAnswers(newUserAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      sendResultsToBackend(newUserAnswers);
    }
  };

  const sendResultsToBackend = async (finalAnswers) => {
    const finalScore = finalAnswers.filter(a => a?.isCorrect).length;
    localStorage.setItem('preTestScore', finalScore);
    localStorage.setItem('preTestCompleted', 'true');
    try {
      await axios.post(`${BACKEND_URL}/api/quiz-results`, { user_name: userName, user_age_range: userAgeRange, score: finalScore, total_questions: quizQuestions.length, answers: finalAnswers.filter(a => a !== null), test_type: "pre-teste" });
    } catch (error) { console.error("Erro ao enviar resultados do pré-teste:", error); }
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full">
          <CardHeader><CardTitle className="text-center text-3xl font-bold text-gray-900">Avaliação Inicial</CardTitle><p className="mt-2 text-center text-sm text-gray-600">Por favor, preencha para começar.</p></CardHeader>
          <CardContent>
            <form onSubmit={handleStartQuiz} className="space-y-6">
              <div className="space-y-2"><Label htmlFor="name">Seu Nome (ou apelido)</Label><Input id="name" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required /></div>
              <div className="space-y-2"><Label htmlFor="age-range">Faixa Etária</Label><Select onValueChange={setUserAgeRange} value={userAgeRange}><SelectTrigger id="age-range"><SelectValue placeholder="Selecione uma opção" /></SelectTrigger><SelectContent><SelectItem value="-50">-50 anos</SelectItem><SelectItem value="50-59">50-59 anos</SelectItem><SelectItem value="60-69">60-69 anos</SelectItem><SelectItem value="70-79">70-79 anos</SelectItem><SelectItem value="80+">80+ anos</SelectItem></SelectContent></Select></div>
              
              <div className="space-y-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="consent" 
                    checked={consentAccepted}
                    onCheckedChange={setConsentAccepted}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    Li e aceito o <a href="/termos" target="_blank" className="text-blue-600 hover:underline font-semibold">Termo de Consentimento</a> e a <a href="/privacidade" target="_blank" className="text-blue-600 hover:underline font-semibold">Política de Privacidade</a>. Concordo que meus dados sejam coletados e utilizados para fins de pesquisa acadêmica (TCC), conforme descrito nos documentos. *
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={!userName || !userAgeRange || !consentAccepted}>Começar Teste<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizCompleted) {
    const score = userAnswers.filter(a => a?.isCorrect).length;
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-lg w-full text-center">
          <CardHeader><Award className="mx-auto h-12 w-12 text-yellow-500" /><CardTitle className="text-3xl font-bold">Pré-Teste Concluído!</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">Obrigado, {userName}! Você acertou:</p>
            <p className="text-6xl font-bold text-blue-600">{score} <span className="text-3xl text-gray-600">de {quizQuestions.length}</span></p>
            <p className="text-md text-gray-800 bg-green-100 p-4 rounded-lg">Agora, o próximo passo é explorar o nosso conteúdo educativo. Depois, faça o quiz final para ver o quanto evoluiu!</p>
            <Button size="lg" onClick={() => navigate('/conteudo')}>Ir para o Conteúdo Educativo<ArrowRight className="ml-2 h-5 w-5" /></Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8"><Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="w-full h-3" /></div>
        <Card>
          <CardHeader><CardTitle className="text-xl text-left">{currentQuestion + 1}. {question.question}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option) => (<Button key={option.id} variant="outline" className="w-full justify-start p-4 h-auto text-left" onClick={() => handleSelectAndNext(option)}>{option.text}</Button>))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreQuiz;