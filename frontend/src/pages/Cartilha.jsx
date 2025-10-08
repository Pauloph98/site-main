import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen, 
  Shield, 
  AlertTriangle, 
  Users, 
  Lock, 
  HardDrive, 
  GraduationCap,
  Download,
  Printer,
  Share2,
  CheckCircle,
  ArrowRight,
  Home,
  Phone,
  Mail,
  X
} from 'lucide-react';

const CartilhaCompleta = () => {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    // Gera PDF do conteúdo atual da página
    window.print();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Cartilha de Segurança Digital para Idosos',
        text: 'Confira este guia completo de segurança digital!',
        url: window.location.href,
      });
    } else {
      // Fallback - copia o link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  const handleClose = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-4 print:py-2 print:bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 print:px-4">
        
        {/* Barra de Ações Superior */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 py-4 mb-8 border-b border-gray-200 print:hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center lg:text-left">
              <BookOpen className="h-8 sm:h-10 w-8 sm:w-10 text-blue-600 flex-shrink-0" />
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Cartilha de Segurança Digital</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full lg:w-auto">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto min-h-[60px]" 
                onClick={handleDownloadPDF}
              >
                <Download className="mr-3 h-6 w-6" />
                Baixar PDF
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 px-6 py-4 text-lg sm:text-xl font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto min-h-[60px]" 
                onClick={handlePrint}
              >
                <Printer className="mr-3 h-6 w-6" />
                Imprimir
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-red-300 hover:border-red-400 text-red-600 hover:text-red-700 px-4 py-4 rounded-xl font-bold min-h-[60px]" 
                onClick={handleClose}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Fechar</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Header Principal */}
        <div className="text-center mb-16 print:mb-8">
          <div className="inline-flex items-center gap-4 mb-6 print:mb-4">
            <BookOpen className="h-16 w-16 text-blue-600 print:h-10 print:w-10" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 print:text-3xl leading-tight">
                Cartilha de Segurança Digital
              </h1>
              <p className="text-xl text-blue-600 font-semibold mt-2 print:text-lg">Para Idosos</p>
            </div>
          </div>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed print:text-xl print:mb-4">
            Um guia completo e simplificado para navegar com segurança no mundo digital
          </p>
        </div>

        {/* 1. Introdução */}
        <Card className="mb-12 print:mb-6 shadow-xl border-2 border-blue-200 print:shadow-none print:border-gray-400">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg py-6 print:py-4 print:bg-white print:text-black">
            <CardTitle className="flex items-center gap-4 text-3xl print:text-2xl font-bold">
              <Home className="h-10 w-10 print:h-8 print:w-8" />
              1. Introdução à Segurança Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 print:space-y-4 p-8 print:p-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-500 p-8 rounded-xl print:p-4 print:bg-gray-100">
              <p className="text-2xl leading-relaxed text-gray-800 print:text-lg font-medium">
                🌐 A internet trouxe inúmeros benefícios para nossas vidas: facilita a comunicação com familiares, 
                permite fazer compras sem sair de casa, oferece entretenimento e acesso a informações. 
                No entanto, também apresenta riscos que exigem cuidados especiais.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 print:gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-300 print:p-4 print:bg-gray-50 print:border-gray-400">
                <h3 className="text-3xl font-bold text-green-800 mb-6 print:text-xl print:mb-3 print:text-black">🎯 Objetivos desta Cartilha</h3>
                <ul className="space-y-4 text-green-800 print:text-black print:space-y-2">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-1 flex-shrink-0 print:h-6 print:w-6" />
                    <span className="text-xl font-medium print:text-lg">Identificar golpes antes de cair neles</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-1 flex-shrink-0 print:h-6 print:w-6" />
                    <span className="text-xl font-medium print:text-lg">Proteger seus dados pessoais e financeiros</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-1 flex-shrink-0 print:h-6 print:w-6" />
                    <span className="text-xl font-medium print:text-lg">Usar a tecnologia com segurança e confiança</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-1 flex-shrink-0 print:h-6 print:w-6" />
                    <span className="text-xl font-medium print:text-lg">Reconhecer ameaças comuns na internet</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-300 print:p-4 print:bg-gray-50 print:border-gray-400">
                <h3 className="text-3xl font-bold text-yellow-800 mb-6 print:text-xl print:mb-3 print:text-black">📖 Como Usar Esta Cartilha</h3>
                <ul className="space-y-4 text-yellow-800 print:text-black print:space-y-2">
                  <li className="text-xl font-medium print:text-lg">📚 Leia cada seção com calma e atenção</li>
                  <li className="text-xl font-medium print:text-lg">🎯 Pratique as dicas apresentadas no seu dia a dia</li>
                  <li className="text-xl font-medium print:text-lg">📖 Mantenha esta cartilha sempre à mão para consulta</li>
                  <li className="text-xl font-medium print:text-lg">👥 Compartilhe com familiares e amigos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Phishing */}
        <Card className="mb-12 print:mb-6 shadow-xl border-2 border-red-200 print:shadow-none print:border-gray-400">
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg py-6 print:py-4 print:bg-white print:text-black">
            <CardTitle className="flex items-center gap-4 text-3xl print:text-2xl font-bold">
              <AlertTriangle className="h-10 w-10 print:h-8 print:w-8" />
              2. O que é Phishing? (Golpes por E-mail)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 print:space-y-4 p-8 print:p-4">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-8 border-red-500 p-8 rounded-xl print:p-4 print:bg-gray-100">
              <h3 className="text-3xl font-bold text-red-800 mb-4 print:text-xl print:mb-2 print:text-black">🎣 O que é Phishing?</h3>
              <p className="text-2xl text-red-800 print:text-lg print:text-black font-medium leading-relaxed">
                <strong>Phishing é como a "pescaria" de golpistas na internet.</strong> Eles "iscam" suas vítimas 
                com mensagens falsas que parecem verdadeiras para roubar dados pessoais, senhas e informações bancárias.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-8 border-yellow-500 p-8 rounded-xl print:p-4 print:bg-gray-100">
              <h3 className="text-3xl font-bold text-yellow-800 mb-6 print:text-xl print:mb-3 print:text-black">🔍 Como Identificar um Phishing</h3>
              <div className="grid lg:grid-cols-2 gap-8 print:gap-4">
                <div className="bg-red-100 p-6 rounded-xl border-2 border-red-300 print:p-4 print:bg-gray-100">
                  <h4 className="text-2xl font-bold text-red-800 mb-4 print:text-lg print:mb-2 print:text-black">⚠️ Sinais de PERIGO:</h4>
                  <ul className="space-y-4 text-red-800 print:text-black print:space-y-2">
                    <li className="flex items-start gap-3">
                      <Badge variant="destructive" className="text-sm font-bold px-3 py-1 print:bg-gray-300 print:text-black">URGÊNCIA</Badge>
                      <span className="text-lg font-medium print:text-base">"Sua conta será bloqueada em 24 horas!"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="destructive" className="text-sm font-bold px-3 py-1 print:bg-gray-300 print:text-black">E-MAIL FALSO</Badge>
                      <span className="text-lg font-medium print:text-base">banco.verificacao@email.com ❌</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="destructive" className="text-sm font-bold px-3 py-1 print:bg-gray-300 print:text-black">LINK SUSPEITO</Badge>
                      <span className="text-lg font-medium print:text-base">banco-seguro.tk ❌</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-100 p-6 rounded-xl border-2 border-green-300 print:p-4 print:bg-gray-100">
                  <h4 className="text-2xl font-bold text-green-800 mb-4 print:text-lg print:mb-2 print:text-black">✅ Como é o CORRETO:</h4>
                  <ul className="space-y-4 text-green-800 print:text-black print:space-y-2">
                    <li className="text-lg font-medium print:text-base">🏦 santander.com.br ✅</li>
                    <li className="text-lg font-medium print:text-base">🔐 Bancos NUNCA pedem senha por email</li>
                    <li className="text-lg font-medium print:text-base">🆔 Órgãos públicos não solicitam CPF por SMS</li>
                    <li className="text-lg font-medium print:text-base">📞 Sempre confirme por telefone oficial</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-8 border-green-500 p-8 rounded-xl print:p-4 print:bg-gray-100">
              <h3 className="text-3xl font-bold text-green-800 mb-6 print:text-xl print:mb-3 print:text-black">🛡️ Como Se Proteger do Phishing</h3>
              <div className="grid lg:grid-cols-3 gap-6 print:gap-3 print:grid-cols-1">
                <div className="bg-white p-6 rounded-xl border-2 border-green-300 shadow-lg print:p-3 print:shadow-none">
                  <div className="text-4xl mb-4 text-center print:hidden">🔍</div>
                  <h4 className="text-xl font-bold text-center text-green-800 mb-2 print:text-lg print:text-left print:text-black">SEMPRE Verifique</h4>
                  <p className="text-center text-lg print:text-left print:text-base">Confira o remetente antes de abrir</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-green-300 shadow-lg print:p-3 print:shadow-none">
                  <div className="text-4xl mb-4 text-center print:hidden">🚫</div>
                  <h4 className="text-xl font-bold text-center text-green-800 mb-2 print:text-lg print:text-left print:text-black">NUNCA Clique</h4>
                  <p className="text-center text-lg print:text-left print:text-base">Não clique em links suspeitos</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-green-300 shadow-lg print:p-3 print:shadow-none">
                  <div className="text-4xl mb-4 text-center print:hidden">📞</div>
                  <h4 className="text-xl font-bold text-center text-green-800 mb-2 print:text-lg print:text-left print:text-black">CONFIRME por Telefone</h4>
                  <p className="text-center text-lg print:text-left print:text-base">Use sempre o número oficial do banco</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Malware */}
        <Card className="mb-12 print:mb-6 shadow-xl border-2 border-orange-200 print:shadow-none print:border-gray-400">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-lg py-6 print:py-4 print:bg-white print:text-black">
            <CardTitle className="flex items-center gap-4 text-3xl print:text-2xl font-bold">
              <Shield className="h-10 w-10 print:h-8 print:w-8" />
              3. O que é Malware?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 print:space-y-3">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-orange-800 mb-3 print:text-lg print:mb-2 print:text-black">🦠 Definição</h3>
              <p className="text-lg text-orange-700 print:text-base print:text-black">
                <strong>Malware é como um "vírus digital"</strong> que infecta seu computador ou celular 
                para causar danos, roubar informações ou pedir dinheiro.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-red-800 mb-4 print:text-lg print:mb-2 print:text-black">🦠 Principais Tipos de Malware</h3>
              <div className="grid md:grid-cols-2 gap-4 print:gap-2 print:grid-cols-1">
                <div className="space-y-4 print:space-y-2">
                  <div className="p-3 bg-white rounded border print:p-2">
                    <h4 className="font-medium text-red-700 mb-2 print:text-black">🦠 Vírus de Computador</h4>
                    <p className="text-sm text-red-600 print:text-black">Infectam arquivos e se multiplicam quando executados</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded border print:p-2">
                    <h4 className="font-medium text-red-700 mb-2 print:text-black">🔒 Ransomware</h4>
                    <p className="text-sm text-red-600 print:text-black">Sequestra seus arquivos e exige pagamento</p>
                    <Badge variant="destructive" className="mt-2 text-xs print:bg-gray-200 print:text-black">NUNCA pague o resgate!</Badge>
                  </div>
                </div>
                
                <div className="space-y-4 print:space-y-2">
                  <div className="p-3 bg-white rounded border print:p-2">
                    <h4 className="font-medium text-red-700 mb-2 print:text-black">🕵️ Spyware</h4>
                    <p className="text-sm text-red-600 print:text-black">Espiona suas atividades e rouba senhas</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded border print:p-2">
                    <h4 className="font-medium text-red-700 mb-2 print:text-black">🐎 Trojan</h4>
                    <p className="text-sm text-red-600 print:text-black">Disfarça-se de programa legítimo</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Engenharia Social */}
        <Card className="mb-8 print:mb-4 print:shadow-none print:border-gray-300">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-600 text-2xl print:text-xl">
              <Users className="h-6 w-6" />
              4. Engenharia Social
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 print:space-y-3">
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-purple-800 mb-3 print:text-lg print:mb-2 print:text-black">🎭 Definição</h3>
              <p className="text-lg text-purple-700 print:text-base print:text-black">
                <strong>Engenharia Social é a arte de enganar pessoas</strong> usando manipulação psicológica 
                ao invés de tecnologia. É como um "golpe do coração e da mente".
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800 mb-4 print:text-lg print:mb-2 print:text-black">📱 Golpes Mais Comuns no WhatsApp</h3>
              <div className="space-y-4 print:space-y-2">
                <div className="p-4 bg-white rounded-lg border border-green-200 print:p-2">
                  <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2 print:text-black">
                    🎯 Golpe do Parente em Apuros
                    <Badge variant="destructive" className="text-xs print:bg-gray-200 print:text-black">MUITO COMUM</Badge>
                  </h4>
                  <p className="text-sm text-gray-600 print:text-black mb-2">
                    <strong>Como funciona:</strong> "Oi vô/vó, troquei de número, preciso de ajuda urgente..."
                  </p>
                  <p className="text-sm text-green-700 print:text-black">
                    <strong>Proteção:</strong> SEMPRE ligue para o número antigo do parente
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-green-200 print:p-2">
                  <h4 className="font-medium text-green-700 mb-2 print:text-black">💰 Falsa Promoção/Prêmio</h4>
                  <p className="text-sm text-gray-600 print:text-black mb-2">
                    <strong>Como funciona:</strong> "Parabéns! Você ganhou R$ 50.000!"
                  </p>
                  <p className="text-sm text-green-700 print:text-black">
                    <strong>Proteção:</strong> Nunca clique em promoções desconhecidas
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-green-200 print:p-2">
                  <h4 className="font-medium text-green-700 mb-2 print:text-black">🔒 Clonagem de WhatsApp</h4>
                  <p className="text-sm text-gray-600 print:text-black mb-2">
                    <strong>Como funciona:</strong> "Preciso do código que chegou no seu WhatsApp"
                  </p>
                  <p className="text-sm text-green-700 print:text-black">
                    <strong>Proteção:</strong> NUNCA compartilhe códigos com ninguém
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Métodos de Proteção */}
        <Card className="mb-8 print:mb-4 print:shadow-none print:border-gray-300">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2 text-green-600 text-2xl print:text-xl">
              <Shield className="h-6 w-6" />
              5. Métodos de Proteção
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 print:space-y-3">
            <div className="bg-green-50 border-l-4 border-green-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800 mb-4 print:text-lg print:mb-2 print:text-black">🛡️ Antivírus - Sua Primeira Defesa</h3>
              <div className="grid md:grid-cols-2 gap-4 print:gap-2 print:grid-cols-1">
                <div>
                  <h4 className="font-medium text-green-700 mb-2 print:text-black">O que o Antivírus Faz:</h4>
                  <ul className="text-sm text-green-600 space-y-1 print:text-black print:space-y-0">
                    <li>• Detecta e remove vírus automaticamente</li>
                    <li>• Bloqueia sites maliciosos</li>
                    <li>• Verifica emails e downloads</li>
                    <li>• Protege contra ransomware</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg print:p-2">
                  <h4 className="font-medium text-green-700 mb-2 print:text-black">Recomendados (Gratuitos):</h4>
                  <ul className="text-sm text-green-600 space-y-1 print:text-black print:space-y-0">
                    <li>• <strong>Windows Defender</strong> (já vem no Windows) ⭐</li>
                    <li>• Avast Free Antivirus</li>
                    <li>• AVG Antivirus Free</li>
                    <li>• Bitdefender Antivirus Free</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 print:text-lg print:mb-2 print:text-black">✅ Checklist de Proteção Essencial</h3>
              <div className="grid md:grid-cols-2 gap-4 print:gap-2 print:grid-cols-1">
                <div className="space-y-2 print:space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Antivírus instalado e ativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Atualizações automáticas ativadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Firewall do Windows ativo</span>
                  </div>
                </div>
                <div className="space-y-2 print:space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Navegador sempre atualizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Autenticação duas etapas no WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Backup regular dos dados importantes</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Senhas Seguras */}
        <Card className="mb-8 print:mb-4 print:shadow-none print:border-gray-300">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-600 text-2xl print:text-xl">
              <Lock className="h-6 w-6" />
              6. Senhas Seguras
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 print:space-y-3">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 print:text-lg print:mb-2 print:text-black">🔐 Como Criar Senhas Seguras</h3>
              <div className="grid md:grid-cols-2 gap-6 print:gap-3 print:grid-cols-1">
                <div>
                  <h4 className="font-medium text-blue-700 mb-3 print:text-black">✅ Características Obrigatórias:</h4>
                  <ul className="text-sm text-blue-600 space-y-1 print:text-black print:space-y-0">
                    <li>• <strong>12+ caracteres:</strong> Mínimo absoluto</li>
                    <li>• <strong>Letras maiúsculas:</strong> A, B, C, D...</li>
                    <li>• <strong>Letras minúsculas:</strong> a, b, c, d...</li>
                    <li>• <strong>Números:</strong> 0, 1, 2, 3...</li>
                    <li>• <strong>Símbolos:</strong> !, @, #, $, %...</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-3 print:text-black">❌ NUNCA Use:</h4>
                  <ul className="text-sm text-red-600 space-y-1 print:text-black print:space-y-0">
                    <li>• Datas de nascimento</li>
                    <li>• Nomes de parentes ou pets</li>
                    <li>• Sequências: 123456, abcdef</li>
                    <li>• Palavras do dicionário</li>
                    <li>• A mesma senha em várias contas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800 mb-4 print:text-lg print:mb-2 print:text-black">🎯 Método Prático: Frase Pessoal</h3>
              <div className="p-4 bg-white rounded-lg border border-green-200 print:p-2">
                <div className="space-y-3 print:space-y-1">
                  <div>
                    <strong className="text-green-700 print:text-black">Passo 1:</strong>
                    <span className="text-gray-600 print:text-black"> Pense em uma frase pessoal</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded text-sm print:p-1 print:bg-gray-100">
                    <div><strong>Frase:</strong> "Meu primeiro neto nasceu em 2018 e se chama João!"</div>
                  </div>
                  <div>
                    <strong className="text-green-700 print:text-black">Passo 2:</strong>
                    <span className="text-gray-600 print:text-black"> Pegue a primeira letra de cada palavra</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded text-sm print:p-1 print:bg-gray-100">
                    <div><strong>Resultado:</strong> MpNnE2018&sChJ!</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7. Backup de Arquivos */}
        <Card className="mb-8 print:mb-4 print:shadow-none print:border-gray-300">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2 text-indigo-600 text-2xl print:text-xl">
              <HardDrive className="h-6 w-6" />
              7. Backup de Arquivos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 print:space-y-3">
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3 print:text-lg print:mb-2 print:text-black">💾 Definição</h3>
              <p className="text-lg text-indigo-700 print:text-base print:text-black">
                <strong>Backup é como um seguro de vida para seus arquivos digitais.</strong> Ele garante que você 
                nunca perca suas fotos de família, documentos importantes e memórias preciosas.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-green-800 mb-4 print:text-lg print:mb-2 print:text-black">☁️ Métodos Simples de Backup</h3>
              <div className="grid md:grid-cols-3 gap-4 print:gap-2 print:grid-cols-1">
                <div className="text-center p-3 bg-white rounded border print:text-left print:p-2">
                  <h5 className="font-medium text-green-700 print:text-black">Google Drive</h5>
                  <p className="text-xs text-green-600 mt-1 print:text-black">15GB grátis</p>
                  <Badge variant="outline" className="mt-2 print:bg-gray-200 print:text-black">Recomendado ⭐</Badge>
                </div>
                <div className="text-center p-3 bg-white rounded border print:text-left print:p-2">
                  <h5 className="font-medium text-green-700 print:text-black">iCloud</h5>
                  <p className="text-xs text-green-600 mt-1 print:text-black">5GB grátis (iPhone)</p>
                  <Badge variant="outline" className="mt-2 print:bg-gray-200 print:text-black">iPhone</Badge>
                </div>
                <div className="text-center p-3 bg-white rounded border print:text-left print:p-2">
                  <h5 className="font-medium text-green-700 print:text-black">OneDrive</h5>
                  <p className="text-xs text-green-600 mt-1 print:text-black">5GB grátis</p>
                  <Badge variant="outline" className="mt-2 print:bg-gray-200 print:text-black">Windows</Badge>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 print:text-lg print:mb-2 print:text-black">⏰ Frequência do Backup</h3>
              <div className="grid md:grid-cols-3 gap-4 print:gap-2 print:grid-cols-1">
                <div className="p-3 bg-white rounded border text-center print:p-2 print:text-left">
                  <h4 className="font-medium text-blue-700 mb-2 print:text-black">📱 Celular</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1 print:text-lg print:text-black">AUTOMÁTICO</div>
                  <p className="text-xs text-blue-600 print:text-black">Configure uma vez</p>
                </div>
                <div className="p-3 bg-white rounded border text-center print:p-2 print:text-left">
                  <h4 className="font-medium text-blue-700 mb-2 print:text-black">💻 Documentos</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1 print:text-lg print:text-black">SEMANAL</div>
                  <p className="text-xs text-blue-600 print:text-black">Toda sexta-feira</p>
                </div>
                <div className="p-3 bg-white rounded border text-center print:p-2 print:text-left">
                  <h4 className="font-medium text-blue-700 mb-2 print:text-black">📷 Fotos Especiais</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1 print:text-lg print:text-black">IMEDIATO</div>
                  <p className="text-xs text-blue-600 print:text-black">Após eventos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Framework de Segurança */}
        <Card className="mb-8 print:mb-4 print:shadow-none print:border-gray-300">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2 text-teal-600 text-2xl print:text-xl">
              <GraduationCap className="h-6 w-6" />
              8. Framework de Segurança Digital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 print:space-y-3">
            <div className="bg-teal-50 border-l-4 border-teal-400 p-6 print:p-3 print:bg-gray-50">
              <p className="text-lg text-teal-700 print:text-base print:text-black">
                Baseado em pesquisas acadêmicas, este framework apresenta os <strong>7 pilares fundamentais</strong> 
                para uma navegação segura na internet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 print:gap-2 print:grid-cols-1">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 print:p-2 print:bg-gray-50">
                <h4 className="font-semibold text-blue-700 mb-2 print:text-black">1. 💡 Conhecimento Técnico</h4>
                <p className="text-sm text-blue-600 print:text-black">Entenda como funcionam os golpes e ameaças</p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500 print:p-2 print:bg-gray-50">
                <h4 className="font-semibold text-red-700 mb-2 print:text-black">2. ⚠️ Consciência do Impacto</h4>
                <p className="text-sm text-red-600 print:text-black">Conheça as consequências reais dos ataques</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500 print:p-2 print:bg-gray-50">
                <h4 className="font-semibold text-orange-700 mb-2 print:text-black">3. 🚨 Severidade da Ameaça</h4>
                <p className="text-sm text-orange-600 print:text-black">Classifique riscos: crítico, alto, médio</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500 print:p-2 print:bg-gray-50">
                <h4 className="font-semibold text-green-700 mb-2 print:text-black">4. 🎮 Controlabilidade</h4>
                <p className="text-sm text-green-600 print:text-black">Você tem o poder de se proteger!</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500 print:p-2 print:bg-gray-50">
                <h4 className="font-semibold text-purple-700 mb-2 print:text-black">5. 🎯 Possibilidade de Ataque</h4>
                <p className="text-sm text-purple-600 print:text-black">Avalie seu nível de risco pessoal</p>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500 print:p-2 print:bg-gray-50">
                <h4 className="font-semibold text-indigo-700 mb-2 print:text-black">6. 📚 Educação Contínua</h4>
                <p className="text-sm text-indigo-600 print:text-black">Mantenha-se sempre atualizado</p>
              </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg print:p-3 print:bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-700 mb-4 print:text-lg print:mb-2 print:text-black">7. ✅ Prática e Aplicação</h3>
              <h4 className="font-medium mb-4 print:mb-2">Checklist Diário de Segurança:</h4>
              <div className="grid md:grid-cols-2 gap-4 print:gap-2 print:grid-cols-1">
                <div className="space-y-2 print:space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Verifico o remetente de emails</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Confirmo links antes de clicar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Verifico se o site é HTTPS</span>
                  </div>
                </div>
                <div className="space-y-2 print:space-y-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Não compartilho senhas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Uso Wi-Fi seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Faço backup regular</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contatos de Emergência */}
        <Card className="mb-8 print:mb-4 print:shadow-none print:border-gray-300">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-600 text-2xl print:text-xl">
              <Phone className="h-6 w-6" />
              Contatos de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 print:gap-3 print:grid-cols-1">
              <div className="text-center p-4 bg-red-50 rounded-lg print:p-2 print:bg-gray-50 print:text-left">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-2 print:hidden" />
                <h4 className="font-semibold text-red-700 print:text-black">Se Foi Vítima de Golpe</h4>
                <p className="text-sm text-red-600 mt-2 print:text-black">Ligue IMEDIATAMENTE para seu banco</p>
                <Badge variant="destructive" className="mt-2 print:bg-gray-200 print:text-black">190 - Polícia</Badge>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg print:p-2 print:bg-gray-50 print:text-left">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2 print:hidden" />
                <h4 className="font-semibold text-blue-700 print:text-black">Denúncia Online</h4>
                <p className="text-sm text-blue-600 mt-2 print:text-black">Delegacia de Crimes Eletrônicos</p>
                <Badge variant="outline" className="mt-2 print:bg-gray-200 print:text-black">197 - Disque Denúncia Polícia Civil</Badge>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg print:p-2 print:bg-gray-50 print:text-left">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2 print:hidden" />
                <h4 className="font-semibold text-green-700 print:text-black">Ajuda da Família</h4>
                <p className="text-sm text-green-600 mt-2 print:text-black">Converse com filhos e netos</p>
                <Badge variant="outline" className="mt-2 print:bg-gray-200 print:text-black">Não tenha vergonha</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to action final */}
        <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white print:hidden">
          <h3 className="text-2xl font-semibold mb-4">🎯 Parabéns por chegar até aqui!</h3>
          <p className="text-lg mb-6">Você agora tem o conhecimento necessário para navegar com segurança no mundo digital.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100" size="lg" onClick={handleDownloadPDF}>
              <Download className="mr-2 h-5 w-5" />
              Baixar Cartilha Completa
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" size="lg" onClick={handleQuizClick}>
              <ArrowRight className="mr-2 h-5 w-5" />
              Fazer Quiz de Conhecimento
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartilhaCompleta;