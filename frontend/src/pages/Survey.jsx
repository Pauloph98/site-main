import React from 'react';
import { ExternalLink, BarChart3, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import GoogleFormsChart from '../components/GoogleFormsChart';

export const Survey = () => {
  // Link real do Google Forms fornecido
  const googleFormsLink = "https://forms.gle/g2yyewGSVVR1Mavs7";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pesquisa de Segurança Digital
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contribua com nossa pesquisa sobre segurança digital para a terceira idade
          </p>
        </div>

        {/* Google Forms Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center space-x-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span>Formulário de Pesquisa</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">
                Suas respostas alimentam diretamente o gráfico de resultados abaixo
              </p>
              
              {/* Buttons for different access methods */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  onClick={() => window.open(googleFormsLink, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Abrir em Nova Aba
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const iframe = document.getElementById('google-forms-iframe');
                    if (iframe) {
                      iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
                    }
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Mostrar/Ocultar Formulário
                </Button>
              </div>
            </div>

            {/* Embedded Google Forms */}
            <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
              <iframe
                id="google-forms-iframe"
                src={googleFormsLink}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
                title="Pesquisa de Segurança Digital - Google Forms"
              >
                Carregando...
              </iframe>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Formulário oficial hospedado no Google Forms - Atualização automática
            </p>
          </CardContent>
        </Card>

        {/* Results Chart Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span>Resultados da Pesquisa</span>
            </h2>
            <p className="text-xl text-gray-600">
              Veja como a comunidade está respondendo sobre segurança digital
            </p>
          </div>
          <GoogleFormsChart />
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Como Funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="font-semibold">1. Responda</h4>
              <p className="text-blue-100 text-sm">
                Preencha o formulário com suas experiências
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h4 className="font-semibold">2. Dados Atualizados</h4>
              <p className="text-blue-100 text-sm">
                Resultados aparecem automaticamente no gráfico
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <ExternalLink className="h-6 w-6" />
              </div>
              <h4 className="font-semibold">3. Contribua</h4>
              <p className="text-blue-100 text-sm">
                Ajude a melhorar a segurança digital para todos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;