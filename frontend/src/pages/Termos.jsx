import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, FileText, Lock, Mail, UserCheck, Clock, Database, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Termos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <Card className="mb-8">
          <CardHeader className="text-center border-b">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-gray-900">
              Termo de Consentimento Livre e Esclarecido
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Projeto de Pesquisa: Segurança Cibernética para Idosos
            </p>
          </CardHeader>
          <CardContent className="prose max-w-none p-8">
            <div className="space-y-6">
              {/* Seção 1 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Apresentação do Projeto</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Este projeto faz parte do Trabalho de Conclusão de Curso (TCC) do curso de <strong>Sistemas de Informação</strong> do <strong>Centro Universitário Alves Faria (UNIALFA)</strong>, orientado pelo <strong>Prof. Yhury Silva Rezende</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Pesquisador responsável:</strong> Paulo Henrique Pereira Silva Barros<br />
                  <strong>E-mail:</strong> <a href="mailto:paulo.barros.70293@alunos.unialfa.com.br" className="text-blue-600 hover:underline">paulo.barros.70293@alunos.unialfa.com.br</a>
                </p>
              </section>

              {/* Seção 2 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Objetivo do Projeto</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  O objetivo deste projeto é <strong>educar e conscientizar pessoas idosas sobre segurança digital</strong>, oferecendo conteúdos educativos, simulações interativas e quizzes para avaliar o conhecimento adquirido.
                </p>
              </section>

              {/* Seção 3 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Dados Coletados</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Para fins de pesquisa acadêmica, coletaremos os seguintes dados:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Nome ou apelido</strong> (identificação opcional)</li>
                  <li><strong>Faixa etária</strong></li>
                  <li><strong>Respostas do quiz</strong> (pré-teste e pós-teste)</li>
                  <li><strong>Respostas da pesquisa</strong> (experiências com segurança digital)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  ❌ <strong>NÃO</strong> coletamos CPF, RG, endereço, telefone ou dados bancários.
                </p>
              </section>

              {/* Seção 4 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Uso dos Dados</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Os dados coletados serão utilizados <strong>exclusivamente para fins de pesquisa acadêmica</strong> (TCC) e poderão ser apresentados em forma de estatísticas agregadas (gráficos, tabelas) sem identificação pessoal.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  ✅ Seus dados <strong>NÃO</strong> serão vendidos, compartilhados com terceiros ou utilizados para fins comerciais.
                </p>
              </section>

              {/* Seção 5 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Direitos do Participante (LGPD)</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  De acordo com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Acessar</strong> seus dados coletados</li>
                  <li><strong>Corrigir</strong> informações incompletas ou incorretas</li>
                  <li><strong>Solicitar a exclusão</strong> de seus dados</li>
                  <li><strong>Revogar o consentimento</strong> a qualquer momento</li>
                  <li><strong>Portabilidade</strong>: receber seus dados em formato estruturado</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  📧 Para exercer esses direitos, entre em contato pelo e-mail: <a href="mailto:paulo.barros.70293@alunos.unialfa.com.br" className="text-blue-600 hover:underline">paulo.barros.70293@alunos.unialfa.com.br</a>
                </p>
              </section>

              {/* Seção 6 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Segurança dos Dados</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Seus dados são armazenados em um banco de dados seguro com:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>🔒 <strong>Criptografia HTTPS</strong> na transmissão</li>
                  <li>🔑 <strong>Controle de acesso</strong> restrito ao pesquisador e orientador</li>
                  <li>💾 <strong>Backups regulares</strong> para evitar perda de dados</li>
                </ul>
              </section>

              {/* Seção 7 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Armazenamento e Retenção</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Os dados serão mantidos por <strong>até 2 anos</strong> para fins de análise acadêmica e publicação do TCC. Após esse período, os dados serão anonimizados ou excluídos.
                </p>
              </section>

              {/* Seção 8 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">8. Participação Voluntária</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A participação nesta pesquisa é <strong>totalmente voluntária</strong>. Você pode:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>❌ <strong>Recusar-se</strong> a participar sem qualquer penalidade</li>
                  <li>🛑 <strong>Interromper</strong> sua participação a qualquer momento</li>
                  <li>📧 <strong>Solicitar a exclusão</strong> de seus dados a qualquer momento</li>
                </ul>
              </section>

              {/* Seção 9 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">9. Contato</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Para dúvidas, solicitações ou exercício dos seus direitos sob a LGPD, entre em contato:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-2">
                  <p className="text-gray-800">
                    <strong>Paulo Henrique Pereira Silva Barros</strong><br />
                    📧 <a href="mailto:paulo.barros.70293@alunos.unialfa.com.br" className="text-blue-600 hover:underline">paulo.barros.70293@alunos.unialfa.com.br</a><br />
                    🏫 Centro Universitário Alves Faria (UNIALFA)<br />
                    👨‍🏫 Orientador: Prof. Yhury Silva Rezende
                  </p>
                </div>
              </section>

              {/* Seção 10 */}
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">10. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Se você acredita que seus direitos de proteção de dados foram violados, pode registrar uma reclamação na ANPD:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mt-2">
                  <p className="text-gray-800">
                    🌐 <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.gov.br/anpd</a><br />
                    📧 <a href="mailto:atendimento@anpd.gov.br" className="text-blue-600 hover:underline">atendimento@anpd.gov.br</a>
                  </p>
                </div>
              </section>

              {/* Seção 11 - Declaração */}
              <section className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Declaração de Consentimento</h2>
                <p className="text-gray-800 leading-relaxed">
                  ✅ Ao marcar a caixa de seleção no formulário, você declara que:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4 mt-3">
                  <li>Leu e compreendeu este Termo de Consentimento</li>
                  <li>Concorda em participar voluntariamente desta pesquisa</li>
                  <li>Autoriza a coleta e uso de seus dados para fins acadêmicos (TCC)</li>
                  <li>Entende que pode revogar este consentimento a qualquer momento</li>
                </ul>
              </section>

              {/* Rodapé */}
              <div className="text-center pt-6 border-t">
                <p className="text-sm text-gray-500">
                  Última atualização: Novembro de 2025<br />
                  Este documento está em conformidade com a LGPD (Lei 13.709/2018)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Termos;
