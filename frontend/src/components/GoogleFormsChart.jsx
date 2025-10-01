import React from 'react';
import { ExternalLink, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

export const GoogleFormsChart = () => {
  const googleChartsUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRD_3cgPf_NRFzWlF_dEBg1BYGeFBVjL10tnrhKg5jzlYKTX8GsiN9P-9z2te2HZjTQAKRAjf64BdeY/pubchart?oid=19129367&format=interactive";
  const googleFormsUrl = "https://forms.gle/g2yyewGSVVR1Mavs7";

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <span>Resultados da Pesquisa</span>
          </h3>
          <p className="text-gray-600 mb-4">
            Dados coletados da comunidade sobre segurança digital para idosos
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Gráfico atualizado automaticamente com as respostas em tempo real
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Button 
              onClick={() => window.open(googleChartsUrl, '_blank')}
              variant="outline"
              size="sm"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver gráfico em tela cheia
            </Button>
            <Button 
              onClick={() => window.open(googleFormsUrl, '_blank')}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Responder formulário oficial
            </Button>
          </div>
        </div>

        {/* Google Forms Chart Embed - Full Width */}
        <div className="w-full">
          <div className="bg-gray-50 rounded-lg p-2 border-2 border-dashed border-gray-300">
            <div className="w-full overflow-x-auto">
              <iframe
                src={googleChartsUrl}
                width="900"
                height="600"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg w-full min-w-[900px]"
                title="Resultados da Pesquisa de Segurança Digital"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Gráfico interativo atualizado em tempo real - Google Forms
            <br />
            <span className="text-gray-400">Arraste horizontalmente se necessário para ver o gráfico completo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormsChart;