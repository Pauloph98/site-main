import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, Users, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://seguranca-digital-backend.onrender.com';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const SurveyChart = () => {
  const [surveyStats, setSurveyStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingTime, setLoadingTime] = useState(0);

  const fetchSurveyStats = async () => {
    try {
      setLoading(true);
      setError(null);
      setLoadingTime(0);
      
      // Timeout para mostrar mensagem de espera
      const timeoutId = setTimeout(() => {
        setLoadingTime(10);
      }, 10000);
      
      const response = await axios.get(`${BACKEND_URL}/api/survey-responses/stats`, {
        timeout: 30000 // 30 segundos de timeout
      });
      
      clearTimeout(timeoutId);
      setSurveyStats(response.data);
    } catch (err) {
      console.error('Erro ao buscar estatísticas da pesquisa:', err);
      if (err.code === 'ECONNABORTED') {
        setError('O servidor está demorando para responder. O Render pode estar "acordando" (leva até 30 segundos). Tente novamente.');
      } else {
        setError('Erro ao carregar dados da pesquisa.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurveyStats();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 font-semibold">Carregando estatísticas da pesquisa...</p>
          {loadingTime > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              ⏳ O servidor pode estar "acordando" (Render Free). Aguarde mais alguns segundos...
            </p>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={fetchSurveyStats} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  if (!surveyStats || surveyStats.total_responses === 0) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col items-center justify-center py-12">
          <Users className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Ainda sem dados</h3>
          <p className="text-gray-600 text-center">
            Nenhuma resposta de pesquisa foi registrada ainda. Os dados aparecerão aqui quando os usuários começarem a responder.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <span>Resultados da Pesquisa</span>
          </h3>
          <p className="text-gray-600 mb-2">
            Dados coletados da comunidade sobre segurança digital para idosos
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">
              {surveyStats.total_responses} {surveyStats.total_responses === 1 ? 'resposta coletada' : 'respostas coletadas'}
            </p>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Gráficos atualizados automaticamente com as respostas em tempo real
          </p>
        </div>

        {/* Gráficos */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Faixa Etária */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Faixa Etária</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={surveyStats.faixa_etaria}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                      return `${percentage}%`;
                    }}
                  >
                    {surveyStats.faixa_etaria.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Frequência de Uso da Internet */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Frequência Internet</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={surveyStats.frequencia_internet}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                      return `${percentage}%`;
                    }}
                  >
                    {surveyStats.frequencia_internet.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Segurança na Navegação */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Segurança na Web</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={surveyStats.seguranca_navegacao}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                      return `${percentage}%`;
                    }}
                  >
                    {surveyStats.seguranca_navegacao.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vítimas de Golpe Virtual */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Vítima de Golpe</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={surveyStats.vitima_golpe_virtual}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                      return `${percentage}%`;
                    }}
                  >
                    {surveyStats.vitima_golpe_virtual.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Conhecimento sobre Phishing */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Conhece Phishing?</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={surveyStats.conhece_phishing}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                      return `${percentage}%`;
                    }}
                  >
                    {surveyStats.conhece_phishing.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Importância do Site */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Importância do Site</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={surveyStats.importancia_site}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                      return `${percentage}%`;
                    }}
                  >
                    {surveyStats.importancia_site.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Dados atualizados em tempo real do banco de dados
        </p>
      </div>
    </div>
  );
};

export default SurveyChart;
