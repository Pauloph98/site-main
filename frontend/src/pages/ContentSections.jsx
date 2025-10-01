import React from 'react';
import { Shield, Users, AlertTriangle, BookOpen, HardDrive, Globe, ShoppingCart, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

// Seção de Métodos de Proteção
export const ProtectionContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-green-600" />
          <span>Métodos de Proteção Essenciais</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">🛡️ Antivírus e Firewall</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Instale um antivírus confiável e mantenha-o atualizado</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Configure o firewall do Windows ou use um dedicado</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Faça verificações periódicas do sistema</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">🔄 Atualizações Automáticas</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Ative atualizações automáticas do sistema operacional</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Mantenha navegadores sempre atualizados</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Atualize aplicativos regularmente</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Cuidados Essenciais no Dia a Dia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">💳 Transações Online</h4>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Sempre verifique se o site é seguro (https://)</li>
              <li>• Nunca salve dados bancários no navegador</li>
              <li>• Use redes privadas para operações bancárias</li>
              <li>• Feche sempre a sessão após usar</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 mb-3">📱 Redes Sociais</h4>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• Configure privacidade adequadamente</li>
              <li>• Não aceite desconhecidos</li>
              <li>• Evite compartilhar informações pessoais</li>
              <li>• Desconfie de ofertas muito vantajosas</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">📧 E-mails</h4>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li>• Desconfie de e-mails urgentes</li>
              <li>• Verifique o remetente cuidadosamente</li>
              <li>• Não clique em links suspeitos</li>
              <li>• Confirme informações por telefone</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>🏠 Segurança Doméstica Digital</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-indigo-800">Wi-Fi Doméstico</h4>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <ul className="space-y-2 text-indigo-700">
                <li>• Use senha WPA3 ou WPA2 forte</li>
                <li>• Altere o nome padrão da rede</li>
                <li>• Troque a senha do roteador regularmente</li>
                <li>• Desabilite WPS se não usar</li>
                <li>• Mantenha firmware do roteador atualizado</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-teal-800">Dispositivos Conectados</h4>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <ul className="space-y-2 text-teal-700">
                <li>• Configure senhas em todos os dispositivos</li>
                <li>• Atualize smart TVs e aparelhos IoT</li>
                <li>• Desconecte dispositivos que não usa</li>
                <li>• Use rede separada para dispositivos IoT</li>
                <li>• Monitore quem está conectado</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

// Seção de Senhas Seguras
export const PasswordsContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span>Como Criar Senhas Seguras</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">🔐 Regras de Ouro para Senhas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">✅ FAÇA:</h4>
              <ul className="space-y-2 text-green-600">
                <li>• Use pelo menos 12 caracteres</li>
                <li>• Combine maiúsculas e minúsculas</li>
                <li>• Inclua números e símbolos (!@#$%)</li>
                <li>• Use frases longas como "MinhaVó@2024Ama+Gatos!"</li>
                <li>• Uma senha diferente para cada conta</li>
                <li>• Use gerenciador de senhas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-3">❌ NÃO FAÇA:</h4>
              <ul className="space-y-2 text-red-600">
                <li>• Use informações pessoais (nascimento, nome)</li>
                <li>• Repita a mesma senha em várias contas</li>
                <li>• Use sequências (123456, abcdef)</li>
                <li>• Use palavras do dicionário</li>
                <li>• Compartilhe senhas com terceiros</li>
                <li>• Anote senhas em papel visível</li>
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>💡 Técnicas para Criar Senhas Memoráveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">1. Método da Frase</h4>
                <p className="text-yellow-700 mb-2">Crie uma frase significativa e transforme em senha:</p>
                <div className="bg-white rounded p-3 border">
                  <p className="text-sm">"Meu neto João tem 15 anos e adora pizza!" → <code className="bg-gray-100 px-2 py-1 rounded">MnJt15aeap!</code></p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">2. Método da Substituição</h4>
                <p className="text-green-700 mb-2">Substitua letras por números e símbolos similares:</p>
                <div className="bg-white rounded p-3 border">
                  <p className="text-sm">"Casa Segura 2024" → <code className="bg-gray-100 px-2 py-1 rounded">C@s@$3gur@2024!</code></p>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">3. Método das Primeiras Letras</h4>
                <p className="text-purple-700 mb-2">Use primeira letra de cada palavra de uma música ou frase:</p>
                <div className="bg-white rounded p-3 border">
                  <p className="text-sm">"Parabéns pra você, nesta data querida" → <code className="bg-gray-100 px-2 py-1 rounded">Ppv,ndq!2024</code></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

// Seção de Backup - NOVA
export const BackupContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <HardDrive className="h-6 w-6 text-indigo-600" />
          <span>Backup - Protegendo Seus Arquivos</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Por que o Backup é Essencial?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Riscos sem Backup:</h4>
              <ul className="space-y-2 text-red-600">
                <li>• <strong>Ransomware:</strong> Vírus que bloqueia seus arquivos</li>
                <li>• <strong>Falha do HD:</strong> Computador para de funcionar</li>
                <li>• <strong>Roubo/Perda:</strong> Dispositivo roubado ou perdido</li>
                <li>• <strong>Exclusão acidental:</strong> Apagar arquivos importantes</li>
                <li>• <strong>Pane elétrica:</strong> Queima componentes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Com Backup você tem:</h4>
              <ul className="space-y-2 text-green-600">
                <li>• <strong>Tranquilidade:</strong> Arquivos sempre seguros</li>
                <li>• <strong>Recuperação rápida:</strong> Restaura tudo em minutos</li>
                <li>• <strong>Proteção total:</strong> Contra qualquer problema</li>
                <li>• <strong>Histórico:</strong> Versões antigas dos arquivos</li>
                <li>• <strong>Acesso remoto:</strong> Arquivos em qualquer lugar</li>
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>🔄 Regra 3-2-1 do Backup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">3</div>
                  <h4 className="font-semibold text-blue-800 mb-2">3 Cópias</h4>
                  <p className="text-blue-700 text-sm">Tenha sempre 3 cópias dos seus arquivos importantes (original + 2 backups)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">2</div>
                  <h4 className="font-semibold text-green-800 mb-2">2 Locais</h4>
                  <p className="text-green-700 text-sm">Use 2 tipos de armazenamento diferentes (HD externo + nuvem)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">1</div>
                  <h4 className="font-semibold text-purple-800 mb-2">1 Remoto</h4>
                  <p className="text-purple-700 text-sm">Mantenha 1 cópia em local diferente (nuvem ou casa de familiar)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>☁️ Opções de Backup para Idosos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-800">✅ Mais Fáceis (Recomendadas)</h4>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">Google Drive</h5>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• <strong>Gratuito:</strong> 15GB</li>
                    <li>• <strong>Automático:</strong> Sincroniza sozinho</li>
                    <li>• <strong>Fácil:</strong> Arrasta e solta arquivos</li>
                    <li>• <strong>Seguro:</strong> Google cuida da segurança</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">OneDrive (Microsoft)</h5>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• <strong>Integrado:</strong> Já vem no Windows</li>
                    <li>• <strong>Gratuito:</strong> 5GB</li>
                    <li>• <strong>Automático:</strong> Backup das pastas</li>
                    <li>• <strong>Office:</strong> Sincroniza documentos</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">HD Externo</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Simples:</strong> Conectar e copiar</li>
                    <li>• <strong>Rápido:</strong> Backup em minutos</li>
                    <li>• <strong>Offline:</strong> Não precisa de internet</li>
                    <li>• <strong>Barato:</strong> Compra uma vez só</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-blue-800">🎯 O que Fazer Backup</h4>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">📂 Arquivos Essenciais</h5>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• <strong>Documentos:</strong> RG, CPF, contratos</li>
                    <li>• <strong>Fotos:</strong> Família, viagens, memórias</li>
                    <li>• <strong>Vídeos:</strong> Momentos especiais</li>
                    <li>• <strong>Contatos:</strong> Telefones importantes</li>
                    <li>• <strong>E-mails:</strong> Conversas importantes</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">⚠️ NÃO precisa backup</h5>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Programas instalados</li>
                    <li>• Sistema Windows</li>
                    <li>• Arquivos temporários</li>
                    <li>• Cache do navegador</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">⏰ Frequência</h5>
                  <ul className="space-y-1 text-indigo-700 text-sm">
                    <li>• <strong>Diário:</strong> Arquivos importantes</li>
                    <li>• <strong>Semanal:</strong> Fotos e documentos</li>
                    <li>• <strong>Mensal:</strong> Backup completo</li>
                    <li>• <strong>Automático:</strong> Configure e esqueça</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📱 Backup do Celular</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3">📱 Android (Google)</h4>
                <ol className="space-y-2 text-green-700 text-sm">
                  <li><strong>1.</strong> Vá em Configurações</li>
                  <li><strong>2.</strong> Procure "Backup" ou "Google"</li>
                  <li><strong>3.</strong> Ative "Backup automático"</li>
                  <li><strong>4.</strong> Escolha "Fazer backup agora"</li>
                </ol>
                <p className="text-green-600 text-xs mt-3">✅ Salva: contatos, fotos, apps, configurações</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3">🍎 iPhone (iCloud)</h4>
                <ol className="space-y-2 text-blue-700 text-sm">
                  <li><strong>1.</strong> Vá em Ajustes</li>
                  <li><strong>2.</strong> Toque no seu nome (Apple ID)</li>
                  <li><strong>3.</strong> Escolha "iCloud"</li>
                  <li><strong>4.</strong> Ative "Backup do iCloud"</li>
                </ol>
                <p className="text-blue-600 text-xs mt-3">✅ Salva: contatos, fotos, apps, mensagens</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚨 Recuperação de Desastres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-4">Se algo der errado:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 mb-2">🔥 Ransomware:</h5>
                  <ul className="space-y-1 text-red-600 text-sm">
                    <li>• NÃO pague o resgate</li>
                    <li>• Desconecte da internet</li>
                    <li>• Restaure do backup offline</li>
                    <li>• Procure ajuda técnica</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-700 mb-2">💻 HD queimou:</h5>
                  <ul className="space-y-1 text-orange-600 text-sm">
                    <li>• Compre HD novo</li>
                    <li>• Instale sistema limpo</li>
                    <li>• Restaure backup da nuvem</li>
                    <li>• Tudo volta ao normal</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold">💡 Lembre-se: Com backup, qualquer problema tem solução!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);

export default {
  ProtectionContent,
  PasswordsContent,
  BackupContent
};