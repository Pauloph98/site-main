import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import mockData from '../mock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Quiz = () => {
    const { quizQuestions } = mockData;
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const [preTestScore, setPreTestScore] = useState(null);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        const storedPreTestScore = localStorage.getItem('preTestScore');
        if (storedUserInfo) setUserInfo(JSON.parse(storedUserInfo));
        if (storedPreTestScore) setPreTestScore(parseInt(storedPreTestScore, 10));
    }, []);

    const handleAnswerSelect = (answer) => {
        if (!showFeedback) setSelectedAnswer(answer);
    };

    const handleConfirmAnswer = () => {
        setShowFeedback(true);
        const isCorrect = selectedAnswer.isCorrect;
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = { questionId: quizQuestions[currentQuestion].id, selectedOption: selectedAnswer.id, isCorrect: isCorrect };
        setUserAnswers(newUserAnswers);
        if (isCorrect) setScore(score + 1);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            setQuizCompleted(true);
            sendResultsToBackend();
        }
    };

    const sendResultsToBackend = async () => {
        const finalScore = userAnswers.filter(a => a?.isCorrect).length;
        try {
            await axios.post(`${BACKEND_URL}/api/quiz-results`, {
                user_name: userInfo?.name || 'anônimo',
                user_age_range: userInfo?.ageRange || 'não informado',
                score: finalScore,
                total_questions: quizQuestions.length,
                answers: userAnswers.filter(a => a !== null),
                test_type: "pos-teste"
            });
        } catch (error) { console.error("Erro ao enviar resultados do pós-teste:", error); }
    };

    const handleRestartFlow = () => {
        // Limpa os dados para permitir que o fluxo recomece do zero
        localStorage.removeItem('userInfo');
        localStorage.removeItem('preTestScore');
        localStorage.removeItem('preTestCompleted');
        // Navega para /quiz, que o QuizGate irá agora direcionar para o PreQuiz
        navigate('/quiz');
    };
    
    // (O resto do código, como a exibição dos resultados e das perguntas, continua igual)
    if (quizCompleted) {
        const percentage = Math.round((score / quizQuestions.length) * 100);
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <Card className="text-center">
                        <CardHeader>
                            <Trophy className="mx-auto h-12 w-12 text-yellow-500" />
                            <CardTitle className="text-3xl">Resultado Final, {userInfo?.name}!</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-around items-center p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-500">Resultado Anterior</p>
                                    <p className="text-4xl font-bold text-gray-600">{preTestScore}/{quizQuestions.length}</p>
                                </div>
                                <ArrowRight className="h-8 w-8 text-green-500" />
                                <div>
                                    <p className="text-sm text-green-600">Resultado Final</p>
                                    <p className="text-5xl font-bold text-green-600">{score}/{quizQuestions.length}</p>
                                </div>
                            </div>
                            <div className="text-2xl text-gray-800">{percentage}% de acertos</div>
                            <div className="text-left space-y-4 pt-6">
                                <h3 className="text-xl font-bold text-center">Revisão Completa</h3>
                                {quizQuestions.map((q, index) => {
                                    const userAnswer = userAnswers[index];
                                    const userChoice = q.options.find(opt => opt.id === userAnswer.selectedOption);
                                    const correctChoice = q.options.find(opt => opt.isCorrect);
                                    return (
                                        <div key={q.id} className={`p-4 rounded-lg border-2 ${userAnswer.isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                                            <p className="font-semibold">{index + 1}. {q.question}</p>
                                            <p className={`mt-2 ${userAnswer.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                                Sua resposta: {userChoice.text} {userAnswer.isCorrect ? <CheckCircle className="inline h-5 w-5"/> : <XCircle className="inline h-5 w-5"/>}
                                            </p>
                                            {!userAnswer.isCorrect && <p className="mt-1 text-green-800">Resposta correta: {correctChoice.text}</p>}
                                            <p className="mt-2 text-sm text-gray-600 bg-gray-100 p-2 rounded">Explicação: {q.explanation}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <Button onClick={handleRestartFlow} size="lg"><RotateCcw className="mr-2 h-5 w-5" />Recomeçar Avaliação</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    const question = quizQuestions[currentQuestion];
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                 <div className="mb-8"><Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="w-full h-3" /></div>
                 <Card>
                    <CardHeader>
                        <Badge variant="secondary" className="w-fit">{question.category}</Badge>
                        <CardTitle className="text-xl pt-4">{currentQuestion + 1}. {question.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {question.options.map((option) => (
                                <Button key={option.id} variant={selectedAnswer?.id === option.id ? "default" : "outline"} className="w-full justify-start p-4 h-auto text-left" onClick={() => handleAnswerSelect(option)} disabled={showFeedback}>{option.text}</Button>
                            ))}
                        </div>
                        {showFeedback && (
                            <div className={`mt-6 p-4 rounded-lg border ${selectedAnswer.isCorrect ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'}`}>
                                <h4 className="font-semibold">{selectedAnswer.isCorrect ? "Resposta Correta!" : "Resposta Incorreta"}</h4>
                                <p>{selectedAnswer.isCorrect ? question.explanation : question.wrongExplanation}</p>
                            </div>
                        )}
                    </CardContent>
                 </Card>
                 <div className="flex justify-end mt-6">
                    {!showFeedback ? (
                        <Button onClick={handleConfirmAnswer} disabled={!selectedAnswer}>Confirmar</Button>
                    ) : (
                        <Button onClick={handleNextQuestion}>
                            {currentQuestion === quizQuestions.length - 1 ? 'Ver Resultado Final' : 'Próxima'} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                 </div>
            </div>
        </div>
    );
};

export default Quiz;