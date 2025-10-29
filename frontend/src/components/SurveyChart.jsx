import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
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

  const fetchSurveyStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BACKEND_URL}/api/survey-responses/stats`);
      setSurveyStats(response.data);
    } catch (err) {
      console.error('Erro ao buscar estatísticas da pesquisa:', err);
      setError('Erro ao carregar dados da pesquisa.');
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
          <p className="text-gray-600">Carregando estatísticas da pesquisa...</p>
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
        <div className="space-y-8">
          {/* Faixa Etária */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Faixa Etária dos Participantes</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={surveyStats.faixa_etaria}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({label, count}) => {
                      const percentage = ((count / surveyStats.total_responses) * 100).toFixed(1);
                      return `${label}: ${percentage}%`;
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
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Frequência de Uso da Internet</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={surveyStats.frequencia_internet}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" angle={-15} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Bar dataKey="count" fill="#3B82F6" label={{ position: 'top', formatter: (value) => `${((value / surveyStats.total_responses) * 100).toFixed(1)}%` }} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vítimas de Golpe Virtual */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Já foi vítima de golpe virtual?</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={surveyStats.vitima_golpe_virtual}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Bar dataKey="count" fill="#FF8042" label={{ position: 'top', formatter: (value) => `${((value / surveyStats.total_responses) * 100).toFixed(1)}%` }} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Conhecimento sobre Phishing */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Conhecimento sobre Phishing</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={surveyStats.conhece_phishing}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" angle={-15} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Bar dataKey="count" fill="#00C49F" label={{ position: 'top', formatter: (value) => `${((value / surveyStats.total_responses) * 100).toFixed(1)}%` }} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Importância do Site */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Importância deste Site Educativo</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={surveyStats.importancia_site}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" angle={-15} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => {
                      const percentage = ((value / surveyStats.total_responses) * 100).toFixed(1);
                      return [`${value} (${percentage}%)`, 'Respostas'];
                    }}
                  />
                  <Bar dataKey="count" fill="#8884D8" label={{ position: 'top', formatter: (value) => `${((value / surveyStats.total_responses) * 100).toFixed(1)}%` }} />
                </BarChart>
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
