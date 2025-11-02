import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Lock, Database, FileText, Mail, Scale, Cookie, UserCheck, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Privacidade = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Verifica se há histórico de navegação
    if (window.history.length > 1) {
      navigate(-1); // Volta para a página anterior
    } else {
      navigate('/'); // Fallback para home se não houver histórico
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-6 min-h-touch min-w-touch text-base"
          aria-label="Voltar para página anterior"
        >
          <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
          Voltar
        </Button>

        <Card className="mb-8">
          <CardHeader className="text-center border-b">
            <Lock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-gray-900">
              Política de Privacidade
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Segurança Cibernética para Idosos - TCC UNIALFA
            </p>
          </CardHeader>
          <CardContent className="prose max-w-none p-8">
            <div className="space-y-6">
              {/* Introdução */}
              <section>
                <p className="text-gray-700 leading-relaxed">
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais ao utilizar a plataforma <strong>"Segurança Digital para Idosos"</strong>, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>.
                </p>
              </section>

              {/* Seção 1 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Controlador de Dados</h2>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-800">
                    <strong>Responsável:</strong> Paulo Henrique Pereira Silva Barros<br />
                    <strong>Instituição:</strong> Centro Universitário Alves Faria (UNIALFA)<br />
                    <strong>Curso:</strong> Sistemas de Informação - TCC<br />
                    <strong>Orientador:</strong> Prof. Yhury Silva Rezende<br />
                    <strong>E-mail:</strong> <a href="mailto:paulo.barros.70293@alunos.unialfa.com.br" className="text-blue-600 hover:underline">paulo.barros.70293@alunos.unialfa.com.br</a>
                  </p>
                </div>
              </section>

              {/* Seção 2 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Dados Coletados</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Coletamos apenas os dados <strong>mínimos necessários</strong> para realizar a pesquisa acadêmica:
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-3">
                  <h3 className="font-bold text-gray-900 mb-2">✅ Dados que COLETAMOS:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Nome ou apelido</strong> (identificação opcional)</li>
                    <li><strong>Faixa etária</strong> (ex: 60-69 anos)</li>
                    <li><strong>Respostas do quiz</strong> (pré-teste e pós-teste)</li>
                    <li><strong>Respostas da pesquisa</strong> (experiências com segurança digital)</li>
                    <li><strong>Data e hora</strong> de participação</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">❌ Dados que NÃO coletamos:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>CPF, RG ou outros documentos</li>
                    <li>Endereço residencial</li>
                    <li>Número de telefone</li>
                    <li>Dados bancários ou financeiros</li>
                    <li>Informações médicas ou de saúde</li>
                  </ul>
                </div>
              </section>

              {/* Seção 3 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Base Legal (LGPD)</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  O tratamento dos seus dados está fundamentado nas seguintes bases legais da LGPD:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Consentimento (Art. 7º, I)</strong>: Você autoriza expressamente a coleta ao marcar a caixa de consentimento</li>
                  <li><strong>Execução de contrato (Art. 7º, V)</strong>: Para fornecer os serviços educativos da plataforma</li>
                  <li><strong>Interesse legítimo (Art. 7º, IX)</strong>: Para pesquisa acadêmica e melhoria dos serviços</li>
                </ul>
              </section>

              {/* Seção 4 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Finalidade do Tratamento</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Seus dados são utilizados <strong>exclusivamente</strong> para:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>📊 <strong>Análise estatística</strong> para o Trabalho de Conclusão de Curso (TCC)</li>
                  <li>📈 <strong>Geração de gráficos e relatórios agregados</strong> (sem identificação pessoal)</li>
                  <li>🎓 <strong>Publicação acadêmica</strong> (artigos, apresentações) com dados anonimizados</li>
                  <li>🔍 <strong>Melhoria da plataforma</strong> educativa</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  ❌ <strong>NÃO</strong> vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.
                </p>
              </section>

              {/* Seção 5 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Armazenamento e Localização</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Seus dados são armazenados de forma segura:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Banco de dados:</strong> MySQL hospedado pela Hostgator Brasil</li>
                    <li><strong>Servidor:</strong> Localizado no Brasil (sh00046.hostgator.com.br)</li>
                    <li><strong>Período de retenção:</strong> Até 2 anos após a conclusão do TCC</li>
                    <li><strong>Destino final:</strong> Anonimização ou exclusão definitiva</li>
                  </ul>
                </div>
              </section>

              {/* Seção 6 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Segurança dos Dados</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>🔒 <strong>Criptografia HTTPS</strong>: Todos os dados são transmitidos com criptografia SSL/TLS</li>
                  <li>🔑 <strong>Controle de acesso</strong>: Apenas o pesquisador e orientador têm acesso aos dados</li>
                  <li>💾 <strong>Backups regulares</strong>: Cópias de segurança automáticas</li>
                  <li>🛡️ <strong>Senhas fortes</strong>: Credenciais de acesso protegidas</li>
                  <li>📋 <strong>Logs de auditoria</strong>: Registro de acessos ao banco de dados</li>
                </ul>
              </section>

              {/* Seção 7 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Seus Direitos (LGPD Art. 18)</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Você tem os seguintes direitos garantidos pela LGPD:
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">📋 1. Confirmação e Acesso</h3>
                    <p className="text-gray-700 text-sm">Saber se seus dados estão sendo tratados e acessá-los</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">✏️ 2. Correção</h3>
                    <p className="text-gray-700 text-sm">Corrigir dados incompletos, inexatos ou desatualizados</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">🗑️ 3. Exclusão</h3>
                    <p className="text-gray-700 text-sm">Solicitar a eliminação de dados desnecessários ou excessivos</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">🚫  4. Revogação do Consentimento</h3>
                    <p className="text-gray-700 text-sm">Retirar seu consentimento a qualquer momento</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">📦 5. Portabilidade</h3>
                    <p className="text-gray-700 text-sm">Receber seus dados em formato estruturado (CSV, JSON)</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-bold text-gray-900">🔍 6. Informação sobre Compartilhamento</h3>
                    <p className="text-gray-700 text-sm">Saber com quem seus dados foram compartilhados (se aplicável)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-3">
                  📧 <strong>Para exercer esses direitos</strong>, envie um e-mail para: <a href="mailto:paulo.barros.70293@alunos.unialfa.com.br" className="text-blue-600 hover:underline">paulo.barros.70293@alunos.unialfa.com.br</a> com o assunto <strong>"Solicitação LGPD"</strong>.
                </p>
              </section>

              {/* Seção 8 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Cookie className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">8. Cookies e Tecnologias</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Nossa plataforma utiliza tecnologias básicas para funcionamento:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>LocalStorage</strong>: Para armazenar informações de sessão (nome, faixa etária) temporariamente no seu navegador</li>
                  <li><strong>Cookies essenciais</strong>: Apenas para manter sua sessão ativa durante o uso</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  ❌ <strong>NÃO</strong> utilizamos cookies de rastreamento, publicidade ou análise de terceiros.
                </p>
              </section>

              {/* Seção 9 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">9. Compartilhamento de Dados</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Seus dados <strong>NÃO</strong> são compartilhados com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>📚 <strong>Orientador do TCC</strong> (Prof. Yhury Silva Rezende) para fins de avaliação acadêmica</li>
                  <li>📊 <strong>Banca examinadora</strong> do TCC (dados anonimizados em gráficos/tabelas)</li>
                  <li>⚖️ <strong>Autoridades legais</strong>, se exigido por lei</li>
                </ul>
              </section>

              {/* Seção 10 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">10. Incidentes de Segurança</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, comunicaremos:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>✅ <strong>A você</strong>: Via e-mail, em até 72 horas</li>
                  <li>✅ <strong>À ANPD</strong>: Conforme Art. 48 da LGPD</li>
                </ul>
              </section>

              {/* Seção 11 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">11. Alterações na Política</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página, com a data de atualização no rodapé.
                </p>
              </section>

              {/* Seção 12 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">12. Contato</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Para dúvidas, solicitações ou exercício dos seus direitos:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-800">
                    <strong>Controlador de Dados:</strong> Paulo Henrique Pereira Silva Barros<br />
                    📧 <a href="mailto:paulo.barros.70293@alunos.unialfa.com.br" className="text-blue-600 hover:underline">paulo.barros.70293@alunos.unialfa.com.br</a><br />
                    🏫 Centro Universitário Alves Faria (UNIALFA)<br />
                    👨‍🏫 Orientador: Prof. Yhury Silva Rezende
                  </p>
                </div>
              </section>

              {/* Seção 13 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">13. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Se você acredita que seus direitos de proteção de dados foram violados, pode registrar uma reclamação na ANPD:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-800">
                    🌐 <strong>Site:</strong> <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.gov.br/anpd</a><br />
                    📧 <strong>E-mail:</strong> <a href="mailto:atendimento@anpd.gov.br" className="text-blue-600 hover:underline">atendimento@anpd.gov.br</a><br />
                    📞 <strong>Telefone:</strong> 0800-038-0098
                  </p>
                </div>
              </section>

              {/* Seção 14 - Lei Aplicável */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">14. Lei Aplicável</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Esta Política de Privacidade é regida pelas leis brasileiras, em especial pela <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong> e pelo <strong>Marco Civil da Internet (Lei 12.965/2014)</strong>.
                </p>
              </section>

              {/* Rodapé */}
              <div className="text-center pt-6 border-t">
                <p className="text-sm text-gray-500">
                  Última atualização: Novembro de 2025<br />
                  Este documento está em conformidade com a LGPD (Lei 13.709/2018)<br />
                  Versão 1.0
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacidade;
