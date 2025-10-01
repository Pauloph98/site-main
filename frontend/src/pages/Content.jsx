import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Shield, Users, BookOpen, ArrowRight, HardDrive, HelpCircle, GraduationCap, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog';
import { ProtectionContent, PasswordsContent, BackupContent } from './ContentSections';

const CtaCard = ({ icon: Icon, title, description, buttonText, link, colorClass, iconColorClass }) => {
  const navigate = useNavigate();
  return (
    <div className={`mt-6 bg-gradient-to-r ${colorClass} p-6 rounded-lg border-2 border-dashed`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white rounded-full shadow-md">
          <Icon className={`h-8 w-8 ${iconColorClass}`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <Button className="ml-auto" onClick={() => navigate(link)}>
          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <AlertDialog open={showTopPopup} onOpenChange={setShowTopPopup}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle className="flex items-center"><HelpCircle className="mr-2 h-6 w-6 text-blue-500" />Que tal medir seu conhecimento?</AlertDialogTitle><AlertDialogDescription>Vimos que ainda não fez a nossa avaliação inicial. Recomendamos fazê-la agora para que, no final, possa comparar e ver o quanto aprendeu!</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Continuar a estudar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Avaliação Inicial</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h1 className="text-4xl font-bold text-gray-900 mb-4">Conteúdo Educativo</h1><p className="text-xl text-gray-600 max-w-3xl mx-auto">Aprenda sobre os principais riscos da internet e como se proteger.</p></div>
        <Tabs value={selectedContent} onValueChange={setSelectedContent} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">{contentTypes.map((type) => (<TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2 text-xs sm:text-sm"><type.icon className={`h-4 w-4 ${type.color}`} /><span>{type.title}</span></TabsTrigger>))}</TabsList>
          
          <TabsContent value="phishing"><Card><CardHeader><CardTitle>O que é Phishing?</CardTitle></CardHeader><CardContent><p>Phishing é uma fraude online para roubar suas informações.</p><CtaCard title="Pratique o que aprendeu" description="Enfrente uma simulação de e-mail falso de banco." buttonText="Fazer Simulação" link="/simulacoes" icon={Play} colorClass="from-green-50 to-blue-50" iconColorClass="text-green-600" /><CtaCard title="Aprenda o passo a passo" description="Veja nosso guia para identificar sites seguros." buttonText="Ver Tutorial" link="/tutoriais?id=5" icon={GraduationCap} colorClass="from-blue-50 to-indigo-50" iconColorClass="text-blue-600" /></CardContent></Card></TabsContent>
          <TabsContent value="malware"><Card><CardHeader><CardTitle>O que é Malware?</CardTitle></CardHeader><CardContent><p>Malware é um programa malicioso (vírus) que pode danificar seu dispositivo.</p><CtaCard title="Pratique o que aprendeu" description="Teste sua atenção numa simulação de download de aplicativo." buttonText="Fazer Simulação" link="/simulacoes" icon={Play} colorClass="from-green-50 to-blue-50" iconColorClass="text-green-600" /><CtaCard title="Aprenda o passo a passo" description="Veja como instalar e configurar um antivírus." buttonText="Ver Tutorial" link="/tutoriais?id=8" icon={GraduationCap} colorClass="from-blue-50 to-indigo-50" iconColorClass="text-blue-600" /></CardContent></Card></TabsContent>
          <TabsContent value="social"><Card><CardHeader><CardTitle>O que é Engenharia Social?</CardTitle></CardHeader><CardContent><p>É a arte de manipular pessoas para que elas forneçam informações confidenciais.</p><CtaCard title="Pratique o que aprendeu" description="Enfrente uma simulação de golpe de falso suporte técnico." buttonText="Fazer Simulação" link="/simulacoes" icon={Play} colorClass="from-green-50 to-blue-50" iconColorClass="text-green-600" /><CtaCard title="Aprenda o passo a passo" description="Veja como configurar a privacidade do seu Facebook." buttonText="Ver Tutorial" link="/tutoriais?id=6" icon={GraduationCap} colorClass="from-blue-50 to-indigo-50" iconColorClass="text-blue-600" /></CardContent></Card></TabsContent>
          
          <TabsContent value="protection"><ProtectionContent /></TabsContent>
          <TabsContent value="passwords"><PasswordsContent /></TabsContent>
          <TabsContent value="backup"><BackupContent /></TabsContent>

        </Tabs>
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <AlertDialog><AlertDialogTrigger asChild><Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg">Pronto para Testar seu Conhecimento?<ArrowRight className="ml-2 h-5 w-5" /></Button></AlertDialogTrigger><AlertDialogContent>{hasDonePreTest ? (<><AlertDialogHeader><AlertDialogTitle>Ótimo trabalho!</AlertDialogTitle><AlertDialogDescription>Já completou a avaliação inicial. Agora é a hora de fazer o quiz final para testar o que aprendeu!</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Voltar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Quiz Final</AlertDialogAction></AlertDialogFooter></>) : (<><AlertDialogHeader><AlertDialogTitle>Vamos começar?</AlertDialogTitle><AlertDialogDescription>Para medir o seu progresso, o primeiro passo é fazer a nossa avaliação inicial.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Voltar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Avaliação Inicial</AlertDialogAction></AlertDialogFooter></>)}</AlertDialogContent></AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Content;