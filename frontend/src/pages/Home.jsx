import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, CheckSquare, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import GoogleFormsChart from '../components/GoogleFormsChart';
import mockData from '../mock';

const iconMap = {
  BookOpen,
  Play,
  CheckSquare,
  Award
};

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/conteudo');
  };

  const handleFeatureClick = (featureId) => {
    switch(featureId) {
      case 1: navigate('/conteudo'); break;
      case 2: navigate('/simulacoes'); break;
      case 3: navigate('/quiz'); break;
      case 4: window.open('/cartilha', '_blank'); break;
      default: navigate('/conteudo');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{mockData.hero.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{mockData.hero.subtitle}</p>
              <Button onClick={handleGetStarted} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105">
                {mockData.hero.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-center">
                  <div className="w-64 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center relative">
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div className="w-32 h-20 bg-gray-600 rounded-lg mx-auto relative">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={feature.id} className={`${feature.color} cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2`} onClick={() => handleFeatureClick(feature.id)}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${feature.iconColor} bg-white`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dados da Inclusão Digital</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Baseado em pesquisas do IBGE e estudos acadêmicos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">66%</div>
              <div className="text-sm text-gray-600 mb-2">dos idosos conectados</div>
              <div className="text-xs text-gray-500">IBGE 2023 (era 24,7% em 2016)</div>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">53%</div>
              <div className="text-sm text-gray-600 mb-2">propensos a phishing</div>
              <div className="text-xs text-gray-500">Zulkipli et al. (2021)</div>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
              <div className="text-sm text-gray-600 mb-2">denúncias por terceiros</div>
              <div className="text-xs text-gray-500">Agência Brasil (2024)</div>
            </div>
          </div>
          
          <GoogleFormsChart />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Contribua com nossa pesquisa</h2>
          <p className="text-xl text-blue-100 mb-8">Ajude a melhorar a segurança digital para todos os idosos</p>
          <Button onClick={() => navigate('/pesquisas')} size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105">
            Responder pesquisa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;