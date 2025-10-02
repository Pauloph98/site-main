import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Shield, Users, BookOpen, ArrowRight, HardDrive, HelpCircle, GraduationCap, Play, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog';
import TutorialViewer from '../components/TutorialViewer';
import { tutorials } from '../mock';

// Componente auxiliar para exibir o tutorial dentro da aba
const TutorialSection = ({ tutorialId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tutorial = tutorials.find(t => t.id === tutorialId);

  if (!tutorial) return null;

  return (
    <div className="mt-6">
      {!isOpen && (
        <div className="bg-blue-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between border-2 border-dashed border-blue-200 gap-4">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-800">Aprenda o passo a passo: {tutorial.title}</p>
              <p className="text-sm text-gray-600 hidden sm:block">{tutorial.description}</p>
            </div>
          </div>
          <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto flex-shrink-0">Ver Tutorial</Button>
        </div>
      )}
      {isOpen && <TutorialViewer tutorial={tutorial} onClose={() => setIsOpen(false)} />}
    </div>
  );
};


const Content = () => {
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('phishing');
  const [showTopPopup, setShowTopPopup] = useState(false);
  const [hasDonePreTest, setHasDonePreTest] = useState(false);

  useEffect(() => {
    const preTestFlag = localStorage.getItem('preTestCompleted') === 'true';
    setHasDonePreTest(preTestFlag);
    if (!preTestFlag) {
      setTimeout(() => setShowTopPopup(true), 1500);
    }
  }, []);

  const contentTypes = [
    { id: 'phishing', title: 'Phishing', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'malware', title: 'Malware', icon: Shield, color: 'text-orange-600' },
    { id: 'social', title: 'Eng. Social', icon: Users, color: 'text-purple-600' },
    { id: 'protection', title: 'Proteção', icon: Shield, color: 'text-green-600' },
    { id: 'passwords', title: 'Senhas', icon: BookOpen, color: 'text-blue-600' },
    { id: 'backup', title: 'Backup', icon: HardDrive, color: 'text-indigo-600' }
  ];

  const CtaCard = ({ icon: Icon, title, description, buttonText, link, colorClass, iconColorClass }) => (
    <div className={`mt-6 bg-gradient-to-r ${colorClass} p-6 rounded-lg`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white rounded-full shadow-md"><Icon className={`h-8 w-8 ${iconColorClass}`} /></div>
        <div><h3 className="text-lg font-semibold text-gray-800">{title}</h3><p className="text-sm text-gray-600">{description}</p></div>
        <Button className="ml-auto" onClick={() => navigate(link)}>{buttonText} <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <AlertDialog open={showTopPopup} onOpenChange={setShowTopPopup}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle className="flex items-center"><HelpCircle className="mr-2 h-6 w-6 text-blue-500" />Que tal medir seu conhecimento?</AlertDialogTitle><AlertDialogDescription>Vimos que ainda não fez a nossa avaliação inicial. Recomendamos fazê-la agora para que, no final, possa comparar e ver o quanto aprendeu!</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Continuar a estudar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Avaliação Inicial</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h1 className="text-4xl font-bold text-gray-900 mb-4">Conteúdo Educativo</h1><p className="text-xl text-gray-600 max-w-3xl mx-auto">Aprenda sobre os principais riscos da internet e como se proteger.</p></div>
        <Tabs value={selectedContent} onValueChange={setSelectedContent} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">{contentTypes.map((type) => (<TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2 text-xs sm:text-sm"><type.icon className={`h-4 w-4 ${type.color}`} /><span>{type.title}</span></TabsTrigger>))}</TabsList>
          
          <TabsContent value="phishing">
            <Card>
              <CardHeader><CardTitle>O que é Phishing?</CardTitle></CardHeader>
              <CardContent>
                <p>Phishing é uma fraude online usada por criminosos para enganar você e roubar suas informações pessoais, como senhas e números de cartão de crédito. Eles geralmente se passam por empresas conhecidas.</p>
                <TutorialSection tutorialId={5} />
                <CtaCard title="Pratique o que aprendeu" description="Enfrente uma simulação de e-mail falso de banco." buttonText="Fazer Simulação" link="/simulacoes" icon={Play} colorClass="from-green-50 to-blue-50" iconColorClass="text-green-600" />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="malware">
            <Card>
              <CardHeader><CardTitle>O que é Malware?</CardTitle></CardHeader>
              <CardContent>
                <p>Malware é um programa malicioso (como um vírus) que pode ser instalado no seu computador ou celular sem que você perceba. Ele pode danificar seu dispositivo, roubar informações ou espionar suas atividades.</p>
                <TutorialSection tutorialId={8} />
                <CtaCard title="Pratique o que aprendeu" description="Teste sua atenção numa simulação de download de aplicativo." buttonText="Fazer Simulação" link="/simulacoes" icon={Play} colorClass="from-green-50 to-blue-50" iconColorClass="text-green-600" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader><CardTitle>O que é Engenharia Social?</CardTitle></CardHeader>
              <CardContent>
                <p>É a arte de manipular pessoas para que elas forneçam informações confidenciais ou realizem ações. Os golpistas usam a psicologia para ganhar sua confiança e enganar você.</p>
                <TutorialSection tutorialId={6} />
                <CtaCard title="Pratique o que aprendeu" description="Enfrente uma simulação de golpe de falso suporte técnico." buttonText="Fazer Simulação" link="/simulacoes" icon={Play} colorClass="from-green-50 to-blue-50" iconColorClass="text-green-600" />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="protection">
            <Card>
              <CardHeader><CardTitle className="flex items-center space-x-2"><Shield className="h-6 w-6 text-green-600" /><span>Métodos de Proteção</span></CardTitle></CardHeader>
              <CardContent>
                  <p>Aprenda sobre ferramentas como antivírus e a importância de manter seus programas e aplicativos sempre atualizados para se proteger contra as ameaças mais recentes.</p>
                  <TutorialSection tutorialId={7} /> 
                  <TutorialSection tutorialId={8} /> 
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="passwords">
            <Card>
                <CardHeader><CardTitle className="flex items-center space-x-2"><BookOpen className="h-6 w-6 text-blue-600" /><span>Senhas Seguras</span></CardTitle></CardHeader>
                <CardContent>
                    <p>Uma senha forte é sua primeira linha de defesa. Aprenda as regras para criar senhas difíceis de adivinhar e como adicionar uma camada extra de segurança.</p>
                    <TutorialSection tutorialId={1} />
                    <TutorialSection tutorialId={2} />
                </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backup">
            <Card>
                <CardHeader><CardTitle className="flex items-center space-x-2"><HardDrive className="h-6 w-6 text-indigo-600" /><span>Backup de Arquivos</span></CardTitle></CardHeader>
                <CardContent>
                    <p>Aprenda a importância de ter uma cópia de segurança (backup) de seus arquivos e como fazer isso de forma simples para não perder suas fotos e documentos importantes.</p>
                    <TutorialSection tutorialId={3} />
                    <TutorialSection tutorialId={4} />
                </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <AlertDialog><AlertDialogTrigger asChild><Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg">Pronto para Testar seu Conhecimento?<ArrowRight className="ml-2 h-5 w-5" /></Button></AlertDialogTrigger><AlertDialogContent>{hasDonePreTest ? (<><AlertDialogHeader><AlertDialogTitle>Ótimo trabalho!</AlertDialogTitle><AlertDialogDescription>Já completou a avaliação inicial. Agora é a hora de fazer o quiz final para testar o que aprendeu!</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Voltar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Quiz Final</AlertDialogAction></AlertDialogFooter></>) : (<><AlertDialogHeader><AlertDialogTitle>Vamos começar?</AlertDialogTitle><AlertDialogDescription>Para medir o seu progresso, o primeiro passo é fazer a nossa avaliação inicial.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Voltar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Avaliação Inicial</AlertDialogAction></AlertDialogFooter></>)}</AlertDialogContent></AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Content;