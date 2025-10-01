import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, AlertTriangle } from 'lucide-react';
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

    const handleAnswerSelect = (answer) => { if (!showFeedback) setSelectedAnswer(answer); };

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
        // Limpa os dados para permitir que o fluxo recomece
        localStorage.removeItem('userInfo');
        localStorage.removeItem('preTestScore');
        localStorage.removeItem('preTestCompleted');
        // Navega para /quiz, que o QuizGate irá agora direcionar para o PreQuiz
        navigate('/quiz');
    };

    // O resto do código continua igual...
    // ...
};

export default Quiz;