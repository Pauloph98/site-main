import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Clock, User, Shield, Smartphone, Globe, Lock, Eye, EyeOff, Download, Settings, Wifi } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

export const Tutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const tutorialCategories = [
    {
      id: 'passwords',
      title: 'Senhas e Segurança',
      icon: Lock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
      description: 'Aprenda a criar e gerenciar senhas seguras'
    },
    {
      id: 'backup',
      title: 'Backup e Proteção',
      icon: Shield,
      color: 'text-green-600', 
      bgColor: 'bg-green-50 border-green-200',
      description: 'Proteja seus arquivos importantes'
    },
    {
      id: 'navigation',
      title: 'Navegação Segura',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200', 
      description: 'Navegue com segurança na internet'
    },
    {
      id: 'devices',
      title: 'Configuração de Dispositivos',
      icon: Smartphone,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 border-orange-200',
      description: 'Configure seus dispositivos com segurança'
    }
  ];

  const tutorials = [
    // CATEGORIA: SENHAS E SEGURANÇA
    {
      id: 1,
      category: 'passwords',
      title: 'Como Criar uma Senha Super Segura',
      difficulty: 'Fácil',
      duration: '5 min',
      description: 'Aprenda o passo a passo para criar senhas que ninguém consegue descobrir',
      icon: Lock,
      steps: [
        {
          title: 'Entenda o que torna uma senha segura',
          content: 'Uma senha segura deve ter pelo menos 12 caracteres e combinar diferentes tipos de caracteres.',
          details: [
            '✅ Pelo menos 12 caracteres (quanto mais, melhor)',
            '✅ Letras maiúsculas (A, B, C, D...)',
            '✅ Letras minúsculas (a, b, c, d...)',
            '✅ Números (1, 2, 3, 4...)',
            '✅ Símbolos especiais (!, @, #, $, %, &, *)',
            '❌ Não use seu nome, data de nascimento',
            '❌ Não use palavras do dicionário',
            '❌ Não use sequências como 123456'
          ],
          tip: '💡 Dica: Uma boa senha é como uma receita secreta - deve ter vários ingredientes!'
        },
        {
          title: 'Método da Frase Pessoal',
          content: 'Vamos criar uma senha usando uma frase que só você conhece.',
          details: [
            '1. Pense em uma frase pessoal. Exemplo: "Minha neta Laura tem 8 anos e adora sorvete"',
            '2. Pegue a primeira letra de cada palavra: "MnLt8aeaS"',
            '3. Adicione alguns símbolos: "MnLt8aeaS!"',
            '4. Adicione o ano atual: "MnLt8aeaS!2024"',
            '5. Pronto! Sua senha segura: "MnLt8aeaS!2024"'
          ],
          tip: '💡 Dica: Use frases que sejam especiais para você, mas que outros não saibam!'
        },
        {
          title: 'Teste sua senha',
          content: 'Vamos verificar se sua senha está realmente segura.',
          details: [
            '✓ Tem pelo menos 12 caracteres?',
            '✓ Tem letras maiúsculas e minúsculas?',
            '✓ Tem pelo menos um número?',
            '✓ Tem pelo menos um símbolo?',
            '✓ Não tem informações pessoais óbvias?',
            '✓ É diferente de outras senhas que você usa?'
          ],
          tip: '💡 Dica: Se respondeu SIM para tudo, parabéns! Sua senha está segura!'
        },
        {
          title: 'Onde anotar sua senha com segurança',
          content: 'Aprenda onde guardar suas senhas de forma segura.',
          details: [
            '✅ SEGURO: Gerenciador de senhas (Google Password Manager)',
            '✅ SEGURO: Caderno físico guardado em local seguro',
            '✅ SEGURO: Aplicativo de notas protegido por senha',
            '❌ PERIGOSO: Papel grudado no monitor',
            '❌ PERIGOSO: Arquivo no desktop chamado "senhas"',
            '❌ PERIGOSO: WhatsApp ou e-mail'
          ],
          tip: '💡 Dica: O gerenciador de senhas do Google é gratuito e muito seguro!'
        }
      ]
    },
    {
      id: 2,
      category: 'passwords',
      title: 'Configurar Autenticação em 2 Etapas (2FA)',
      difficulty: 'Médio',
      duration: '10 min',
      description: 'Adicione uma camada extra de segurança às suas contas',
      icon: Shield,
      steps: [
        {
          title: 'O que é Autenticação em 2 Etapas?',
          content: 'É como ter duas chaves para sua casa - mesmo que alguém descubra sua senha, ainda precisará do seu celular.',
          details: [
            '🔑 Primeira etapa: Sua senha (o que você sabe)',
            '📱 Segunda etapa: Código no celular (o que você tem)',
            '✅ Muito mais seguro que só senha',
            '✅ Gratuito na maioria dos serviços',
            '✅ Funciona mesmo sem internet (com app)'
          ],
          tip: '💡 Dica: É como ter um porteiro que sempre pergunta sua identidade!'
        },
        {
          title: 'Ativando no Google (Gmail)',
          content: 'Vamos ativar a verificação em 2 etapas na sua conta Google.',
          details: [
            '1. Abra www.google.com e clique no seu ícone (canto superior direito)',
            '2. Clique em "Gerenciar sua Conta do Google"',
            '3. No menu lateral, clique em "Segurança"',
            '4. Procure por "Verificação em duas etapas" e clique',
            '5. Clique no botão "Começar"',
            '6. Digite sua senha quando solicitado',
            '7. Adicione seu número de telefone',
            '8. Escolha receber SMS ou ligação',
            '9. Digite o código que receber',
            '10. Clique em "Ativar"'
          ],
          tip: '⚠️ Importante: Guarde os códigos de backup em local seguro!'
        },
        {
          title: 'Ativando no WhatsApp',
          content: 'Proteja seu WhatsApp com verificação em duas etapas.',
          details: [
            '1. Abra o WhatsApp',
            '2. Toque nos três pontinhos (⋮) no canto superior direito',
            '3. Vá em "Configurações"',
            '4. Toque em "Conta"',
            '5. Toque em "Verificação em duas etapas"',
            '6. Toque em "Ativar"',
            '7. Crie um PIN de 6 dígitos (que você lembre bem)',
            '8. Confirme o PIN digitando novamente',
            '9. Adicione um e-mail de recuperação (opcional)',
            '10. Toque em "Salvar"'
          ],
          tip: '💡 Dica: Escolha um PIN que seja fácil para você, mas difícil para outros!'
        },
        {
          title: 'Testando a segurança',
          content: 'Vamos verificar se tudo está funcionando corretamente.',
          details: [
            '1. Faça logout da sua conta',
            '2. Tente fazer login novamente',
            '3. Digite sua senha normalmente',
            '4. Aguarde o código chegar no seu celular',
            '5. Digite o código quando solicitado',
            '6. Se conseguir entrar, está funcionando!',
            '7. Se tiver problemas, use os códigos de backup'
          ],
          tip: '🎉 Parabéns! Agora sua conta está muito mais segura!'
        }
      ]
    },

    // CATEGORIA: BACKUP E PROTEÇÃO
    {
      id: 3,
      category: 'backup',
      title: 'Fazendo Backup no Google Drive',
      difficulty: 'Fácil',
      duration: '8 min',
      description: 'Proteja suas fotos e documentos importantes na nuvem',
      icon: Shield,
      steps: [
        {
          title: 'Criando sua conta no Google Drive',
          content: 'Se você já tem Gmail, já tem Google Drive! Vamos acessar.',
          details: [
            '1. Abra seu navegador (Chrome, Firefox, etc.)',
            '2. Digite: drive.google.com',
            '3. Faça login com sua conta do Gmail',
            '4. Se não tem Gmail, clique em "Criar conta"',
            '5. Você ganha 15GB grátis para usar!',
            '6. Explore a interface - é bem simples!'
          ],
          tip: '💡 Dica: 15GB é espaço para milhares de fotos e documentos!'
        },
        {
          title: 'Fazendo upload de fotos importantes',
          content: 'Vamos salvar suas fotos mais preciosas na nuvem.',
          details: [
            '1. No Google Drive, clique no botão "+ Novo"',
            '2. Escolha "Upload de arquivos" ou "Upload de pasta"',
            '3. Navegue até onde estão suas fotos no computador',
            '4. Selecione as fotos que quer fazer backup',
            '5. Clique em "Abrir" - o upload começará automaticamente',
            '6. Aguarde a barra de progresso completar',
            '7. Suas fotos agora estão seguras na nuvem!'
          ],
          tip: '📸 Dica: Comece pelas fotos mais importantes - família, documentos!'
        },
        {
          title: 'Organizando seus arquivos',
          content: 'Vamos criar pastas para organizar tudo direitinho.',
          details: [
            '1. Clique em "+ Novo" e escolha "Pasta"',
            '2. Dê um nome, como "Fotos da Família"',
            '3. Repita para criar pastas como:',
            '   • "Documentos Importantes"',
            '   • "Fotos de Viagem"', 
            '   • "Receitas Favoritas"',
            '4. Arraste arquivos para as pastas certas',
            '5. Clique e arraste para mover arquivos'
          ],
          tip: '📁 Dica: Organizar facilita encontrar depois!'
        },
        {
          title: 'Configurando backup automático',
          content: 'Configure o backup automático para não esquecer nunca mais.',
          details: [
            '1. Baixe o aplicativo "Backup e Sincronização" do Google',
            '2. Instale no seu computador',
            '3. Faça login com sua conta Google',
            '4. Escolha quais pastas quer fazer backup automático',
            '5. Marque "Fotos", "Documentos", "Área de Trabalho"',
            '6. Clique em "Iniciar"',
            '7. Agora tudo é salvo automaticamente!'
          ],
          tip: '🔄 Dica: Com backup automático, você nunca mais perde nada!'
        }
      ]
    },
    {
      id: 4,
      category: 'backup',
      title: 'Backup do Celular (Android/iPhone)',
      difficulty: 'Fácil',
      duration: '6 min',
      description: 'Proteja contatos, fotos e aplicativos do seu celular',
      icon: Smartphone,
      steps: [
        {
          title: 'Backup no Android (Google)',
          content: 'Vamos configurar o backup automático do seu Android.',
          details: [
            '1. Abra "Configurações" no seu celular',
            '2. Procure por "Sistema" ou "Backup"',
            '3. Toque em "Backup" ou "Backup do Google"',
            '4. Ative "Fazer backup dos meus dados"',
            '5. Verifique se sua conta Google está selecionada',
            '6. Toque em "Fazer backup agora"',
            '7. Aguarde o processo terminar',
            '8. Pronto! Seu celular está protegido'
          ],
          tip: '🤖 Android salva: apps, contatos, SMS, fotos, configurações!'
        },
        {
          title: 'Backup no iPhone (iCloud)',
          content: 'Configure o backup automático do seu iPhone.',
          details: [
            '1. Abra "Ajustes" no seu iPhone',
            '2. Toque no seu nome (parte superior)',
            '3. Toque em "iCloud"',
            '4. Toque em "Backup do iCloud"',
            '5. Ative "Backup do iCloud"',
            '6. Toque em "Fazer backup agora"',
            '7. Mantenha conectado no Wi-Fi',
            '8. Aguarde o backup completar'
          ],
          tip: '🍎 iPhone salva: apps, fotos, mensagens, configurações!'
        },
        {
          title: 'Verificando se o backup funcionou',
          content: 'Vamos confirmar que tudo foi salvo corretamente.',
          details: [
            'No Android:',
            '1. Vá em Configurações > Sistema > Backup',
            '2. Veja a data do último backup',
            '3. Deve ser hoje ou ontem',
            '',
            'No iPhone:',
            '1. Vá em Ajustes > Seu Nome > iCloud',
            '2. Toque em "Backup do iCloud"',
            '3. Veja quando foi o último backup'
          ],
          tip: '✅ Se a data estiver recente, está tudo certo!'
        },
        {
          title: 'Backup manual das fotos importantes',
          content: 'Para fotos especiais, faça um backup extra.',
          details: [
            'WhatsApp para Google Fotos:',
            '1. Abra o Google Fotos no celular',
            '2. Toque no seu perfil (canto superior direito)',
            '3. Vá em "Configurações do Google Fotos"',
            '4. Toque em "Backup e sincronização"',
            '5. Ative o backup',
            '6. Suas fotos do WhatsApp serão salvas também!'
          ],
          tip: '📷 Dica: Google Fotos guarda fotos ilimitadas em qualidade otimizada!'
        }
      ]
    },

    // CATEGORIA: NAVEGAÇÃO SEGURA  
    {
      id: 5,
      category: 'navigation',
      title: 'Identificando Sites Seguros',
      difficulty: 'Fácil',
      duration: '7 min',
      description: 'Aprenda a reconhecer sites confiáveis antes de inserir dados',
      icon: Globe,
      steps: [
        {
          title: 'O que procurar na barra de endereço',
          content: 'A barra de endereço é como o RG do site - vamos aprender a ler.',
          details: [
            '🔒 SEGURO: Site começa com "https://" (com S no final)',
            '🔒 SEGURO: Aparece um cadeado fechado antes do endereço',
            '🔒 SEGURO: Endereço oficial da empresa (ex: santander.com.br)',
            '⚠️ SUSPEITO: Site começa só com "http://" (sem S)',
            '❌ PERIGOSO: Cadeado aberto ou com aviso',
            '❌ PERIGOSO: Endereços estranhos (ex: santander-security.tk)'
          ],
          tip: '💡 Lembre-se: HTTPS = Seguro, HTTP = Perigoso!'
        },
        {
          title: 'Verificando a identidade do site',
          content: 'Vamos aprender a confirmar se o site é mesmo oficial.',
          details: [
            '1. Clique no cadeado ao lado do endereço',
            '2. Clique em "Certificado" ou "Conexão segura"',
            '3. Verifique se o nome da empresa está correto',
            '4. Procure por erros de português na página',
            '5. Sites oficiais têm design profissional',
            '6. Desconfie de pop-ups excessivos',
            '7. Se suspeitar, feche e acesse pelo Google'
          ],
          tip: '🔍 Dica: Quando na dúvida, sempre pesquise no Google o site oficial!'
        },
        {
          title: 'Testando com sites conhecidos',
          content: 'Vamos praticar com sites que você conhece.',
          details: [
            'Vamos testar juntos:',
            '1. Abra www.google.com - veja o cadeado verde',
            '2. Abra seu banco pelo Google (não por link)',
            '3. Observe o https:// e o cadeado',
            '4. Clique no cadeado - veja as informações',
            '5. Agora você sabe identificar sites seguros!'
          ],
          tip: '✅ Pratique sempre! Logo vira automático!'
        }
      ]
    },
    {
      id: 6,
      category: 'navigation',
      title: 'Configurando Privacidade no Facebook',
      difficulty: 'Médio',
      duration: '10 min',
      description: 'Proteja suas informações pessoais nas redes sociais',
      icon: Eye,
      steps: [
        {
          title: 'Acessando as configurações de privacidade',
          content: 'Vamos encontrar onde estão as configurações importantes.',
          details: [
            '1. Entre no Facebook pelo computador ou celular',
            '2. No computador: clique na setinha ▼ (canto superior direito)',
            '3. No celular: toque nas três linhas ≡ (canto inferior direito)',
            '4. Procure por "Configurações e Privacidade"',
            '5. Toque em "Configurações"',
            '6. Procure por "Privacidade" no menu lateral'
          ],
          tip: '🔧 Dica: As configurações podem mudar de lugar, mas sempre existem!'
        },
        {
          title: 'Controlando quem vê suas publicações',
          content: 'Decida quem pode ver o que você posta.',
          details: [
            '1. Na seção Privacidade, procure "Suas publicações"',
            '2. Em "Quem pode ver suas publicações futuras?"',
            '3. Escolha "Amigos" (recomendado) ao invés de "Público"',
            '4. Em "Revisar publicações em que você foi marcado"',
            '5. Ative "Ativar" para aprovar antes de aparecer',
            '6. Em "Quem pode ver sua lista de amigos?"',
            '7. Escolha "Somente eu" ou "Amigos"'
          ],
          tip: '👥 Dica: "Amigos" é mais seguro que "Público" para tudo!'
        },
        {
          title: 'Protegendo informações pessoais',
          content: 'Esconda informações que podem ser usadas por golpistas.',
          details: [
            '1. Vá em "Configurações" > "Privacidade"',
            '2. Procure por "Como as pessoas encontram você"',
            '3. Em "Quem pode procurar você usando email/telefone?"',
            '4. Escolha "Amigos" ao invés de "Todos"',
            '5. Vá no seu perfil e clique em "Sobre"',
            '6. Para cada informação (telefone, email, nascimento):',
            '7. Clique no ícone de privacidade ao lado',
            '8. Escolha "Somente eu" ou "Amigos"'
          ],
          tip: '🔒 Importante: Data de nascimento e telefone só para você!'
        },
        {
          title: 'Bloqueando contatos indesejados',
          content: 'Aprenda a se proteger de pessoas inconvenientes.',
          details: [
            'Para bloquear alguém:',
            '1. Vá no perfil da pessoa',
            '2. Clique nos três pontinhos (...)',
            '3. Escolha "Bloquear"',
            '4. Confirme clicando em "Bloquear" novamente',
            '',
            'Para gerenciar bloqueios:',
            '1. Configurações > Bloqueio',
            '2. Veja lista de pessoas bloqueadas',
            '3. Pode desbloquear se quiser'
          ],
          tip: '🚫 Não tenha receio de bloquear pessoas inconvenientes!'
        }
      ]
    },

    // CATEGORIA: DISPOSITIVOS
    {
      id: 7,
      category: 'devices',
      title: 'Configurando Wi-Fi Doméstico Seguro',
      difficulty: 'Médio',
      duration: '12 min',
      description: 'Proteja sua rede Wi-Fi contra invasores',
      icon: Wifi,
      steps: [
        {
          title: 'Acessando as configurações do roteador',
          content: 'Vamos entrar no painel de controle do seu roteador.',
          details: [
            '1. Conecte-se ao Wi-Fi da sua casa',
            '2. Abra o navegador (Chrome, Firefox)',
            '3. Digite um destes endereços na barra:',
            '   • 192.168.1.1',
            '   • 192.168.0.1',
            '   • 10.0.0.1',
            '4. Procure no roteador a senha padrão (geralmente embaixo)',
            '5. Usuário comum: admin, Senha: admin ou 123456',
            '6. Se não conseguir, chame seu provedor de internet'
          ],
          tip: '🔧 Dica: A senha padrão geralmente está grudada no roteador!'
        },
        {
          title: 'Alterando a senha do Wi-Fi',
          content: 'Vamos trocar aquela senha padrão por uma forte.',
          details: [
            '1. Procure por "Configurações de Wi-Fi" ou "Wireless"',
            '2. Encontre "Nome da Rede" (SSID) e "Senha" (Password)',
            '3. Mude o nome para algo como "Casa_da_Maria"',
            '4. Troque a senha por uma forte com 12+ caracteres',
            '5. Use letras, números e símbolos',
            '6. Exemplo: "MinhaC@sa2024!"',
            '7. Anote a nova senha em local seguro',
            '8. Clique em "Salvar" ou "Aplicar"'
          ],
          tip: '📝 Importante: Anote a nova senha antes de salvar!'
        },
        {
          title: 'Configurando a segurança WPA3',
          content: 'Vamos ativar a criptografia mais segura disponível.',
          details: [
            '1. Procure por "Segurança" ou "Security"',
            '2. Em "Tipo de Segurança" ou "Security Mode"',
            '3. Escolha WPA3 (se disponível) ou WPA2',
            '4. NUNCA escolha WEP (muito fraco) ou "Aberta"',
            '5. Em "Criptografia" escolha AES',
            '6. Salve as configurações',
            '7. O roteador vai reiniciar automaticamente'
          ],
          tip: '🛡️ WPA3 > WPA2 > WEP. Nunca use rede aberta!'
        },
        {
          title: 'Verificando dispositivos conectados',
          content: 'Vamos ver quem está usando seu Wi-Fi.',
          details: [
            '1. Procure por "Dispositivos Conectados" ou "DHCP"',
            '2. Veja a lista de aparelhos conectados',
            '3. Você deve reconhecer todos:',
            '   • Seu celular',
            '   • Seu computador',
            '   • Smart TV, etc.',
            '4. Se vir nomes estranhos, pode ser invasor',
            '5. Bloqueie dispositivos desconhecidos',
            '6. Troque a senha do Wi-Fi imediatamente'
          ],
          tip: '👀 Verifique mensalmente quem está conectado!'
        }
      ]
    },
    {
      id: 8,
      category: 'devices',
      title: 'Instalando e Configurando Antivírus',
      difficulty: 'Fácil',
      duration: '15 min',
      description: 'Proteja seu computador com antivírus confiável',
      icon: Shield,
      steps: [
        {
          title: 'Escolhendo um antivírus confiável',
          content: 'Vamos escolher uma proteção adequada para você.',
          details: [
            'Antivírus GRATUITOS recomendados:',
            '✅ Windows Defender (já vem no Windows 10/11)',
            '✅ Avast Free Antivirus',
            '✅ AVG Antivirus Free',
            '',
            'Antivírus PAGOS (mais recursos):',
            '✅ Norton 360',
            '✅ Kaspersky Total Security',
            '✅ Bitdefender Total Security'
          ],
          tip: '💡 Para começar, o Windows Defender gratuito já é muito bom!'
        },
        {
          title: 'Verificando o Windows Defender',
          content: 'Vamos ver se sua proteção já está funcionando.',
          details: [
            '1. Clique no botão Iniciar do Windows',
            '2. Digite "Segurança do Windows"',
            '3. Clique no resultado que aparecer',
            '4. Veja se há algum ícone vermelho ou amarelo',
            '5. Se tudo estiver verde ✅, está protegido!',
            '6. Se há avisos, clique para resolver',
            '7. Ative "Proteção em tempo real" se não estiver'
          ],
          tip: '🟢 Verde = Protegido, 🟡 Amarelo = Atenção, 🔴 Vermelho = Problema!'
        },
        {
          title: 'Fazendo sua primeira verificação',
          content: 'Vamos fazer uma verificação completa do computador.',
          details: [
            '1. Na Segurança do Windows, clique em "Proteção contra vírus"',
            '2. Clique em "Opções de verificação"',
            '3. Escolha "Verificação completa"',
            '4. Clique em "Verificar agora"',
            '5. A verificação pode demorar 1-2 horas',
            '6. Deixe o computador ligado até terminar',
            '7. Se encontrar algo, siga as recomendações'
          ],
          tip: '⏰ Faça verificação completa pelo menos uma vez por mês!'
        },
        {
          title: 'Configurando verificações automáticas',
          content: 'Configure para verificar automaticamente sem você lembrar.',
          details: [
            '1. Na Segurança do Windows, vá em "Proteção contra vírus"',
            '2. Clique em "Gerenciar configurações" (em Proteção em tempo real)',
            '3. Certifique-se que tudo está "Ativado"',
            '4. Volte e clique em "Opções de verificação"',
            '5. Role para baixo até "Histórico de proteção"',
            '6. Configure verificação semanal automática',
            '7. Escolha um horário que não use o computador'
          ],
          tip: '🔄 Com verificação automática, você fica sempre protegido!'
        }
      ]
    }
  ];

  const handleTutorialSelect = (tutorial) => {
    setSelectedTutorial(tutorial);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const handleNextStep = () => {
    if (currentStep < selectedTutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBackToList = () => {
    setSelectedTutorial(null);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgress = () => {
    if (!selectedTutorial) return 0;
    return ((currentStep + 1) / selectedTutorial.steps.length) * 100;
  };

  // Vista do tutorial específico
  if (selectedTutorial) {
    const step = selectedTutorial.steps[currentStep];
    const isStepCompleted = completedSteps.includes(currentStep);

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header do Tutorial */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={handleBackToList}
              className="mb-4 flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar aos Tutoriais</span>
            </Button>
            
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedTutorial.title}
              </h1>
              <Badge className={getDifficultyColor(selectedTutorial.difficulty)}>
                {selectedTutorial.difficulty}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{selectedTutorial.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Passo {currentStep + 1} de {selectedTutorial.steps.length}</span>
              </div>
            </div>
            
            <Progress value={getProgress()} className="w-full h-3" />
          </div>

          {/* Conteúdo do Passo */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{step.title}</span>
                {isStepCompleted && (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700">{step.content}</p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">📋 Passo a Passo:</h4>
                <div className="space-y-2">
                  {step.details.map((detail, index) => (
                    <div key={index} className="text-blue-700">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              {step.tip && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-medium">{step.tip}</p>
                </div>
              )}

              <div className="flex items-center justify-center pt-4">
                <Button
                  onClick={handleStepComplete}
                  variant={isStepCompleted ? "secondary" : "default"}
                  disabled={isStepCompleted}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>{isStepCompleted ? 'Passo Concluído' : 'Marcar como Concluído'}</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navegação */}
          <div className="flex justify-between">
            <Button 
              onClick={handlePreviousStep}
              variant="outline"
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Passo Anterior</span>
            </Button>
            
            {currentStep < selectedTutorial.steps.length - 1 ? (
              <Button 
                onClick={handleNextStep}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
              >
                <span>Próximo Passo</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleBackToList}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Tutorial Concluído</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Vista da lista de tutoriais
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutoriais Passo-a-Passo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda na prática com guias detalhados e fáceis de seguir, 
            desenvolvidos especialmente para a terceira idade.
          </p>
        </div>

        {/* Categorias */}
        {tutorialCategories.map((category) => {
          const IconComponent = category.icon;
          const categoryTutorials = tutorials.filter(t => t.category === category.id);
          
          return (
            <div key={category.id} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <IconComponent className={`h-8 w-8 ${category.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryTutorials.map((tutorial) => {
                  const TutorialIcon = tutorial.icon;
                  return (
                    <Card 
                      key={tutorial.id}
                      className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer border-2"
                      onClick={() => handleTutorialSelect(tutorial)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <TutorialIcon className={`h-8 w-8 ${category.color}`} />
                          <Badge className={getDifficultyColor(tutorial.difficulty)}>
                            {tutorial.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600">{tutorial.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <span>{tutorial.steps.length} passos</span>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <span>Iniciar Tutorial</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h2>
          <p className="mb-6">
            Se tiver dificuldades com algum tutorial, não hesite em pedir ajuda 
            a um familiar ou amigo de confiança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <span>Voltar ao Conteúdo</span>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <span>Fazer Quiz</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;