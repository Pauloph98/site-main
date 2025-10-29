import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Shield, Users, BookOpen, ArrowRight, HardDrive, HelpCircle, GraduationCap, Play, X, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog';
import TutorialViewer from '../components/TutorialViewer';
import SimulationViewer from '../components/SimulationViewer';
import mockData, { tutorials } from '../mock';

const simulations = mockData.simulations;

// Componente auxiliar para exibir o tutorial dentro da aba
const TutorialSection = ({ tutorialId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tutorial = tutorials.find(t => t.id === tutorialId);

  if (!tutorial) return null;

  return (
    <div className="mt-6">
      {!isOpen && (
        <div className="bg-blue-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between border-2 border-dashed border-blue-200 gap-4">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-800">Aprenda o passo a passo: {tutorial.title}</p>
              <p className="text-sm text-gray-600 hidden sm:block">{tutorial.description}</p>
            </div>
          </div>
          <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto flex-shrink-0">Ver Tutorial</Button>
        </div>
      )}
      {isOpen && <TutorialViewer tutorial={tutorial} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

// Componente auxiliar para exibir a simulação dentro da aba
const SimulationSection = ({ simulationId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const simulation = simulations.find(s => s.id === simulationId);

  if (!simulation) return null;

  return (
    <div className="mt-6">
      {!isOpen && (
        <div className="bg-green-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between border-2 border-dashed border-green-200 gap-4">
          <div className="flex items-center">
            <Play className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-800">Pratique com simulação: {simulation.title}</p>
              <p className="text-sm text-gray-600 hidden sm:block">{simulation.description}</p>
            </div>
          </div>
          <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto flex-shrink-0 bg-green-600 hover:bg-green-700">Fazer Simulação</Button>
        </div>
      )}
      {isOpen && <SimulationViewer simulation={simulation} onClose={() => setIsOpen(false)} />}
    </div>
  );
};


const Content = () => {
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState('phishing');
  const [showTopPopup, setShowTopPopup] = useState(false);
  const [hasDonePreTest, setHasDonePreTest] = useState(false);

  useEffect(() => {
    const preTestFlag = localStorage.getItem('preTestCompleted') === 'true';
    setHasDonePreTest(preTestFlag);
    if (!preTestFlag) {
      setTimeout(() => setShowTopPopup(true), 1500);
    }
  }, []);

  const contentTypes = [
    { id: 'phishing', title: 'Phishing', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'malware', title: 'Malware', icon: Shield, color: 'text-orange-600' },
    { id: 'social', title: 'Eng. Social', icon: Users, color: 'text-purple-600' },
    { id: 'protection', title: 'Proteção', icon: Shield, color: 'text-green-600' },
    { id: 'passwords', title: 'Senhas', icon: BookOpen, color: 'text-blue-600' },
    { id: 'backup', title: 'Backup', icon: HardDrive, color: 'text-indigo-600' },
    { id: 'incident', title: 'Incidentes', icon: AlertCircle, color: 'text-red-700' },
    { id: 'framework', title: 'Framework', icon: GraduationCap, color: 'text-teal-600' }
  ];

  const CtaCard = ({ icon: Icon, title, description, buttonText, link, colorClass, iconColorClass }) => (
    <div className={`mt-6 bg-gradient-to-r ${colorClass} p-6 rounded-lg`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white rounded-full shadow-md"><Icon className={`h-8 w-8 ${iconColorClass}`} /></div>
        <div><h3 className="text-lg font-semibold text-gray-800">{title}</h3><p className="text-sm text-gray-600">{description}</p></div>
        <Button className="ml-auto" onClick={() => navigate(link)}>{buttonText} <ArrowRight className="ml-2 h-4 w-4" /></Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <AlertDialog open={showTopPopup} onOpenChange={setShowTopPopup}>
        <AlertDialogContent className="max-w-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center text-2xl">
              <HelpCircle className="mr-2 h-8 w-8 text-blue-500" />
              Que tal medir seu conhecimento?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-black text-lg leading-relaxed pt-2">
              Vimos que ainda não fez a nossa avaliação inicial. Recomendamos fazê-la agora para que, no final, possa comparar e ver o quanto aprendeu!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-base px-6 py-3">
              Continuar a estudar
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => navigate('/quiz')}
              className="text-base px-6 py-3"
            >
              Fazer Avaliação Inicial
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h1 className="text-4xl font-bold text-gray-900 mb-4">Conteúdo Educativo</h1><p className="text-xl text-gray-600 max-w-3xl mx-auto">Aprenda sobre os principais riscos da internet e como se proteger.</p></div>
        <Tabs value={selectedContent} onValueChange={setSelectedContent} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-8 mb-8">{contentTypes.map((type) => (<TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2 text-xs sm:text-sm"><type.icon className={`h-4 w-4 ${type.color}`} /><span>{type.title}</span></TabsTrigger>))}</TabsList>
          
          <TabsContent value="phishing">
            <Card>
              <CardHeader><CardTitle>O que é Phishing?</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>O phishing consiste no envio de mensagens fraudulentas por meio de canais como e-mail, SMS ou redes sociais, que simulam comunicações oficiais de instituições financeiras, órgãos públicos ou outras organizações confiáveis.</p>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Importante:</h4>
                    <p className="text-red-700 text-sm">Idosos podem ser mais vulneráveis a golpes de phishing devido à menor familiaridade com tecnologias digitais e práticas de segurança online.</p>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800">Como Identificar:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Mensagens com tom de urgência excessiva</li>
                    <li>Remetentes com domínios suspeitos (ex: banco.verificacao@email.com)</li>
                    <li>Links que não correspondem ao site oficial</li>
                    <li>Solicitação de dados bancários por email ou SMS</li>
                  </ul>
                </div>
                
                <TutorialSection tutorialId={5} />
                <SimulationSection simulationId={1} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="malware">
            <Card>
              <CardHeader><CardTitle>O que é Malware?</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-lg">Malware é um programa malicioso projetado para infiltrar-se em dispositivos digitais sem consentimento, causando danos que vão desde roubo de dados pessoais até sequestro completo do sistema.</p>
                  
                  {/* Tipos de Malware */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">🦠 Principais Tipos de Malware</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Vírus de Computador</h4>
                        <p className="text-sm text-red-600 mb-3">Infectam arquivos e se multiplicam quando executados</p>
                        
                        <h4 className="font-medium text-red-700 mb-2">Ransomware</h4>
                        <p className="text-sm text-red-600 mb-3">Criptografa arquivos e exige pagamento para liberá-los</p>
                        
                        <h4 className="font-medium text-red-700 mb-2">Spyware</h4>
                        <p className="text-sm text-red-600">Monitora atividades e rouba informações pessoais</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Trojan (Cavalo de Troia)</h4>
                        <p className="text-sm text-red-600 mb-3">Disfarça-se de programa legítimo mas contém código malicioso</p>
                        
                        <h4 className="font-medium text-red-700 mb-2">Adware</h4>
                        <p className="text-sm text-red-600 mb-3">Exibe propagandas indesejadas e rastreia hábitos</p>
                        
                        <h4 className="font-medium text-red-700 mb-2">Keylogger</h4>
                        <p className="text-sm text-red-600">Registra tudo que você digita, incluindo senhas</p>
                      </div>
                    </div>
                  </div>

                  {/* Como se espalha */}
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">📱 Como o Malware se Espalha?</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Anexos de Email:</span>
                          <span className="text-sm text-gray-600"> Documentos infectados enviados por criminosos</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Downloads Falsos:</span>
                          <span className="text-sm text-gray-600"> Programas "grátis" de sites duvidosos</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Pen Drives Infectados:</span>
                          <span className="text-sm text-gray-600"> Dispositivos USB com arquivos maliciosos</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Sites Maliciosos:</span>
                          <span className="text-sm text-gray-600"> Páginas falsas que instalam malware automaticamente</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium">Apps Falsos:</span>
                          <span className="text-sm text-gray-600"> Aplicativos disfarçados em lojas não oficiais</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sinais de Infecção */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">🚨 Sinais de que seu Dispositivo Pode Estar Infectado</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-yellow-700 mb-2">Comportamento Estranho:</h4>
                        <ul className="text-sm text-yellow-600 space-y-1">
                          <li>• Computador muito lento</li>
                          <li>• Programas que abrem sozinhos</li>
                          <li>• Pop-ups constantes</li>
                          <li>• Arquivos desaparecendo</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-700 mb-2">Atividade Suspeita:</h4>
                        <ul className="text-sm text-yellow-600 space-y-1">
                          <li>• Internet muito lenta</li>
                          <li>• Emails enviados sem sua permissão</li>
                          <li>• Senhas não funcionam mais</li>
                          <li>• Cobrança por compras não feitas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Dica Importante</h3>
                    <p className="text-blue-700 text-sm">Muitos usuários têm dificuldade em identificar quando seus dispositivos estão infectados por malware. A prevenção é sempre melhor que a correção!</p>
                  </div>
                </div>
                <TutorialSection tutorialId={8} />
                <SimulationSection simulationId={2} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader><CardTitle>O que é Engenharia Social?</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>Os ataques baseados na engenharia social utilizam estratégias de manipulação psicológica para induzir a vítima a adotar comportamentos que comprometem sua segurança digital. Ao explorar emoções como confiança, urgência e receio, esses golpes criam cenários ilusórios.</p>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">⚠️ Por que idosos são mais vulneráveis?</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Isolamento social e carência de apoio técnico</li>
                      <li>• Menor familiaridade com práticas digitais</li>
                      <li>• Tendência a confiar mais nas pessoas</li>
                      <li>• Dificuldade em reconhecer sinais de manipulação</li>
                    </ul>
                  </div>
                  
                  {/* Golpes do WhatsApp */}
                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">📱 Golpes Mais Comuns no WhatsApp</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-700 mb-2">🎯 Golpe do Parente em Apuros</h4>
                        <p className="text-sm text-green-600 mb-2"><strong>Como funciona:</strong> "Oi vô/vó, troquei de número, estou precisando de uma ajuda urgente..."</p>
                        <p className="text-sm text-green-600 mb-2"><strong>Red Flag:</strong> Pede dinheiro sem ligar ou se encontrar pessoalmente</p>
                        <div className="bg-green-100 p-2 rounded text-xs text-green-800">
                          <strong>Proteção:</strong> SEMPRE ligue para o número antigo do parente antes de enviar qualquer dinheiro
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-700 mb-2">💰 Falsa Promoção/Prêmio</h4>
                        <p className="text-sm text-green-600 mb-2"><strong>Como funciona:</strong> "Parabéns! Você ganhou R$ 50.000! Clique no link para receber"</p>
                        <p className="text-sm text-green-600 mb-2"><strong>Red Flag:</strong> Prêmios que você não se inscreveu ou participou</p>
                        <div className="bg-green-100 p-2 rounded text-xs text-green-800">
                          <strong>Proteção:</strong> Nunca clique em links de promoções desconhecidas
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-700 mb-2">🏦 Golpe do PIX Falso</h4>
                        <p className="text-sm text-green-600 mb-2"><strong>Como funciona:</strong> Enviam comprovante falso de PIX e pedem produto/serviço</p>
                        <p className="text-sm text-green-600 mb-2"><strong>Red Flag:</strong> Pressa para entregar antes da "confirmação bancária"</p>
                        <div className="bg-green-100 p-2 rounded text-xs text-green-800">
                          <strong>Proteção:</strong> Sempre confirme o dinheiro na sua conta antes de entregar qualquer coisa
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-700 mb-2">🔒 Clonagem de WhatsApp</h4>
                        <p className="text-sm text-green-600 mb-2"><strong>Como funciona:</strong> "Preciso do código que chegou no seu WhatsApp para um cadastro"</p>
                        <p className="text-sm text-green-600 mb-2"><strong>Red Flag:</strong> Qualquer pedido de código de verificação</p>
                        <div className="bg-green-100 p-2 rounded text-xs text-green-800">
                          <strong>Proteção:</strong> NUNCA compartilhe códigos de verificação com ninguém
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800">Principais Táticas de Manipulação:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <strong className="text-purple-600">Falso Suporte Técnico</strong>
                      <p className="text-sm text-gray-600">Ligações alegando problemas no computador</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <strong className="text-purple-600">Falso Gerente Bancário</strong>
                      <p className="text-sm text-gray-600">Se passam por funcionários do banco</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <strong className="text-purple-600">Pressão Temporal</strong>
                      <p className="text-sm text-gray-600">"Resolve agora ou perde a oportunidade"</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <strong className="text-purple-600">Apelo Emocional</strong>
                      <p className="text-sm text-gray-600">Exploram sentimentos de medo, urgência ou ganância</p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">🚨 Fique Atento</h3>
                    <p className="text-red-700 text-sm">Idosos são frequentemente alvos preferenciais de golpistas no WhatsApp devido à confiança que demonstram nas interações digitais. Sempre desconfie de mensagens urgentes pedindo dinheiro ou dados pessoais.</p>
                  </div>
                </div>
                
                <TutorialSection tutorialId={6} />
                <SimulationSection simulationId={3} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="protection">
            <Card>
              <CardHeader><CardTitle className="flex items-center space-x-2"><Shield className="h-6 w-6 text-green-600" /><span>Métodos de Proteção</span></CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-lg">A proteção digital eficaz combina ferramentas técnicas com boas práticas comportamentais. Cada camada de segurança adiciona proteção contra diferentes tipos de ameaças.</p>
                  
                  {/* Antivírus */}
                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">🛡️ Antivírus - Sua Primeira Defesa</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">O que o Antivírus Faz:</h4>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Detecta e remove vírus automaticamente</li>
                          <li>• Bloqueia sites maliciosos</li>
                          <li>• Verifica emails e downloads</li>
                          <li>• Protege contra ransomware</li>
                          <li>• Monitor atividades suspeitas em tempo real</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-2">Antivírus Recomendados (Gratuitos):</h4>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Windows Defender (já vem no Windows)</li>
                          <li>• Avast Free Antivirus</li>
                          <li>• AVG Antivirus Free</li>
                          <li>• Bitdefender Antivirus Free</li>
                        </ul>
                        <p className="text-xs text-green-500 mt-2">💡 O Windows Defender é suficiente para a maioria dos usuários</p>
                      </div>
                    </div>
                  </div>

                  {/* Atualizações */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">🔄 Atualizações - Fechando Brechas de Segurança</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-2">Por que Atualizar é Crucial?</h4>
                        <p className="text-sm text-blue-600 mb-3">Criminosos descobrem falhas nos programas constantemente. As atualizações corrigem essas falhas antes que sejam exploradas.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-1">📱 No Celular:</h5>
                            <ul className="text-xs text-blue-600 space-y-1">
                              <li>• Configurar atualizações automáticas</li>
                              <li>• Atualizar apps pela loja oficial</li>
                              <li>• Não adiar atualizações do sistema</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 mb-1">💻 No Computador:</h5>
                            <ul className="text-xs text-blue-600 space-y-1">
                              <li>• Ativar Windows Update automático</li>
                              <li>• Atualizar navegadores regularmente</li>
                              <li>• Manter programas importantes atualizados</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <h4 className="font-medium text-yellow-800 mb-2">⚠️ Cuidado com Atualizações Falsas!</h4>
                        <p className="text-sm text-yellow-700">Criminosos enviam pop-ups falsos dizendo "Seu computador precisa de atualização". NUNCA clique! Use apenas fontes oficiais.</p>
                      </div>
                    </div>
                  </div>

                  {/* Ferramentas Adicionais */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">🔧 Ferramentas Complementares</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-purple-700 mb-3">🔥 Firewall</h4>
                        <p className="text-sm text-purple-600 mb-2">Bloqueia conexões maliciosas tentando entrar no seu computador</p>
                        <div className="text-xs text-purple-500">✅ Windows já vem com firewall ativado</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-700 mb-3">🌐 Navegação Segura</h4>
                        <p className="text-sm text-purple-600 mb-2">Use navegadores atualizados com proteção contra sites maliciosos</p>
                        <div className="text-xs text-purple-500">✅ Chrome, Edge, Firefox têm proteção integrada</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-700 mb-3">📧 Filtro de Spam</h4>
                        <p className="text-sm text-purple-600 mb-2">Bloqueia emails maliciosos automaticamente</p>
                        <div className="text-xs text-purple-500">✅ Gmail, Outlook já filtram spam</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-700 mb-3">🔐 Autenticação de Duas Etapas</h4>
                        <p className="text-sm text-purple-600 mb-2">Adiciona uma segunda verificação além da senha</p>
                        <div className="text-xs text-purple-500">✅ Ative no WhatsApp, email e bancos</div>
                      </div>
                    </div>
                  </div>

                  {/* Checklist de Proteção */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">✅ Checklist de Proteção Essencial</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Antivírus instalado e ativo</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Atualizações automáticas ativadas</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Firewall do Windows ativo</span>
                        </label>
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Navegador sempre atualizado</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Autenticação duas etapas no WhatsApp</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Backup regular dos dados importantes</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <TutorialSection tutorialId={7} /> 
                <TutorialSection tutorialId={8} />
                <SimulationSection simulationId={5} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="passwords">
            <Card>
                <CardHeader><CardTitle className="flex items-center space-x-2"><BookOpen className="h-6 w-6 text-blue-600" /><span>Senhas Seguras</span></CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-lg">Uma senha forte é sua primeira e mais importante linha de defesa. Ela protege suas contas, dados pessoais e informações financeiras contra acesso não autorizado.</p>
                    
                    {/* Características de Senhas Fortes */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">🔐 Como Criar Senhas Realmente Seguras</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-blue-700 mb-3">✅ Características Obrigatórias:</h4>
                          <ul className="text-sm text-blue-600 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="font-medium min-w-fit">12+ caracteres:</span>
                              <span>Mínimo absoluto para resistir ataques</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium min-w-fit">Letras maiúsculas:</span>
                              <span>A, B, C, D...</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium min-w-fit">Letras minúsculas:</span>
                              <span>a, b, c, d...</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium min-w-fit">Números:</span>
                              <span>0, 1, 2, 3...</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium min-w-fit">Símbolos:</span>
                              <span>!, @, #, $, %...</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-700 mb-3">❌ NUNCA Use:</h4>
                          <ul className="text-sm text-blue-600 space-y-2">
                            <li>• Datas de nascimento (sua ou família)</li>
                            <li>• Nomes de parentes ou pets</li>
                            <li>• Sequências: 123456, abcdef</li>
                            <li>• Palavras do dicionário</li>
                            <li>• Informações pessoais óbvias</li>
                            <li>• A mesma senha em várias contas</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Métodos de Criação */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">🎯 Métodos Práticos para Criar Senhas Memoráveis</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-700 mb-2">1. Método da Frase</h4>
                          <p className="text-sm text-green-600 mb-2">Use uma frase que só você conhece e transforme em senha:</p>
                          <div className="bg-green-100 p-3 rounded text-sm">
                            <div><strong>Frase:</strong> "Meu primeiro neto nasceu em 2018 e se chama João!"</div>
                            <div><strong>Senha:</strong> MpNnE2018&sChJ!</div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-700 mb-2">2. Método das Substituições</h4>
                          <p className="text-sm text-green-600 mb-2">Substitua letras por números e símbolos:</p>
                          <div className="bg-green-100 p-3 rounded text-sm">
                            <div><strong>Palavra:</strong> "CasaVermelha2024"</div>
                            <div><strong>Substituições:</strong> a → @, e → 3, o → 0</div>
                            <div><strong>Senha:</strong> C@s@V3rm3lh@2024!</div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-700 mb-2">3. Método da Música</h4>
                          <p className="text-sm text-green-600 mb-2">Use a primeira letra de cada palavra de uma música favorita:</p>
                          <div className="bg-green-100 p-3 rounded text-sm">
                            <div><strong>Música:</strong> "Parabéns pra você, nesta data querida..."</div>
                            <div><strong>Senha:</strong> PpV,nDq2024!</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gerenciadores de Senha */}
                    <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                      <h3 className="text-xl font-semibold text-purple-800 mb-4">🗝️ Gerenciadores de Senhas - A Solução Moderna</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">Vantagens:</h4>
                          <ul className="text-sm text-purple-600 space-y-1">
                            <li>• Cria senhas ultra-seguras automaticamente</li>
                            <li>• Lembra todas as senhas para você</li>
                            <li>• Preenche logins automaticamente</li>
                            <li>• Sincroniza entre dispositivos</li>
                            <li>• Você só precisa lembrar 1 senha principal</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium text-purple-700 mb-2">Opções Recomendadas:</h4>
                          <ul className="text-sm text-purple-600 space-y-1">
                            <li><strong>Google Senhas:</strong> Grátis, integrado ao Chrome</li>
                            <li><strong>Bitwarden:</strong> Grátis, muito seguro</li>
                            <li><strong>1Password:</strong> Pago, muito completo</li>
                            <li><strong>LastPass:</strong> Versão grátis limitada</li>
                          </ul>
                          <div className="bg-purple-100 p-2 rounded mt-3 text-xs text-purple-700">
                            💡 Recomendamos começar com o Google Senhas se usa Chrome
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Autenticação de Duas Etapas */}
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-orange-800 mb-4">🔒 Autenticação de Duas Etapas (2FA)</h3>
                      <p className="text-orange-700 mb-4">Mesmo com senha forte, adicione uma segunda camada de proteção:</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-3 bg-white rounded border border-orange-200">
                          <h4 className="font-medium text-orange-700 mb-2">📱 SMS</h4>
                          <p className="text-xs text-orange-600">Código enviado por mensagem de texto</p>
                          <div className="text-xs text-orange-500 mt-1">✅ Fácil de usar</div>
                        </div>
                        <div className="p-3 bg-white rounded border border-orange-200">
                          <h4 className="font-medium text-orange-700 mb-2">📧 Email</h4>
                          <p className="text-xs text-orange-600">Código enviado para seu email</p>
                          <div className="text-xs text-orange-500 mt-1">✅ Sempre disponível</div>
                        </div>
                        <div className="p-3 bg-white rounded border border-orange-200">
                          <h4 className="font-medium text-orange-700 mb-2">🔑 App Autenticador</h4>
                          <p className="text-xs text-orange-600">Google Authenticator, Microsoft Authenticator</p>
                          <div className="text-xs text-orange-500 mt-1">✅ Mais seguro</div>
                        </div>
                      </div>
                    </div>

                    {/* Estatísticas */}
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Cuidado com Senhas Fracas</h3>
                      <p className="text-red-700 text-sm">Muitos usuários ainda utilizam senhas fracas como "123456" ou datas de nascimento. Contas com senhas simples podem ser facilmente invadidas por programas automáticos.</p>
                    </div>
                  </div>
                  <TutorialSection tutorialId={1} />
                  <TutorialSection tutorialId={2} />
                  <SimulationSection simulationId={4} />
                </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backup">
            <Card>
                <CardHeader><CardTitle className="flex items-center space-x-2"><HardDrive className="h-6 w-6 text-indigo-600" /><span>Backup de Arquivos</span></CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-lg">Backup é como um seguro de vida para seus arquivos digitais. Ele garante que você nunca perca suas fotos de família, documentos importantes e memórias preciosas, mesmo se o pior acontecer.</p>
                    
                    {/* Por que fazer backup */}
                    <div className="bg-red-50 border-l-4 border-red-400 p-6">
                      <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Por que o Backup é ESSENCIAL?</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-red-700 mb-3">🚨 Principais Ameaças:</h4>
                          <ul className="text-sm text-red-600 space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="font-medium">Ransomware:</span>
                              <span>Criminosos criptografam seus arquivos e pedem resgate</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium">Falha do HD:</span>
                              <span>Discos rígidos quebram sem aviso</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium">Vírus:</span>
                              <span>Podem apagar ou corromper arquivos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium">Roubo/Perda:</span>
                              <span>Celular ou computador roubado/perdido</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-medium">Acidentes:</span>
                              <span>Derramou água, quedas, incêndios</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium text-red-700 mb-2">� Realidade Preocupante:</h4>
                          <p className="text-sm text-red-600 mb-3">A maioria dos usuários, especialmente idosos, nunca fizeram backup de suas fotos e documentos importantes, correndo o risco de perder memórias preciosas.</p>
                          <div className="bg-red-100 p-3 rounded">
                            <h5 className="text-xs font-medium text-red-800 mb-1">Exemplo Comum:</h5>
                            <p className="text-xs text-red-700">"Perdi anos de fotos da família quando o computador parou de funcionar. Não sabia que precisava fazer backup" - Situação frequente relatada</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* O que fazer backup */}
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-indigo-800 mb-4">📁 O que Você DEVE Guardar em Backup</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-indigo-700 mb-3">📱 No Celular:</h4>
                          <ul className="text-sm text-indigo-600 space-y-1">
                            <li>• Fotos e vídeos da família</li>
                            <li>• Contatos telefônicos</li>
                            <li>• Conversas importantes do WhatsApp</li>
                            <li>• Documentos escaneados (RG, CPF, etc.)</li>
                            <li>• Apps bancários (configurações)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-700 mb-3">💻 No Computador:</h4>
                          <ul className="text-sm text-indigo-600 space-y-1">
                            <li>• Documentos importantes (Word, PDF)</li>
                            <li>• Fotos e vídeos organizados</li>
                            <li>• Planilhas financeiras</li>
                            <li>• Emails importantes salvos</li>
                            <li>• Favoritos do navegador</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Métodos de Backup */}
                    <div className="bg-green-50 border-l-4 border-green-400 p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">☁️ Métodos Simples de Backup</h3>
                      <div className="space-y-4">
                        {/* Nuvem */}
                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-700 mb-3">1. Backup na Nuvem (Recomendado) ⭐</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-green-50 rounded">
                              <h5 className="font-medium text-green-700">Google Drive</h5>
                              <p className="text-xs text-green-600 mt-1">15GB grátis</p>
                              <p className="text-xs text-green-500">Para fotos e documentos</p>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded">
                              <h5 className="font-medium text-green-700">iCloud</h5>
                              <p className="text-xs text-green-600 mt-1">5GB grátis (iPhone)</p>
                              <p className="text-xs text-green-500">Automático no iPhone</p>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded">
                              <h5 className="font-medium text-green-700">OneDrive</h5>
                              <p className="text-xs text-green-600 mt-1">5GB grátis (Microsoft)</p>
                              <p className="text-xs text-green-500">Integrado ao Windows</p>
                            </div>
                          </div>
                          <div className="bg-green-100 p-3 rounded mt-3">
                            <p className="text-xs text-green-800"><strong>Vantagens:</strong> Automático, acessível de qualquer lugar, protegido contra incêndios/roubos</p>
                          </div>
                        </div>

                        {/* Pen Drive */}
                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-700 mb-3">2. Pen Drive/HD Externo</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-green-600 mb-2">✅ Vantagens:</h5>
                              <ul className="text-xs text-green-600 space-y-1">
                                <li>• Controle total dos arquivos</li>
                                <li>• Não depende de internet</li>
                                <li>• Barato (pen drive 32GB ~R$20)</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-orange-600 mb-2">⚠️ Cuidados:</h5>
                              <ul className="text-xs text-orange-600 space-y-1">
                                <li>• Pode ser perdido ou quebrar</li>
                                <li>• Lembrar de atualizar regularmente</li>
                                <li>• Guardar em local seguro</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Backup Duplo */}
                        <div className="p-4 bg-white rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-700 mb-3">3. Estratégia 3-2-1 (Profissional) 🏆</h4>
                          <div className="bg-green-100 p-3 rounded">
                            <p className="text-sm text-green-800 mb-2"><strong>Regra dos Especialistas:</strong></p>
                            <ul className="text-xs text-green-700 space-y-1">
                              <li><strong>3</strong> cópias dos arquivos importantes</li>
                              <li><strong>2</strong> tipos de mídia diferentes (nuvem + pen drive)</li>
                              <li><strong>1</strong> cópia fora de casa (nuvem ou casa de parente)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Frequência do Backup */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">⏰ Com que Frequência Fazer Backup?</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-3 bg-white rounded border border-blue-200 text-center">
                          <h4 className="font-medium text-blue-700 mb-2">📱 Celular</h4>
                          <div className="text-2xl font-bold text-blue-600 mb-1">AUTOMÁTICO</div>
                          <p className="text-xs text-blue-600">Configure uma vez e deixe o celular fazer sozinho</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-blue-200 text-center">
                          <h4 className="font-medium text-blue-700 mb-2">💻 Documentos</h4>
                          <div className="text-2xl font-bold text-blue-600 mb-1">SEMANAL</div>
                          <p className="text-xs text-blue-600">Toda sexta-feira, copie arquivos novos</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-blue-200 text-center">
                          <h4 className="font-medium text-blue-700 mb-2">📷 Fotos Especiais</h4>
                          <div className="text-2xl font-bold text-blue-600 mb-1">IMEDIATO</div>
                          <p className="text-xs text-blue-600">Após eventos importantes (aniversários, viagens)</p>
                        </div>
                      </div>
                    </div>

                    {/* Testando o Backup */}
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-3">🧪 Teste seu Backup!</h3>
                      <p className="text-yellow-700 text-sm mb-3">Um backup que não funciona é inútil. Teste regularmente:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-2">Como Testar:</h4>
                          <ul className="text-sm text-yellow-600 space-y-1">
                            <li>• Tente acessar arquivos da nuvem</li>
                            <li>• Abra fotos salvas no pen drive</li>
                            <li>• Verifique se backup está atualizado</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-2">Quando Testar:</h4>
                          <ul className="text-sm text-yellow-600 space-y-1">
                            <li>• Mensalmente, escolha um domingo</li>
                            <li>• Após adicionar arquivos importantes</li>
                            <li>• Antes de viagens longas</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">🎯 Comece HOJE!</h3>
                      <p className="mb-4">Não espere perder arquivos para começar. Escolha um método e comece agora:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <button className="bg-white text-indigo-600 px-4 py-2 rounded font-medium hover:bg-gray-100">
                          📱 Configurar Backup Automático do Celular
                        </button>
                        <button className="bg-white/20 text-white px-4 py-2 rounded font-medium hover:bg-white/30">
                          ☁️ Criar Conta no Google Drive
                        </button>
                      </div>
                    </div>
                  </div>
                  <TutorialSection tutorialId={3} />
                  <TutorialSection tutorialId={4} />
                  <SimulationSection simulationId={6} />
                </CardContent>
            </Card>
          </TabsContent>

          {/* Nova Aba: Protocolo de Resposta a Incidentes */}
          <TabsContent value="incident" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  Protocolo de Resposta a Incidentes para Idosos
                </CardTitle>
                <div className="text-sm text-gray-600 mt-2">
                  Guia prático e acessível com os passos imediatos após identificar um golpe cibernético
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Objetivo */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">🎯 Objetivo</h3>
                  <p className="text-red-700">
                    Orientar, de forma prática e acessível, os passos imediatos que devem ser tomados após a identificação de um golpe cibernético, visando minimizar prejuízos, preservar evidências e facilitar investigações.
                  </p>
                </div>

                {/* Cenários Comuns */}
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">⚠️ Cenários Comuns de Golpes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-orange-700">Golpes envolvendo Pix, boletos e cartões bancários</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-orange-700">Falsa central de atendimento bancário</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-orange-700">Clonagem de WhatsApp</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-orange-700">Suporte técnico fraudulento</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-orange-700">Instalação de aplicativos maliciosos</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-orange-700">Vazamento de dados pessoais</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo a Passo */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">⏰ Primeiras 24-48 Horas</h3>
                  <p className="text-red-100">Aja rapidamente! Cada minuto conta para minimizar os danos.</p>
                </div>

                {/* Passo 1 */}
                <div className="border-l-4 border-red-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">1️⃣ Interrupção e Preservação de Evidências</h3>
                  <div className="bg-white border border-red-200 rounded-lg p-5">
                    <h4 className="font-medium text-red-800 mb-3">📸 O que fazer IMEDIATAMENTE:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Encerre o contato:</strong> Pare imediatamente qualquer conversa com o golpista (telefone, WhatsApp, e-mail)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Tire prints (capturas de tela):</strong> Fotografe conversas, e-mails, perfis, links/QR Codes, números de telefone e comprovantes de transações (com data e hora visíveis)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Não reabra anexos suspeitos:</strong> Evite clicar novamente em links ou abrir arquivos enviados pelo golpista
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-red-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Anote tudo:</strong> Escreva quando ocorreu, como foi o contato, valores envolvidos e canais utilizados
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Passo 2 */}
                <div className="border-l-4 border-orange-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-orange-700">2️⃣ Contenção Técnica e Proteção de Senhas</h3>
                  <div className="bg-white border border-orange-200 rounded-lg p-5">
                    <h4 className="font-medium text-orange-800 mb-3">🔒 Proteção Urgente:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Altere TODAS as senhas:</strong> E-mail, redes sociais e especialmente contas bancárias
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Ative a verificação em duas etapas (2FA):</strong> Em todos os serviços disponíveis
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Encerre sessões ativas:</strong> Saia de todos os dispositivos e plataformas onde estava logado
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Remova apps de acesso remoto:</strong> Desinstale programas como AnyDesk, TeamViewer se não autorizados
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Execute antivírus:</strong> Faça uma varredura completa para eliminar possíveis ameaças
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>WhatsApp clonado:</strong> Ative o 2FA e recupere a conta diretamente pelo aplicativo
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Passo 3 */}
                <div className="border-l-4 border-yellow-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-yellow-700">3️⃣ Ação Bancária Imediata</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                    <h4 className="font-medium text-yellow-800 mb-3">🏦 Contate seu Banco AGORA:</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <p className="text-sm mb-2"><strong className="text-yellow-800">⚠️ IMPORTANTE:</strong> Use apenas canais oficiais (aplicativo ou telefone impresso no verso do cartão)</p>
                      </div>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-600 flex-shrink-0">✓</span>
                          <div>
                            <strong>Bloqueio preventivo:</strong> Solicite o bloqueio da conta ou cartão, se necessário
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-600 flex-shrink-0">✓</span>
                          <div>
                            <strong>Golpe com PIX:</strong> Peça a abertura do <strong>Mecanismo Especial de Devolução (MED)</strong> - disponível até 80 dias após a transação
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-600 flex-shrink-0">✓</span>
                          <div>
                            <strong>Boletos fraudulentos:</strong> Solicite contestação ao banco emissor
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-600 flex-shrink-0">✓</span>
                          <div>
                            <strong>Cartões:</strong> Conteste compras indevidas, cancele o cartão e solicite um novo
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Passo 4 */}
                <div className="border-l-4 border-blue-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-blue-700">4️⃣ Registro Policial</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <h4 className="font-medium text-blue-800 mb-3">👮 Boletim de Ocorrência:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Onde registrar:</strong> Delegacia Virtual do seu estado ou portal nacional
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>O que levar:</strong> Anexe todas as evidências coletadas (prints, anotações, comprovantes)
                        </div>
                      </li>
                    </ul>
                    <div className="bg-white p-3 rounded mt-3 border-l-4 border-blue-500">
                      <p className="text-xs text-blue-800"><strong>💡 Dica:</strong> O Boletim de Ocorrência é essencial para processos de ressarcimento junto ao banco e para investigações policiais.</p>
                    </div>
                  </div>
                </div>

                {/* Passo 5 */}
                <div className="border-l-4 border-purple-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-purple-700">5️⃣ Comunicação com Órgãos Competentes</h3>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                    <h4 className="font-medium text-purple-800 mb-3">📋 Busque Apoio Especializado:</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-medium text-purple-700 mb-2">🛡️ CERT.br (Vazamento de Dados)</h5>
                        <p className="text-sm text-purple-600">Notifique a empresa responsável e solicite medidas corretivas (bloqueios, troca de credenciais)</p>
                      </div>
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-medium text-purple-700 mb-2">🔐 ANPD (Dados Pessoais)</h5>
                        <p className="text-sm text-purple-600">Denuncie situações de tratamento indevido de dados pessoais</p>
                      </div>
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-medium text-purple-700 mb-2">🛒 Consumidor.gov.br</h5>
                        <p className="text-sm text-purple-600">Para conflitos com empresas relacionados ao golpe</p>
                      </div>
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-medium text-purple-700 mb-2">📱 Anatel (Telecomunicações)</h5>
                        <p className="text-sm text-purple-600">Fraudes envolvendo chip ou portabilidade indevida</p>
                      </div>
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-medium text-purple-700 mb-2">🤝 SaferNet</h5>
                        <p className="text-sm text-purple-600">Canal de ajuda sigiloso para apoio e orientação</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passo 6 */}
                <div className="border-l-4 border-green-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">6️⃣ Prevenção Pós-Incidente</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                    <h4 className="font-medium text-green-800 mb-3">🔄 Evite Novos Ataques:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Revogue acessos:</strong> Remova dispositivos desconhecidos de todas as contas
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Atualize tudo:</strong> Sistemas operacionais e aplicativos devem estar na última versão
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Avise seus contatos:</strong> Se houver risco de personificação (ex.: golpe do WhatsApp)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Configure alertas:</strong> Ative notificações de transações no app do banco
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Defina limites:</strong> Estabeleça valores máximos para PIX e transferências
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                        <div>
                          <strong>Bloqueio temporário:</strong> Use recursos de bloqueio de cartão quando não estiver usando
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Resumo Visual */}
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">📋 Checklist de Resposta Rápida</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 p-4 rounded">
                      <h4 className="font-bold mb-2">⚡ Primeiras Horas</h4>
                      <ul className="text-sm space-y-1">
                        <li>☑️ Parar contato</li>
                        <li>☑️ Tirar prints</li>
                        <li>☑️ Alterar senhas</li>
                        <li>☑️ Ligar para o banco</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 p-4 rounded">
                      <h4 className="font-bold mb-2">📱 Primeiro Dia</h4>
                      <ul className="text-sm space-y-1">
                        <li>☑️ Fazer B.O.</li>
                        <li>☑️ Solicitar MED (PIX)</li>
                        <li>☑️ Contestar no banco</li>
                        <li>☑️ Executar antivírus</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 p-4 rounded">
                      <h4 className="font-bold mb-2">🛡️ Dias Seguintes</h4>
                      <ul className="text-sm space-y-1">
                        <li>☑️ Denunciar órgãos</li>
                        <li>☑️ Avisar contatos</li>
                        <li>☑️ Configurar alertas</li>
                        <li>☑️ Atualizar sistemas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contatos Importantes */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">📞 Contatos Importantes (Salve Agora!)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <h4 className="font-medium text-blue-700 mb-2">🏦 Bancos (Emergência)</h4>
                      <p className="text-xs text-blue-600">Use o número no verso do seu cartão ou:</p>
                      <ul className="text-sm text-blue-600 mt-2 space-y-1">
                        <li>• Banco do Brasil: 4004-0001 / 0800 729 0001</li>
                        <li>• Caixa: 4004-0104 / 0800 726 0104</li>
                        <li>• Bradesco: 4002-5522 / 0800 704 8383</li>
                        <li>• Itaú: 4004-4828 / 0800 728 0728</li>
                        <li>• Santander: 4004-3535 / 0800 762 7777</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <h4 className="font-medium text-blue-700 mb-2">👮 Órgãos de Ajuda</h4>
                      <ul className="text-sm text-blue-600 space-y-2">
                        <li><strong>Delegacia Virtual:</strong> Busque pelo seu estado</li>
                        <li><strong>SaferNet:</strong> new.safernet.org.br/denuncie</li>
                        <li><strong>Consumidor.gov.br:</strong> consumidor.gov.br</li>
                        <li><strong>CERT.br:</strong> cert.br</li>
                        <li><strong>ANPD:</strong> gov.br/anpd</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mensagem Final */}
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-3">🎯 Lembre-se!</h3>
                  <p className="text-lg mb-2">Velocidade é essencial, mas não entre em pânico.</p>
                  <p className="text-white/90">Siga os passos com calma, peça ajuda de familiares ou amigos, e documente tudo. Você não está sozinho!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nova Aba: Framework de Conscientização */}
          <TabsContent value="framework" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Framework de Conscientização em Segurança Digital
                </CardTitle>
                <div className="text-sm text-gray-600 mt-2">
                  Baseado na pesquisa de Zulkipli et al. (2018) publicada no Journal of Cybersecurity Education - Framework dos 7 pilares para conscientização em segurança digital
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Pilar 1: Conhecimento */}
                <div className="border-l-4 border-blue-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-blue-700">1. Conhecimento Técnico</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">O que você precisa saber:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Como funcionam phishing, malware e golpes sociais</li>
                        <li>• Diferenças entre sites seguros (HTTPS) e inseguros</li>
                        <li>• Como reconhecer URLs falsas</li>
                        <li>• Importância de atualizações de segurança</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-blue-800 mb-2">Benefícios do Treinamento:</p>
                      <p className="text-sm text-blue-700">Usuários que recebem treinamento técnico estruturado demonstram maior capacidade de identificar tentativas de golpe e práticas maliciosas online.</p>
                    </div>
                  </div>
                </div>

                {/* Pilar 2: Consciência do Impacto */}
                <div className="border-l-4 border-red-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">2. Consciência do Impacto</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Consequências reais dos ataques:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Perda financeira (média de R$ 3.200 por golpe no Brasil)</li>
                        <li>• Roubo de identidade e documentos</li>
                        <li>• Chantagem com fotos e dados pessoais</li>
                        <li>• Impacto psicológico: ansiedade e depressão</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-red-800 mb-2">Caso Real Documentado:</p>
                      <p className="text-sm text-red-700">"Depois do golpe do PIX falso, não conseguia mais dormir. Perdi as economias de uma vida inteira" - Maria, 72 anos, RJ</p>
                    </div>
                  </div>
                </div>

                {/* Pilar 3: Severidade da Ameaça */}
                <div className="border-l-4 border-orange-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-orange-700">3. Severidade da Ameaça</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">CRÍTICO</div>
                      <div className="text-sm mt-2">Phishing bancário<br/>Ransomware<br/>Roubo de senhas</div>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">ALTO</div>
                      <div className="text-sm mt-2">Apps maliciosos<br/>Wi-Fi falso<br/>Golpes por WhatsApp</div>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-600">MÉDIO</div>
                      <div className="text-sm mt-2">Spam por email<br/>Anúncios falsos<br/>Ligações suspeitas</div>
                    </div>
                  </div>
                </div>

                {/* Pilar 4: Controlabilidade */}
                <div className="border-l-4 border-green-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">4. Controlabilidade - Você Tem o Poder!</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Ações que VOCÊ pode tomar agora:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">🛡️ Proteção Imediata:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>✅ Ativar autenticação em duas etapas no WhatsApp</li>
                          <li>✅ Usar senhas diferentes para cada conta</li>
                          <li>✅ Verificar sempre o remetente de emails</li>
                          <li>✅ Nunca clicar em links suspeitos</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">🔒 Proteção Avançada:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>✅ Fazer backup semanal de fotos importantes</li>
                          <li>✅ Manter apps sempre atualizados</li>
                          <li>✅ Usar apenas Wi-Fi conhecido e seguro</li>
                          <li>✅ Confirmar informações por telefone oficial</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pilar 5: Possibilidade de Ataque */}
                <div className="border-l-4 border-purple-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-purple-700">5. Possibilidade de ser Atacado</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Fatores de Risco por Idade:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded border border-purple-200">
                        <h5 className="font-medium text-purple-700 mb-1">60-65 anos</h5>
                        <p className="text-sm text-purple-600">Risco moderado - ainda mantêm familiaridade com tecnologia</p>
                      </div>
                      <div className="p-3 bg-white rounded border border-purple-200">
                        <h5 className="font-medium text-purple-700 mb-1">65-70 anos</h5>
                        <p className="text-sm text-purple-600">Risco aumentado - menor exposição às novas tecnologias</p>
                      </div>
                      <div className="p-3 bg-white rounded border border-purple-200">
                        <h5 className="font-medium text-purple-700 mb-1">Acima de 70 anos</h5>
                        <p className="text-sm text-purple-600">Maior risco - necessita apoio técnico especializado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pilar 6: Educação Contínua */}
                <div className="border-l-4 border-indigo-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-700">6. Educação Contínua</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Plano de Estudos Semanal:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm">Segunda: Revisar uma simulação</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm">Quarta: Ler um tutorial</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm">Sexta: Fazer o quiz</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-indigo-800 mb-2">Benefícios do Estudo Estruturado:</p>
                      <p className="text-sm text-indigo-700">O estudo regular com metodologia estruturada melhora significativamente a capacidade de identificar ameaças digitais comparado ao nível inicial.</p>
                    </div>
                  </div>
                </div>

                {/* Pilar 7: Prática Regular */}
                <div className="border-l-4 border-teal-500 pl-6 space-y-4">
                  <h3 className="text-xl font-semibold text-teal-700">7. Prática e Aplicação</h3>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="font-medium mb-4">Checklist Diário de Segurança:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Verifico o remetente antes de abrir emails</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Confirmo links antes de clicar</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Verifico se o site é HTTPS</span>
                        </label>
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Não compartilho senhas ou códigos</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Uso apenas Wi-Fi conhecido</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Faço backup das fotos importantes</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">🎯 Próximo Passo</h3>
                  <p className="mb-4">Agora que você conhece o framework, coloque em prática!</p>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                      onClick={() => navigate('/quiz')}
                    >
                      Fazer Quiz de Avaliação
                    </button>
                    <button 
                      className="bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30"
                      onClick={() => setSelectedContent('social')}
                    >
                      Praticar Simulações
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <AlertDialog><AlertDialogTrigger asChild><Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg">Pronto para Testar seu Conhecimento?<ArrowRight className="ml-2 h-5 w-5" /></Button></AlertDialogTrigger><AlertDialogContent>{hasDonePreTest ? (<><AlertDialogHeader><AlertDialogTitle>Ótimo trabalho!</AlertDialogTitle><AlertDialogDescription>Já completou a avaliação inicial. Agora é a hora de fazer o quiz final para testar o que aprendeu!</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Voltar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Quiz Final</AlertDialogAction></AlertDialogFooter></>) : (<><AlertDialogHeader><AlertDialogTitle>Vamos começar?</AlertDialogTitle><AlertDialogDescription>Para medir o seu progresso, o primeiro passo é fazer a nossa avaliação inicial.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Voltar</AlertDialogCancel><AlertDialogAction onClick={() => navigate('/quiz')}>Fazer Avaliação Inicial</AlertDialogAction></AlertDialogFooter></>)}</AlertDialogContent></AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Content;