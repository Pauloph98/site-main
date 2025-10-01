import React, { useState } from 'react';
import { AlertTriangle, Shield, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { ProtectionContent, PasswordsContent, BackupContent } from './ContentSections';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const [selectedContent, setSelectedContent] = useState('phishing');
  const navigate = useNavigate();

  const contentTypes = [
    { id: 'phishing', title: 'Phishing', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'malware', title: 'Malware', icon: Shield, color: 'text-orange-600' },
    { id: 'social', title: 'Eng. Social', icon: Users, color: 'text-purple-600' },
    { id: 'protection', title: 'Proteção', icon: Shield, color: 'text-green-600' },
    { id: 'passwords', title: 'Senhas', icon: BookOpen, color: 'text-blue-600' },
    { id: 'backup', title: 'Backup', icon: Shield, color: 'text-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conteúdo Educativo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda sobre os principais riscos da internet e como se proteger.
          </p>
        </div>

        <Tabs value={selectedContent} onValueChange={setSelectedContent} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">
            {contentTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2 text-xs sm:text-sm">
                  <IconComponent className={`h-4 w-4 ${type.color}`} />
                  <span>{type.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="phishing">
            <Card>
              <CardHeader><CardTitle>O que é Phishing?</CardTitle></CardHeader>
              <CardContent><p>Phishing é uma tentativa de fraude online onde criminosos se passam por instituições conhecidas (bancos, governo) para roubar suas informações pessoais, como senhas e dados do cartão de crédito, através de e-mails, SMS e mensagens falsas.</p></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="malware">
            <Card>
              <CardHeader><CardTitle>O que é Malware?</CardTitle></CardHeader>
              <CardContent><p>Malware (software malicioso) é um programa criado para danificar seu computador ou celular. Inclui vírus, que se espalham, e ransomware, que "sequestra" seus ficheiros e pede um resgate.</p></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader><CardTitle>O que é Engenharia Social?</CardTitle></CardHeader>
              <CardContent><p>É a arte de manipular pessoas para que elas forneçam informações confidenciais. O criminoso usa a persuasão e a confiança, em vez de métodos técnicos, para conseguir o que quer. O "golpe do novo número do sobrinho" é um exemplo clássico.</p></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protection"><ProtectionContent /></TabsContent>
          <TabsContent value="passwords"><PasswordsContent /></TabsContent>
          <TabsContent value="backup"><BackupContent /></TabsContent>
        </Tabs>

        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Pronto para testar seus conhecimentos?</h2>
          <p className="mb-6">Pratique com nossas simulações interativas e quiz educativo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/simulacoes')} variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              Fazer Simulação
            </Button>
            <Button onClick={() => navigate('/quiz')} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Iniciar Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;