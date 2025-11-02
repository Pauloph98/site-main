import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { TrendingUp, Users, Award, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://seguranca-digital-backend.onrender.com';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [surveyStats, setSurveyStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' ou 'survey'

  useEffect(() => {
    fetchStats();
    fetchSurveyStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BACKEND_URL}/api/quiz-results/stats`);
      setStats(response.data);
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar estatísticas:', err);
      setError('Erro ao carregar dados. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const fetchSurveyStats = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/survey-responses/stats`);
      setSurveyStats(response.data);
    } catch (err) {
      console.error('Erro ao buscar estatísticas da pesquisa:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando estatísticas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-2" />
            <CardTitle className="text-center">Erro ao Carregar Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">{error}</p>
            <button 
              onClick={fetchStats}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Tentar Novamente
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!stats || stats.pre_test.total_users === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <CardTitle className="text-center">Ainda sem dados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Nenhum resultado de quiz foi registrado ainda. Os dados aparecerão aqui quando os usuários começarem a fazer os testes.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Preparar dados para os gráficos
  const comparisonData = [
    {
      name: 'Pré-Teste',
      percentage: stats.pre_test.avg_percentage,
      usuarios: stats.pre_test.total_users
    },
    {
      name: 'Pós-Teste',
      percentage: stats.post_test.avg_percentage,
      usuarios: stats.post_test.total_users
    }
  ];

  const improvement = stats.post_test.avg_percentage - stats.pre_test.avg_percentage;

  // Dados por faixa etária
  const ageRangeData = {};
  stats.age_range_stats.forEach(item => {
    if (!ageRangeData[item.age_range]) {
      ageRangeData[item.age_range] = { age_range: item.age_range };
    }
    ageRangeData[item.age_range][item.test_type === 'pre-teste' ? 'pre_test' : 'post_test'] = item.avg_percentage;
  });
  const ageRangeChartData = Object.values(ageRangeData);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 Dashboard de Métricas</h1>
          <p className="text-gray-600">Acompanhe a efetividade do conteúdo educativo e resultados das pesquisas</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'quiz'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Quiz - Aprendizado
          </button>
          <button
            onClick={() => setActiveTab('survey')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'survey'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Pesquisa - Perfil dos Usuários
          </button>
        </div>

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <>
            {/* Cards de Resumo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total de Usuários</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-blue-600">{stats.pre_test.total_users}</div>
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Média Pré-Teste</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-orange-600">
                      {stats.pre_test.avg_percentage.toFixed(1)}%
                    </div>
                    <Award className="h-8 w-8 text-orange-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Média Pós-Teste</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-green-600">
                      {stats.post_test.avg_percentage.toFixed(1)}%
                    </div>
                    <Award className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Melhoria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className={`text-3xl font-bold ${improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {improvement >= 0 ? '+' : ''}{improvement.toFixed(1)}%
                    </div>
                    <TrendingUp className={`h-8 w-8 ${improvement >= 0 ? 'text-green-400' : 'text-red-400'}`} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gráfico de Comparação Principal */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Comparação: Pré-Teste vs Pós-Teste</CardTitle>
                <CardDescription>
                  Percentual médio de acertos antes e depois do conteúdo educativo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} label={{ value: 'Acertos (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === 'percentage') return [`${value.toFixed(1)}%`, 'Taxa de Acerto'];
                        return [value, 'Usuários'];
                      }}
                    />
                    <Legend />
                    <Bar dataKey="percentage" fill="#3B82F6" name="Taxa de Acerto (%)" />
                  </BarChart>
                </ResponsiveContainer>
                {improvement > 0 && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✅ Melhoria de {improvement.toFixed(1)}% após o conteúdo educativo!
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      O conteúdo está tendo impacto positivo no aprendizado dos usuários.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Gráfico por Faixa Etária */}
            {ageRangeChartData.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Desempenho por Faixa Etária</CardTitle>
                  <CardDescription>
                    Comparação de resultados entre diferentes faixas etárias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={ageRangeChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age_range" />
                      <YAxis domain={[0, 100]} label={{ value: 'Acertos (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => `${value?.toFixed(1) || 0}%`} />
                      <Legend />
                      <Bar dataKey="pre_test" fill="#F59E0B" name="Pré-Teste" />
                      <Bar dataKey="post_test" fill="#10B981" name="Pós-Teste" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            {/* Análise de Questões */}
            <Card>
              <CardHeader>
                <CardTitle>Análise por Questão</CardTitle>
                <CardDescription>
                  Taxa de acerto de cada questão nos dois testes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(stats.question_stats).map(([questionId, questionData]) => (
                    <div key={questionId} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Questão {questionId}</span>
                        <div className="flex gap-4">
                          <Badge variant="secondary">
                            Pré: {questionData.pre_test_percentage.toFixed(0)}%
                          </Badge>
                          <Badge variant="default" className="bg-green-600">
                            Pós: {questionData.post_test_percentage.toFixed(0)}%
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-orange-500"
                              style={{ width: `${questionData.pre_test_percentage}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500"
                              style={{ width: `${questionData.post_test_percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Survey Tab */}
        {activeTab === 'survey' && surveyStats && (
          <>
            {/* Card de Resumo */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Total de Respostas da Pesquisa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold text-blue-600">{surveyStats.total_responses}</div>
                  <p className="text-gray-600 mt-2">Pessoas compartilharam suas experiências</p>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos da Pesquisa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Faixa Etária */}
              <Card>
                <CardHeader>
                  <CardTitle>Faixa Etária dos Participantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.faixa_etaria}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({label, count}) => {
                          const percentage = ((count / surveyStats.total_responses) * 100).toFixed(1);
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
                <CardHeader>
                  <CardTitle>Frequência de Uso da Internet</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.frequencia_internet}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
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
                <CardHeader>
                  <CardTitle>Sensação de Segurança ao Navegar</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.seguranca_navegacao}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({label, count}) => {
                          const percentage = ((count / surveyStats.total_responses) * 100).toFixed(1);
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
                <CardHeader>
                  <CardTitle>Já foi vítima de golpe virtual?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.vitima_golpe_virtual}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
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
                <CardHeader>
                  <CardTitle>Conhecimento sobre Phishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.conhece_phishing}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
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

              {/* Criação de Senhas */}
              <Card>
                <CardHeader>
                  <CardTitle>Como cria suas senhas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.criacao_senhas}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({count}) => {
                          const percentage = ((count / surveyStats.total_responses) * 100).toFixed(0);
                          return `${percentage}%`;
                        }}
                      >
                        {surveyStats.criacao_senhas.map((entry, index) => (
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
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Importância deste Site Educativo</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={surveyStats.importancia_site}
                        dataKey="count"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
