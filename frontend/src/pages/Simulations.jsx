import React, { useState } from 'react';
import { AlertTriangle, Shield, Users, Play, CheckCircle, XCircle, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { useNavigate } from 'react-router-dom';

export const Simulations = () => {
  const navigate = useNavigate();
  const [currentSimulation, setCurrentSimulation] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoices, setUserChoices] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const simulations = [
    {
      id: 1,
      title: 'E-mail Falso do Banco',
      description: 'Identifique características de um e-mail de phishing bancário',
      difficulty: 'Fácil',
      category: 'phishing',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50 border-red-200',
      duration: '3-5 min',
      steps: [
        {
          question: 'Você recebeu este e-mail. O que chama sua atenção primeiro?',
          scenario: {
            from: 'banco.santander@email-security.com',
            subject: 'URGENTE: Sua conta será bloqueada em 24h',
            body: 'Prezado cliente, detectamos atividade suspeita em sua conta. Clique AQUI para confirmar seus dados e evitar o bloqueio.'
          },
          options: [
            { id: 1, text: 'O remetente parece oficial', isCorrect: false },
            { id: 2, text: 'O domínio do e-mail não é oficial do banco', isCorrect: true },
            { id: 3, text: 'A mensagem parece normal', isCorrect: false },
            { id: 4, text: 'Não vejo nada suspeito', isCorrect: false }
          ],
          explanation: 'O domínio correto do Santander seria @santander.com.br, não @email-security.com. Bancos sempre usam seus domínios oficiais.'
        },
        {
          question: 'Que outros sinais de alerta você identifica?',
          scenario: {
            body: 'ATENÇÃO! Sua conta será BLOQUEADA em 24 horas por atividade suspeita. Clique no link abaixo IMEDIATAMENTE para confirmar sua identidade e evitar o bloqueio: http://santander-verificacao.tk/login'
          },
          options: [
            { id: 1, text: 'Uso excessivo de maiúsculas e urgência', isCorrect: true },
            { id: 2, text: 'Link com domínio suspeito (.tk)', isCorrect: true },
            { id: 3, text: 'Ameaça de bloqueio para criar pressão', isCorrect: true },
            { id: 4, text: 'Todas as anteriores', isCorrect: true }
          ],
          explanation: 'Excelente! Você identificou todos os sinais: urgência excessiva, domínio falso e táticas de pressão psicológica.'
        }
      ]
    },
    {
      id: 2,
      title: 'Download de Aplicativo Falso',
      description: 'Aprenda a identificar aplicativos maliciosos',
      difficulty: 'Médio',
      category: 'malware',
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 border-orange-200',
      duration: '5-7 min',
      steps: [
        {
          question: 'Você quer baixar o app do seu banco. Qual opção é mais segura?',
          scenario: {
            description: 'Você encontrou três opções para baixar o aplicativo do banco:'
          },
          options: [
            { id: 1, text: 'Link enviado por WhatsApp', isCorrect: false },
            { id: 2, text: 'Google Play Store ou App Store oficial', isCorrect: true },
            { id: 3, text: 'Site de downloads gratuitos', isCorrect: false },
            { id: 4, text: 'Link em banner de site', isCorrect: false }
          ],
          explanation: 'Sempre baixe aplicativos das lojas oficiais (Google Play Store, App Store). Elas verificam os apps antes de disponibilizar.'
        }
      ]
    },
    {
      id: 3,
      title: 'Golpe do Falso Suporte',
      description: 'Reconheça táticas de engenharia social por telefone',
      difficulty: 'Médio',
      category: 'social',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
      duration: '4-6 min',
      steps: [
        {
          question: 'Você recebe uma ligação: "Olá, sou do suporte técnico da Microsoft. Seu computador está infectado." Qual sua reação?',
          scenario: {
            description: 'Ligação inesperada de suposto suporte técnico'
          },
          options: [
            { id: 1, text: 'Sigo as instruções imediatamente', isCorrect: false },
            { id: 2, text: 'Pergunto o número e ligo de volta', isCorrect: true },
            { id: 3, text: 'Desligo imediatamente', isCorrect: true },
            { id: 4, text: 'Peço para aguardar e consulto alguém', isCorrect: true }
          ],
          explanation: 'Microsoft nunca liga diretamente para usuários sobre problemas. É sempre golpe. Desligue ou verifique pelos canais oficiais.'
        }
      ]
    },
    {
      id: 4,
      title: 'Criando Senha Segura',
      description: 'Aprenda a criar senhas realmente seguras',
      difficulty: 'Fácil',
      category: 'passwords',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
      duration: '4-6 min',
      steps: [
        {
          question: 'Qual dessas senhas é mais segura para sua conta bancária?',
          scenario: {
            description: 'Você precisa criar uma nova senha para seu internet banking. Analise as opções:'
          },
          options: [
            { id: 1, text: '123456789', isCorrect: false },
            { id: 2, text: 'MinhaDataDeNascimento', isCorrect: false },
            { id: 3, text: 'MeuGato@Mimi2024!', isCorrect: true },
            { id: 4, text: 'senha123', isCorrect: false }
          ],
          explanation: 'A terceira opção é segura porque combina maiúsculas, minúsculas, números, símbolos e não usa informações pessoais óbvias.'
        },
        {
          question: 'Você criou uma senha forte. Onde é melhor guardá-la?',
          scenario: {
            description: 'Agora você precisa decidir como lembrar da sua nova senha segura.'
          },
          options: [
            { id: 1, text: 'Em um papel grudado no monitor', isCorrect: false },
            { id: 2, text: 'Em um gerenciador de senhas', isCorrect: true },
            { id: 3, text: 'No bloco de notas do celular', isCorrect: false },
            { id: 4, text: 'Não anoto, só confio na memória', isCorrect: false }
          ],
          explanation: 'Gerenciadores de senhas são seguros, criptografados e você só precisa lembrar de uma senha mestra.'
        }
      ]
    },
    {
      id: 5,
      title: 'Wi-Fi Público Seguro',
      description: 'Aprenda os cuidados com redes Wi-Fi públicas',
      difficulty: 'Médio',
      category: 'protection',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50 border-green-200',
      duration: '5-7 min',
      steps: [
        {
          question: 'Você está no shopping e precisa acessar seu banco. Qual a melhor opção?',
          scenario: {
            description: 'Você precisa fazer uma transferência urgente e está em um local público.'
          },
          options: [
            { id: 1, text: 'Usar o Wi-Fi gratuito do shopping', isCorrect: false },
            { id: 2, text: 'Usar os dados móveis do seu celular', isCorrect: true },
            { id: 3, text: 'Pedir a senha Wi-Fi para alguém', isCorrect: false },
            { id: 4, text: 'Usar qualquer rede aberta disponível', isCorrect: false }
          ],
          explanation: 'Os dados móveis são mais seguros que Wi-Fi público para operações bancárias. Redes públicas podem ser interceptadas.'
        },
        {
          question: 'Se você PRECISAR usar Wi-Fi público, qual cuidado tomar?',
          scenario: {
            description: 'Em uma emergência, você precisa usar Wi-Fi público. Como se proteger?'
          },
          options: [
            { id: 1, text: 'Acessar só sites que começam com https://', isCorrect: true },
            { id: 2, text: 'Evitar sites de banco e e-mail', isCorrect: true },
            { id: 3, text: 'Fazer logout de tudo quando terminar', isCorrect: true },
            { id: 4, text: 'Todas as anteriores', isCorrect: true }
          ],
          explanation: 'Perfeito! Em Wi-Fi público: use apenas sites seguros (https), evite informações sensíveis e sempre faça logout.'
        }
      ]
    },
    {
      id: 6,
      title: 'Backup de Emergência',
      description: 'Situação de ransomware - como o backup pode te salvar',
      difficulty: 'Avançado',
      category: 'backup',
      icon: Shield,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
      duration: '6-8 min',
      steps: [
        {
          question: 'Seu computador foi infectado por ransomware e todos os arquivos estão bloqueados. O que fazer primeiro?',
          scenario: {
            description: 'Na tela aparece: "Seus arquivos foram criptografados! Pague R$ 2.000 em Bitcoin para recuperá-los!"'
          },
          options: [
            { id: 1, text: 'Pagar imediatamente o resgate', isCorrect: false },
            { id: 2, text: 'Desconectar da internet e NÃO pagar', isCorrect: true },
            { id: 3, text: 'Tentar acessar os arquivos normalmente', isCorrect: false },
            { id: 4, text: 'Reiniciar o computador várias vezes', isCorrect: false }
          ],
          explanation: 'NUNCA pague resgate! Desconecte da internet para evitar mais danos e prepare-se para restaurar do backup.'
        },
        {
          question: 'Você tinha backup dos seus arquivos no Google Drive. Qual o próximo passo?',
          scenario: {
            description: 'Felizmente você fazia backup regular. Como proceder para recuperar tudo?'
          },
          options: [
            { id: 1, text: 'Formatar o computador e reinstalar tudo limpo', isCorrect: true },
            { id: 2, text: 'Tentar limpar o vírus primeiro', isCorrect: false },
            { id: 3, text: 'Restaurar o backup no computador infectado', isCorrect: false },
            { id: 4, text: 'Aguardar o problema se resolver sozinho', isCorrect: false }
          ],
          explanation: 'Correto! Com ransomware, o mais seguro é formatar tudo, instalar sistema limpo e depois restaurar do backup.'
        },
        {
          question: 'Como evitar que isso aconteça novamente?',
          scenario: {
            description: 'Você recuperou tudo do backup. Que medidas tomar para prevenir futuros ataques?'
          },
          options: [
            { id: 1, text: 'Fazer backup automático semanal', isCorrect: true },
            { id: 2, text: 'Manter antivírus atualizado', isCorrect: true },
            { id: 3, text: 'Não clicar em links suspeitos', isCorrect: true },
            { id: 4, text: 'Todas as anteriores', isCorrect: true }
          ],
          explanation: 'Excelente! A combinação de backup regular, antivírus atualizado e navegação segura é a melhor proteção.'
        }
      ]
    }
  ];

  const handleStartSimulation = (simulation) => {
    setCurrentSimulation(simulation);
    setCurrentStep(0);
    setUserChoices([]);
    setShowResult(false);
  };

  const handleChoiceSelect = (choice) => {
    const newChoices = [...userChoices];
    newChoices[currentStep] = choice;
    setUserChoices(newChoices);

    setTimeout(() => {
      if (currentStep < currentSimulation.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const handleRestart = () => {
    setCurrentSimulation(null);
    setCurrentStep(0);
    setUserChoices([]);
    setShowResult(false);
  };

  const calculateScore = () => {
    if (!currentSimulation || !userChoices.length) return 0;
    const correctAnswers = userChoices.filter((choice, index) => {
      return currentSimulation.steps[index].options.find(opt => opt.id === choice.id)?.isCorrect;
    }).length;
    return Math.round((correctAnswers / currentSimulation.steps.length) * 100);
  };

  if (currentSimulation && !showResult) {
    const step = currentSimulation.steps[currentStep];
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" onClick={handleRestart} className="flex items-center space-x-2"><ArrowLeft className="h-4 w-4" /><span>Voltar</span></Button>
              <Badge variant="secondary">{currentSimulation.difficulty}</Badge>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentSimulation.title}</h1>
            <Progress value={((currentStep + 1) / currentSimulation.steps.length) * 100} className="w-full" />
            <p className="text-sm text-gray-600 mt-2">Passo {currentStep + 1} de {currentSimulation.steps.length}</p>
          </div>
          <Card className="mb-6">
            <CardHeader><CardTitle>{step.question}</CardTitle></CardHeader>
            <CardContent>
              {step.scenario && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  {step.scenario.from && <div className="mb-2"><strong>De:</strong> {step.scenario.from}</div>}
                  {step.scenario.subject && <div className="mb-2"><strong>Assunto:</strong> {step.scenario.subject}</div>}
                  {step.scenario.body && <div className="mb-2"><strong>Mensagem:</strong><div className="mt-2 p-3 bg-white rounded border">{step.scenario.body}</div></div>}
                  {step.scenario.description && <p className="text-gray-700">{step.scenario.description}</p>}
                </div>
              )}
              <div className="space-y-3">
                {step.options.map((option) => {
                  const isSelected = userChoices[currentStep]?.id === option.id;
                  const showFeedback = isSelected;
                  return (
                    <Button key={option.id} variant={isSelected ? (option.isCorrect ? "default" : "destructive") : "outline"} className={`w-full justify-start p-4 h-auto text-left ${showFeedback ? (option.isCorrect ? "bg-green-50 border-green-500 text-green-800 hover:bg-green-50" : "bg-red-50 border-red-500 text-red-800 hover:bg-red-50") : ""}`} onClick={() => !userChoices[currentStep] && handleChoiceSelect(option)} disabled={!!userChoices[currentStep]}>
                      <div className="flex items-center space-x-3">
                        {showFeedback && (option.isCorrect ? <CheckCircle className="h-5 w-5 text-green-600" /> : <XCircle className="h-5 w-5 text-red-600" />)}
                        <span>{option.text}</span>
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
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader><CardTitle className="text-3xl">Simulação Concluída!</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-blue-600">{score}%</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{score >= 80 ? 'Excelente!' : score >= 60 ? 'Bom trabalho!' : 'Continue praticando!'}</h3>
                <p className="text-gray-600">{score >= 80 ? 'Você demonstrou excelente conhecimento!' : score >= 60 ? 'Você está no caminho certo. Continue a praticar.' : 'Não desanime! A prática leva à perfeição.'}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/conteudo')} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Voltar para o Conteúdo
                </Button>
                <Button variant="outline" size="lg" onClick={handleRestart}>
                  Escolher Outra Simulação
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simulações Interativas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprender fazendo é a melhor forma de se proteger. Aqui, você pode praticar em cenários de golpes comuns, como e-mails falsos e mensagens suspeitas, num ambiente <strong>totalmente seguro e educativo</strong>. Nada aqui é real, é apenas um treino!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulations.map((simulation) => {
            const IconComponent = simulation.icon;
            return (
              <Card key={simulation.id} className={`${simulation.bgColor} hover:shadow-lg transition-all duration-200 hover:scale-105 border-2`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <IconComponent className={`h-8 w-8 ${simulation.color}`} />
                    <Badge variant="secondary">{simulation.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-xl">{simulation.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{simulation.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duração: {simulation.duration}</span>
                    <span>{simulation.steps.length} passos</span>
                  </div>
                  <Button onClick={() => handleStartSimulation(simulation)} className="w-full"><Play className="mr-2 h-4 w-4" />Iniciar Simulação</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Como Funcionam as Simulações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-2"><div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto"><Play className="h-6 w-6" /></div><h3 className="font-semibold">Cenários Reais</h3><p className="text-blue-100 text-sm">Baseados em golpes reais que afetam idosos no Brasil</p></div>
            <div className="space-y-2"><div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto"><CheckCircle className="h-6 w-6" /></div><h3 className="font-semibold">Feedback Imediato</h3><p className="text-blue-100 text-sm">Explicações detalhadas para cada resposta</p></div>
            <div className="space-y-2"><div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto"><ArrowRight className="h-6 w-6" /></div><h3 className="font-semibold">Progresso Gradual</h3><p className="text-blue-100 text-sm">Dificuldade crescente para melhor aprendizado</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulations;