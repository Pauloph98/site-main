import { Lock, Shield, Globe, Smartphone, Eye, Wifi } from 'lucide-react';

// Centralizando os ícones para referência
export const iconMap = {
  Lock,
  Shield,
  Globe,
  Smartphone,
  Eye,
  Wifi,
};

// Dados completos dos tutoriais
export const tutorials = [
  // CATEGORIA: SENHAS E SEGURANÇA
  {
    id: 1,
    category: 'passwords',
    title: 'Como Criar uma Senha Super Segura',
    difficulty: 'Fácil',
    duration: '5 min',
    description: 'Aprenda o passo a passo para criar senhas que ninguém consegue descobrir',
    icon: 'Lock',
    steps: [
        {
          title: 'Entenda o que torna uma senha segura',
          content: 'Uma senha segura deve ter pelo menos 12 caracteres e combinar diferentes tipos de caracteres.',
          details: ['✅ Pelo menos 12 caracteres (quanto mais, melhor)', '✅ Letras maiúsculas (A, B, C, D...)', '✅ Letras minúsculas (a, b, c, d...)', '✅ Números (1, 2, 3, 4...)', '✅ Símbolos especiais (!, @, #, $, %, &, *)', '❌ Não use seu nome, data de nascimento', '❌ Não use palavras do dicionário', '❌ Não use sequências como 123456'],
          tip: '💡 Dica: Uma boa senha é como uma receita secreta - deve ter vários ingredientes!'
        },
        {
          title: 'Método da Frase Pessoal',
          content: 'Vamos criar uma senha usando uma frase que só você conhece.',
          details: ['1. Pense em uma frase pessoal. Exemplo: "Minha neta Laura tem 8 anos e adora sorvete"', '2. Pegue a primeira letra de cada palavra: "MnLt8aeaS"', '3. Adicione alguns símbolos: "MnLt8aeaS!"', '4. Adicione o ano atual: "MnLt8aeaS!2024"', '5. Pronto! Sua senha segura: "MnLt8aeaS!2024"'],
          tip: '💡 Dica: Use frases que sejam especiais para você, mas que outros não saibam!'
        },
        {
          title: 'Teste sua senha',
          content: 'Vamos verificar se sua senha está realmente segura.',
          details: ['✓ Tem pelo menos 12 caracteres?', '✓ Tem letras maiúsculas e minúsculas?', '✓ Tem pelo menos um número?', '✓ Tem pelo menos um símbolo?', '✓ Não tem informações pessoais óbvias?', '✓ É diferente de outras senhas que você usa?'],
          tip: '💡 Dica: Se respondeu SIM para tudo, parabéns! Sua senha está segura!'
        },
        {
          title: 'Onde anotar sua senha com segurança',
          content: 'Aprenda onde guardar suas senhas de forma segura.',
          details: ['✅ SEGURO: Gerenciador de senhas (Google Password Manager)', '✅ SEGURO: Caderno físico guardado em local seguro', '✅ SEGURO: Aplicativo de notas protegido por senha', '❌ PERIGOSO: Papel grudado no monitor', '❌ PERIGOSO: Arquivo no desktop chamado "senhas"', '❌ PERIGOSO: WhatsApp ou e-mail'],
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
      icon: 'Shield',
      steps: [
          {
            title: 'O que é Autenticação em 2 Etapas?',
            content: 'É como ter duas chaves para sua casa - mesmo que alguém descubra sua senha, ainda precisará do seu celular.',
            details: ['🔑 Primeira etapa: Sua senha (o que você sabe)', '📱 Segunda etapa: Código no celular (o que você tem)', '✅ Muito mais seguro que só senha', '✅ Gratuito na maioria dos serviços', '✅ Funciona mesmo sem internet (com app)'],
            tip: '💡 Dica: É como ter um porteiro que sempre pergunta sua identidade!'
          },
          {
            title: 'Ativando no Google (Gmail)',
            content: 'Vamos ativar a verificação em 2 etapas na sua conta Google.',
            details: ['1. Abra www.google.com e clique no seu ícone (canto superior direito)', '2. Clique em "Gerenciar sua Conta do Google"', '3. No menu lateral, clique em "Segurança"', '4. Procure por "Verificação em duas etapas" e clique', '5. Clique no botão "Começar"', '6. Digite sua senha quando solicitado', '7. Adicione seu número de telefone', '8. Escolha receber SMS ou ligação', '9. Digite o código que receber', '10. Clique em "Ativar"'],
            tip: '⚠️ Importante: Guarde os códigos de backup em local seguro!'
          },
          {
            title: 'Ativando no WhatsApp',
            content: 'Proteja seu WhatsApp com verificação em duas etapas.',
            details: ['1. Abra o WhatsApp', '2. Toque nos três pontinhos (⋮) no canto superior direito', '3. Vá em "Configurações"', '4. Toque em "Conta"', '5. Toque em "Verificação em duas etapas"', '6. Toque em "Ativar"', '7. Crie um PIN de 6 dígitos (que você lembre bem)', '8. Confirme o PIN digitando novamente', '9. Adicione um e-mail de recuperação (opcional)', '10. Toque em "Salvar"'],
            tip: '💡 Dica: Escolha um PIN que seja fácil para você, mas difícil para outros!'
          },
          {
            title: 'Testando a segurança',
            content: 'Vamos verificar se tudo está funcionando corretamente.',
            details: ['1. Faça logout da sua conta', '2. Tente fazer login novamente', '3. Digite sua senha normalmente', '4. Aguarde o código chegar no seu celular', '5. Digite o código quando solicitado', '6. Se conseguir entrar, está funcionando!', '7. Se tiver problemas, use os códigos de backup'],
            tip: '🎉 Parabéns! Agora sua conta está muito mais segura!'
          }
      ]
  },
  {
    id: 3,
    category: 'backup',
    title: 'Fazendo Backup no Google Drive',
    difficulty: 'Fácil',
    duration: '8 min',
    description: 'Proteja suas fotos e documentos importantes na nuvem',
    icon: 'Shield',
    steps: [
        {
          title: 'Criando sua conta no Google Drive',
          content: 'Se você já tem Gmail, já tem Google Drive! Vamos acessar.',
          details: ['1. Abra seu navegador (Chrome, Firefox, etc.)', '2. Digite: drive.google.com', '3. Faça login com sua conta do Gmail', '4. Se não tem Gmail, clique em "Criar conta"', '5. Você ganha 15GB grátis para usar!', '6. Explore a interface - é bem simples!'],
          tip: '💡 Dica: 15GB é espaço para milhares de fotos e documentos!'
        },
        {
          title: 'Fazendo upload de fotos importantes',
          content: 'Vamos salvar suas fotos mais preciosas na nuvem.',
          details: ['1. No Google Drive, clique no botão "+ Novo"', '2. Escolha "Upload de arquivos" ou "Upload de pasta"', '3. Navegue até onde estão suas fotos no computador', '4. Selecione as fotos que quer fazer backup', '5. Clique em "Abrir" - o upload começará automaticamente', '6. Aguarde a barra de progresso completar', '7. Suas fotos agora estão seguras na nuvem!'],
          tip: '📸 Dica: Comece pelas fotos mais importantes - família, documentos!'
        },
        {
          title: 'Organizando seus arquivos',
          content: 'Vamos criar pastas para organizar tudo direitinho.',
          details: ['1. Clique em "+ Novo" e escolha "Pasta"', '2. Dê um nome, como "Fotos da Família"', '3. Repita para criar pastas como:', '   • "Documentos Importantes"', '   • "Fotos de Viagem"', '   • "Receitas Favoritas"', '4. Arraste arquivos para as pastas certas', '5. Clique e arraste para mover arquivos'],
          tip: '📁 Dica: Organizar facilita encontrar depois!'
        },
        {
          title: 'Configurando backup automático',
          content: 'Configure o backup automático para não esquecer nunca mais.',
          details: ['1. Baixe o aplicativo "Backup e Sincronização" do Google', '2. Instale no seu computador', '3. Faça login com sua conta Google', '4. Escolha quais pastas quer fazer backup automático', '5. Marque "Fotos", "Documentos", "Área de Trabalho"', '6. Clique em "Iniciar"', '7. Agora tudo é salvo automaticamente!'],
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
      icon: 'Smartphone',
      steps: [
          {
            title: 'Backup no Android (Google)',
            content: 'Vamos configurar o backup automático do seu Android.',
            details: ['1. Abra "Configurações" no seu celular', '2. Procure por "Sistema" ou "Backup"', '3. Toque em "Backup" ou "Backup do Google"', '4. Ative "Fazer backup dos meus dados"', '5. Verifique se sua conta Google está selecionada', '6. Toque em "Fazer backup agora"', '7. Aguarde o processo terminar', '8. Pronto! Seu celular está protegido'],
            tip: '🤖 Android salva: apps, contatos, SMS, fotos, configurações!'
          },
          {
            title: 'Backup no iPhone (iCloud)',
            content: 'Configure o backup automático do seu iPhone.',
            details: ['1. Abra "Ajustes" no seu iPhone', '2. Toque no seu nome (parte superior)', '3. Toque em "iCloud"', '4. Toque em "Backup do iCloud"', '5. Ative "Backup do iCloud"', '6. Toque em "Fazer backup agora"', '7. Mantenha conectado no Wi-Fi', '8. Aguarde o backup completar'],
            tip: '🍎 iPhone salva: apps, fotos, mensagens, configurações!'
          },
          {
            title: 'Verificando se o backup funcionou',
            content: 'Vamos confirmar que tudo foi salvo corretamente.',
            details: ['No Android:', '1. Vá em Configurações > Sistema > Backup', '2. Veja a data do último backup', '3. Deve ser hoje ou ontem', '', 'No iPhone:', '1. Vá em Ajustes > Seu Nome > iCloud', '2. Toque em "Backup do iCloud"', '3. Veja quando foi o último backup'],
            tip: '✅ Se a data estiver recente, está tudo certo!'
          },
          {
            title: 'Backup manual das fotos importantes',
            content: 'Para fotos especiais, faça um backup extra.',
            details: ['WhatsApp para Google Fotos:', '1. Abra o Google Fotos no celular', '2. Toque no seu perfil (canto superior direito)', '3. Vá em "Configurações do Google Fotos"', '4. Toque em "Backup e sincronização"', '5. Ative o backup', '6. Suas fotos do WhatsApp serão salvas também!'],
            tip: '📷 Dica: Google Fotos guarda fotos ilimitadas em qualidade otimizada!'
          }
      ]
  },
  {
      id: 5,
      category: 'navigation',
      title: 'Identificando Sites Seguros',
      difficulty: 'Fácil',
      duration: '7 min',
      description: 'Aprenda a reconhecer sites confiáveis antes de inserir dados',
      icon: 'Globe',
      steps: [
          {
            title: 'O que procurar na barra de endereço',
            content: 'A barra de endereço é como o RG do site - vamos aprender a ler.',
            details: ['🔒 SEGURO: Site começa com "https://" (com S no final)', '🔒 SEGURO: Aparece um cadeado fechado antes do endereço', '🔒 SEGURO: Endereço oficial da empresa (ex: santander.com.br)', '⚠️ SUSPEITO: Site começa só com "http://" (sem S)', '❌ PERIGOSO: Cadeado aberto ou com aviso', '❌ PERIGOSO: Endereços estranhos (ex: santander-security.tk)'],
            tip: '💡 Lembre-se: HTTPS = Seguro, HTTP = Perigoso!'
          },
          {
            title: 'Verificando a identidade do site',
            content: 'Vamos aprender a confirmar se o site é mesmo oficial.',
            details: ['1. Clique no cadeado ao lado do endereço', '2. Clique em "Certificado" ou "Conexão segura"', '3. Verifique se o nome da empresa está correto', '4. Procure por erros de português na página', '5. Sites oficiais têm design profissional', '6. Desconfie de pop-ups excessivos', '7. Se suspeitar, feche e acesse pelo Google'],
            tip: '🔍 Dica: Quando na dúvida, sempre pesquise no Google o site oficial!'
          },
          {
            title: 'Testando com sites conhecidos',
            content: 'Vamos praticar com sites que você conhece.',
            details: ['Vamos testar juntos:', '1. Abra www.google.com - veja o cadeado verde', '2. Abra seu banco pelo Google (não por link)', '3. Observe o https:// e o cadeado', '4. Clique no cadeado - veja as informações', '5. Agora você sabe identificar sites seguros!'],
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
      icon: 'Eye',
      steps: [
          {
            title: 'Acessando as configurações de privacidade',
            content: 'Vamos encontrar onde estão as configurações importantes.',
            details: ['1. Entre no Facebook pelo computador ou celular', '2. No computador: clique na setinha ▼ (canto superior direito)', '3. No celular: toque nas três linhas ≡ (canto inferior direito)', '4. Procure por "Configurações e Privacidade"', '5. Toque em "Configurações"', '6. Procure por "Privacidade" no menu lateral'],
            tip: '🔧 Dica: As configurações podem mudar de lugar, mas sempre existem!'
          },
          {
            title: 'Controlando quem vê suas publicações',
            content: 'Decida quem pode ver o que você posta.',
            details: ['1. Na seção Privacidade, procure "Suas publicações"', '2. Em "Quem pode ver suas publicações futuras?"', '3. Escolha "Amigos" (recomendado) ao invés de "Público"', '4. Em "Revisar publicações em que você foi marcado"', '5. Ative "Ativar" para aprovar antes de aparecer', '6. Em "Quem pode ver sua lista de amigos?"', '7. Escolha "Somente eu" ou "Amigos"'],
            tip: '👥 Dica: "Amigos" é mais seguro que "Público" para tudo!'
          },
          {
            title: 'Protegendo informações pessoais',
            content: 'Esconda informações que podem ser usadas por golpistas.',
            details: ['1. Vá em "Configurações" > "Privacidade"', '2. Procure por "Como as pessoas encontram você"', '3. Em "Quem pode procurar você usando email/telefone?"', '4. Escolha "Amigos" ao invés de "Todos"', '5. Vá no seu perfil e clique em "Sobre"', '6. Para cada informação (telefone, email, nascimento):', '7. Clique no ícone de privacidade ao lado', '8. Escolha "Somente eu" ou "Amigos"'],
            tip: '🔒 Importante: Data de nascimento e telefone só para você!'
          },
          {
            title: 'Bloqueando contatos indesejados',
            content: 'Aprenda a se proteger de pessoas inconvenientes.',
            details: ['Para bloquear alguém:', '1. Vá no perfil da pessoa', '2. Clique nos três pontinhos (...)', '3. Escolha "Bloquear"', '4. Confirme clicando em "Bloquear" novamente', '', 'Para gerenciar bloqueios:', '1. Configurações > Bloqueio', '2. Veja lista de pessoas bloqueadas', '3. Pode desbloquear se quiser'],
            tip: '🚫 Não tenha receio de bloquear pessoas inconvenientes!'
          }
      ]
  },
  {
      id: 7,
      category: 'devices',
      title: 'Configurando Wi-Fi Doméstico Seguro',
      difficulty: 'Médio',
      duration: '12 min',
      description: 'Proteja sua rede Wi-Fi contra invasores',
      icon: 'Wifi',
      steps: [
          {
            title: 'Acessando as configurações do roteador',
            content: 'Vamos entrar no painel de controle do seu roteador.',
            details: ['1. Conecte-se ao Wi-Fi da sua casa', '2. Abra o navegador (Chrome, Firefox)', '3. Digite um destes endereços na barra:', '   • 192.168.1.1', '   • 192.168.0.1', '   • 10.0.0.1', '4. Procure no roteador a senha padrão (geralmente embaixo)', '5. Usuário comum: admin, Senha: admin ou 123456', '6. Se não conseguir, chame seu provedor de internet'],
            tip: '🔧 Dica: A senha padrão geralmente está grudada no roteador!'
          },
          {
            title: 'Alterando a senha do Wi-Fi',
            content: 'Vamos trocar aquela senha padrão por uma forte.',
            details: ['1. Procure por "Configurações de Wi-Fi" ou "Wireless"', '2. Encontre "Nome da Rede" (SSID) e "Senha" (Password)', '3. Mude o nome para algo como "Casa_da_Maria"', '4. Troque a senha por uma forte com 12+ caracteres', '5. Use letras, números e símbolos', '6. Exemplo: "MinhaC@sa2024!"', '7. Anote a nova senha em local seguro', '8. Clique em "Salvar" ou "Aplicar"'],
            tip: '📝 Importante: Anote a nova senha antes de salvar!'
          },
          {
            title: 'Configurando a segurança WPA3',
            content: 'Vamos ativar a criptografia mais segura disponível.',
            details: ['1. Procure por "Segurança" ou "Security"', '2. Em "Tipo de Segurança" ou "Security Mode"', '3. Escolha WPA3 (se disponível) ou WPA2', '4. NUNCA escolha WEP (muito fraco) ou "Aberta"', '5. Em "Criptografia" escolha AES', '6. Salve as configurações', '7. O roteador vai reiniciar automaticamente'],
            tip: '🛡️ WPA3 > WPA2 > WEP. Nunca use rede aberta!'
          },
          {
            title: 'Verificando dispositivos conectados',
            content: 'Vamos ver quem está usando seu Wi-Fi.',
            details: ['1. Procure por "Dispositivos Conectados" ou "DHCP"', '2. Veja a lista de aparelhos conectados', '3. Você deve reconhecer todos:', '   • Seu celular', '   • Seu computador', '   • Smart TV, etc.', '4. Se vir nomes estranhos, pode ser invasor', '5. Bloqueie dispositivos desconhecidos', '6. Troque a senha do Wi-Fi imediatamente'],
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
      icon: 'Shield',
      steps: [
          {
            title: 'Escolhendo um antivírus confiável',
            content: 'Vamos escolher uma proteção adequada para você.',
            details: ['Antivírus GRATUITOS recomendados:', '✅ Windows Defender (já vem no Windows 10/11)', '✅ Avast Free Antivirus', '✅ AVG Antivirus Free', '', 'Antivírus PAGOS (mais recursos):', '✅ Norton 360', '✅ Kaspersky Total Security', '✅ Bitdefender Total Security'],
            tip: '💡 Para começar, o Windows Defender gratuito já é muito bom!'
          },
          {
            title: 'Verificando o Windows Defender',
            content: 'Vamos ver se sua proteção já está funcionando.',
            details: ['1. Clique no botão Iniciar do Windows', '2. Digite "Segurança do Windows"', '3. Clique no resultado que aparecer', '4. Veja se há algum ícone vermelho ou amarelo', '5. Se tudo estiver verde ✅, está protegido!', '6. Se há avisos, clique para resolver', '7. Ative "Proteção em tempo real" se não estiver'],
            tip: '🟢 Verde = Protegido, 🟡 Amarelo = Atenção, 🔴 Vermelho = Problema!'
          },
          {
            title: 'Fazendo sua primeira verificação',
            content: 'Vamos fazer uma verificação completa do computador.',
            details: ['1. Na Segurança do Windows, clique em "Proteção contra vírus"', '2. Clique em "Opções de verificação"', '3. Escolha "Verificação completa"', '4. Clique em "Verificar agora"', '5. A verificação pode demorar 1-2 horas', '6. Deixe o computador ligado até terminar', '7. Se encontrar algo, siga as recomendações'],
            tip: '⏰ Faça verificação completa pelo menos uma vez por mês!'
          },
          {
            title: 'Configurando verificações automáticas',
            content: 'Configure para verificar automaticamente sem você lembrar.',
            details: ['1. Na Segurança do Windows, vá em "Proteção contra vírus"', '2. Clique em "Gerenciar configurações" (em Proteção em tempo real)', '3. Certifique-se que tudo está "Ativado"', '4. Volte e clique em "Opções de verificação"', '5. Role para baixo até "Histórico de proteção"', '6. Configure verificação semanal automática', '7. Escolha um horário que não use o computador'],
            tip: '🔄 Com verificação automática, você fica sempre protegido!'
          }
      ]
  }
];

export const mockData = {
  navigation: [
    { id: 'inicio', name: 'Início', path: '/' },
    { id: 'conteudo', name: 'Conteúdo', path: '/conteudo' },
    { id: 'simulacoes', name: 'Simulações', path: '/simulacoes' },
    { id: 'quiz', name: 'Quiz', path: '/quiz' },
    { id: 'pesquisas', name: 'Pesquisas', path: '/pesquisas' }
  ],
  hero: {
    title: 'Segurança Digital para Idosos',
    subtitle: 'Aprenda a se proteger na internet com tutoriais práticos e didáticos',
    buttonText: 'Começar Aprendizado'
  },
  features: [
    {
      id: 1,
      title: 'Conteúdo Educativo',
      description: 'Tutoriais passo a passo sobre segurança digital, senhas e proteção online',
      icon: 'BookOpen',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Simulações Práticas',
      description: 'Pratique em ambiente seguro antes de aplicar no mundo real',
      icon: 'Play',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Testes de Conhecimento',
      description: 'Avalie seu aprendizado com quizzes interativos',
      icon: 'CheckSquare',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Cartilha Digital',
      description: 'Guia completo de segurança digital com dicas práticas e contatos de emergência',
      icon: 'BookOpen',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    }
  ],
  quizQuestions: [
    {
      id: 1,
      category: 'Senhas',
      question: 'Qual é a melhor forma de criar uma senha segura?',
      options: [
        { id: 'a', text: 'Usar meu nome e data de nascimento', isCorrect: false },
        { id: 'b', text: 'Usar pelo menos 12 caracteres com letras, números e símbolos', isCorrect: true },
        { id: 'c', text: 'Usar uma palavra do dicionário', isCorrect: false },
        { id: 'd', text: 'Usar 123456 porque é fácil de lembrar', isCorrect: false }
      ],
      explanation: 'Uma senha segura deve ter pelo menos 12 caracteres e combinar letras maiúsculas, minúsculas, números e símbolos especiais.',
      wrongExplanation: 'Senhas baseadas em informações pessoais, palavras do dicionário ou sequências simples são facilmente descobertas por criminosos.'
    },
    {
      id: 2,
      category: 'Phishing',
      question: 'Como identificar um email de phishing (golpe)?',
      options: [
        { id: 'a', text: 'Verificar se tem erros de português e links suspeitos', isCorrect: true },
        { id: 'b', text: 'Se veio do banco, sempre é verdadeiro', isCorrect: false },
        { id: 'c', text: 'Se pede urgência, devo responder rapidamente', isCorrect: false },
        { id: 'd', text: 'Se tem logo do banco, é confiável', isCorrect: false }
      ],
      explanation: 'Emails de phishing geralmente contêm erros de gramática, links suspeitos, pedidos de urgência e solicitam dados pessoais.',
      wrongExplanation: 'Criminosos podem copiar logos e se passar por bancos. Sempre desconfie de emails urgentes pedindo dados pessoais.'
    },
    {
      id: 3,
      category: 'Wi-Fi',
      question: 'É seguro usar Wi-Fi público para acessar o banco?',
      options: [
        { id: 'a', text: 'Sim, se a conexão tem senha', isCorrect: false },
        { id: 'b', text: 'Não, nunca devo acessar dados sensíveis em Wi-Fi público', isCorrect: true },
        { id: 'c', text: 'Sim, se for de uma loja conhecida', isCorrect: false },
        { id: 'd', text: 'Só se ninguém estiver olhando', isCorrect: false }
      ],
      explanation: 'Wi-Fi público não é seguro para dados sensíveis. Criminosos podem interceptar informações mesmo com senha.',
      wrongExplanation: 'Mesmo com senha ou em locais conhecidos, Wi-Fi público pode ser monitorado por criminosos para roubar dados bancários.'
    },
    {
      id: 4,
      category: 'Links',
      question: 'Recebi um link por WhatsApp dizendo que ganhei um prêmio. O que devo fazer?',
      options: [
        { id: 'a', text: 'Clicar rapidamente antes que expire', isCorrect: false },
        { id: 'b', text: 'Compartilhar com a família para eles ganharem também', isCorrect: false },
        { id: 'c', text: 'Desconfiar e não clicar em links suspeitos', isCorrect: true },
        { id: 'd', text: 'Clicar só para ver o que é', isCorrect: false }
      ],
      explanation: 'Links de prêmios inesperados são quase sempre golpes. Nunca clique em links suspeitos recebidos por mensagem.',
      wrongExplanation: 'Golpistas usam a pressa e a curiosidade para nos enganar. Sempre desconfie de prêmios inesperados.'
    },
    {
      id: 5,
      category: 'Phishing',
      question: 'Você recebe um SMS do "seu banco" dizendo: "Detectamos compra suspeita de R$ 3.500. Se não foi você, clique aqui: banco.com.br.verificar.tk". O que fazer?',
      options: [
        { id: 'a', text: 'Clicar imediatamente para cancelar a compra', isCorrect: false },
        { id: 'b', text: 'Desconfiar do link suspeito (.tk) e ligar para o banco pelo número oficial', isCorrect: true },
        { id: 'c', text: 'Responder o SMS perguntando mais detalhes', isCorrect: false },
        { id: 'd', text: 'Encaminhar para amigos para eles verificarem', isCorrect: false }
      ],
      explanation: 'O domínio ".tk" é suspeito e bancos não enviam SMS com links. Sempre ligue para o número oficial do banco impresso no seu cartão ou acesse o aplicativo oficial.',
      wrongExplanation: 'Clicar em links de SMS suspeitos pode levar a sites falsos que roubam suas senhas. O domínio correto seria "santander.com.br", não "banco.com.br.verificar.tk".'
    },
    {
      id: 6,
      category: 'Phishing',
      question: 'Qual destes e-mails é MAIS PROVAVELMENTE um golpe de phishing?',
      options: [
        { id: 'a', text: 'Extrato mensal enviado pelo domínio oficial do banco', isCorrect: false },
        { id: 'b', text: 'E-mail com tom urgente "ÚLTIMA CHANCE! Confirme seus dados em 2 horas!"', isCorrect: true },
        { id: 'c', text: 'Newsletter de uma loja onde você compra regularmente', isCorrect: false },
        { id: 'd', text: 'Confirmação de pedido de site conhecido onde você comprou', isCorrect: false }
      ],
      explanation: 'Golpistas usam urgência e ameaças para que você tome decisões rápidas sem pensar. Bancos e empresas sérias nunca pressionam com prazos curtíssimos.',
      wrongExplanation: 'Urgência excessiva ("2 horas", "ÚLTIMA CHANCE") é uma tática clássica de phishing para que você não tenha tempo de verificar se é verdadeiro.'
    },
    {
      id: 7,
      category: 'Malware',
      question: 'Seu computador está muito lento e aparecem muitas propagandas. Qual a primeira ação recomendada?',
      options: [
        { id: 'a', text: 'Ignorar, é normal computadores ficarem lentos', isCorrect: false },
        { id: 'b', text: 'Fazer uma verificação completa com antivírus atualizado', isCorrect: true },
        { id: 'c', text: 'Baixar um "otimizador" de site desconhecido', isCorrect: false },
        { id: 'd', text: 'Continuar usando normalmente', isCorrect: false }
      ],
      explanation: 'Lentidão e propagandas excessivas são sinais de infecção por malware (adware/spyware). Um antivírus atualizado pode detectar e remover a ameaça.',
      wrongExplanation: 'Muitos "otimizadores" gratuitos são na verdade malware disfarçado. Nunca baixe programas de sites desconhecidos quando o computador já está com problemas.'
    },
    {
      id: 8,
      category: 'Malware',
      question: 'O que é ransomware e como se proteger?',
      options: [
        { id: 'a', text: 'É um antivírus gratuito que protege o computador', isCorrect: false },
        { id: 'b', text: 'É um vírus que bloqueia arquivos e pede resgate; proteja-se fazendo backup regular', isCorrect: true },
        { id: 'c', text: 'É um aplicativo seguro para guardar senhas', isCorrect: false },
        { id: 'd', text: 'É um programa que acelera o computador', isCorrect: false }
      ],
      explanation: 'Ransomware criptografa seus arquivos e exige pagamento. A melhor proteção é fazer backup regular, pois mesmo pagando, criminosos raramente devolvem os arquivos.',
      wrongExplanation: 'Ransomware é um dos malwares mais perigosos. Fazer backup regular (semanal) no Google Drive ou pen drive é sua melhor defesa contra esse tipo de ataque.'
    },
    {
      id: 9,
      category: 'Engenharia Social',
      question: 'Você recebe mensagem no WhatsApp: "Oi vó, mudei de número, estou com um problema urgente e preciso de R$ 500". Como reagir?',
      options: [
        { id: 'a', text: 'Enviar o dinheiro imediatamente para ajudar', isCorrect: false },
        { id: 'b', text: 'Ligar para o número ANTIGO do seu neto para confirmar', isCorrect: true },
        { id: 'c', text: 'Perguntar qual é o problema antes de enviar', isCorrect: false },
        { id: 'd', text: 'Pedir para ele provar que é ele mesmo', isCorrect: false }
      ],
      explanation: 'Este é o "golpe do parente em apuros", muito comum no Brasil. Sempre ligue para o número original da pessoa antes de enviar qualquer dinheiro.',
      wrongExplanation: 'Golpistas clonam fotos de perfil e se passam por parentes. A única forma segura de confirmar é ligando para o número antigo que você já conhece.'
    },
    {
      id: 10,
      category: 'Engenharia Social',
      question: 'Um "técnico da Microsoft" liga dizendo que seu computador tem vírus e pede acesso remoto. O que fazer?',
      options: [
        { id: 'a', text: 'Permitir o acesso para ele resolver o problema', isCorrect: false },
        { id: 'b', text: 'Desligar imediatamente - Microsoft nunca liga para usuários', isCorrect: true },
        { id: 'c', text: 'Pedir o número dele para ligar de volta', isCorrect: false },
        { id: 'd', text: 'Perguntar qual é o vírus detectado', isCorrect: false }
      ],
      explanation: 'Microsoft, Google e outras empresas NUNCA ligam diretamente para usuários. Este é um golpe clássico onde instalam malware com sua permissão.',
      wrongExplanation: 'Dar acesso remoto a desconhecidos é extremamente perigoso. Eles podem roubar senhas, instalar vírus e até acessar suas contas bancárias.'
    },
    {
      id: 11,
      category: 'Proteção',
      question: 'Qual destas práticas é ESSENCIAL para manter seu dispositivo seguro?',
      options: [
        { id: 'a', text: 'Desligar o computador todo dia às 18h', isCorrect: false },
        { id: 'b', text: 'Manter sistema operacional e aplicativos sempre atualizados', isCorrect: true },
        { id: 'c', text: 'Usar apenas Wi-Fi, nunca dados móveis', isCorrect: false },
        { id: 'd', text: 'Reiniciar o celular uma vez por semana', isCorrect: false }
      ],
      explanation: 'Atualizações corrigem falhas de segurança que criminosos exploram. Um sistema desatualizado é muito mais vulnerável a ataques.',
      wrongExplanation: 'Criminosos descobrem falhas em programas constantemente. As atualizações corrigem essas falhas antes que sejam exploradas. Nunca adiar atualizações de segurança!'
    },
    {
      id: 12,
      category: 'Proteção',
      question: 'O que é autenticação em duas etapas (2FA) e por que é importante?',
      options: [
        { id: 'a', text: 'É fazer login duas vezes seguidas', isCorrect: false },
        { id: 'b', text: 'É uma camada extra de segurança que exige senha + código do celular', isCorrect: true },
        { id: 'c', text: 'É criar duas senhas diferentes', isCorrect: false },
        { id: 'd', text: 'É fazer backup duas vezes por mês', isCorrect: false }
      ],
      explanation: 'Com 2FA, mesmo que descubram sua senha, o criminoso não consegue entrar sem o código que chega no SEU celular. É muito mais seguro!',
      wrongExplanation: 'A autenticação em duas etapas adiciona uma segunda verificação além da senha, geralmente um código SMS ou de app, tornando muito mais difícil invadir sua conta.'
    },
    {
      id: 13,
      category: 'Senhas',
      question: 'Por que NÃO se deve usar a mesma senha em várias contas?',
      options: [
        { id: 'a', text: 'Porque é difícil de lembrar', isCorrect: false },
        { id: 'b', text: 'Porque se uma conta for invadida, todas ficam vulneráveis', isCorrect: true },
        { id: 'c', text: 'Porque os sites não permitem', isCorrect: false },
        { id: 'd', text: 'Não há problema em usar a mesma senha', isCorrect: false }
      ],
      explanation: 'Se um site for hackeado e sua senha vazar, criminosos tentarão a mesma senha em bancos, e-mails e redes sociais. Use senhas diferentes sempre!',
      wrongExplanation: 'Vazamentos de dados são comuns. Se você usa "MinhaSenh@123" em tudo, um vazamento em um site de compras pode comprometer sua conta bancária.'
    },
    {
      id: 14,
      category: 'Senhas',
      question: 'Qual é o local MAIS SEGURO para anotar suas senhas?',
      options: [
        { id: 'a', text: 'Papel colado no monitor', isCorrect: false },
        { id: 'b', text: 'Gerenciador de senhas (Google Password Manager, Bitwarden)', isCorrect: true },
        { id: 'c', text: 'Arquivo no desktop chamado "minhas_senhas.txt"', isCorrect: false },
        { id: 'd', text: 'Mensagem salva no WhatsApp', isCorrect: false }
      ],
      explanation: 'Gerenciadores de senhas são criptografados e protegidos. Você só precisa lembrar de UMA senha mestra, e eles guardam todas as outras com segurança.',
      wrongExplanation: 'Papéis visíveis e arquivos não protegidos são facilmente acessados. Gerenciadores de senhas usam criptografia militar e são a forma mais segura de guardar senhas.'
    },
    {
      id: 15,
      category: 'Backup',
      question: 'Com que frequência você deve fazer backup de fotos e documentos importantes?',
      options: [
        { id: 'a', text: 'Uma vez por ano', isCorrect: false },
        { id: 'b', text: 'Apenas quando lembrar', isCorrect: false },
        { id: 'c', text: 'Semanalmente ou configurar backup automático', isCorrect: true },
        { id: 'd', text: 'Não precisa fazer backup', isCorrect: false }
      ],
      explanation: 'Backup semanal ou automático garante que você nunca perca mais de 7 dias de fotos e documentos. Configurar automático é ainda melhor - você não precisa lembrar!',
      wrongExplanation: 'HDs quebram, celulares são roubados, ransomware ataca. Sem backup regular, você pode perder anos de fotos de família em um segundo.'
    },
    {
      id: 16,
      category: 'Backup',
      question: 'Qual é a regra "3-2-1" de backup recomendada por especialistas?',
      options: [
        { id: 'a', text: '3 backups, 2 tipos de mídia, 1 cópia fora de casa', isCorrect: true },
        { id: 'b', text: 'Fazer backup 3 vezes ao dia, 2 vezes por semana, 1 vez por mês', isCorrect: false },
        { id: 'c', text: 'Ter 3 pen drives, 2 HDs externos, 1 computador', isCorrect: false },
        { id: 'd', text: 'Backup em 3 pastas, 2 nuvens, 1 celular', isCorrect: false }
      ],
      explanation: 'Ter 3 cópias (original + 2 backups), em 2 tipos de mídia diferentes (nuvem + pen drive), com 1 cópia fora de casa (nuvem) protege contra qualquer desastre.',
      wrongExplanation: 'A regra 3-2-1 protege contra todos os cenários: se o computador quebrar, você tem o pen drive; se a casa pegar fogo, você tem a nuvem. É a proteção completa!'
    },
    {
      id: 17,
      category: 'Resposta a Incidentes',
      question: 'Você caiu em um golpe de PIX e transferiu dinheiro por engano. Qual o PRIMEIRO passo nas primeiras horas?',
      options: [
        { id: 'a', text: 'Esperar alguns dias para ver se o dinheiro volta', isCorrect: false },
        { id: 'b', text: 'Ligar IMEDIATAMENTE para o banco e solicitar o MED (Mecanismo Especial de Devolução)', isCorrect: true },
        { id: 'c', text: 'Tentar contatar quem recebeu o dinheiro', isCorrect: false },
        { id: 'd', text: 'Postar nas redes sociais pedindo ajuda', isCorrect: false }
      ],
      explanation: 'O MED permite bloquear o dinheiro antes que o golpista retire. Você tem até 80 dias para solicitar, mas quanto mais rápido ligar, maiores as chances de recuperar!',
      wrongExplanation: 'Cada minuto conta! Ligar para o banco nas primeiras horas aumenta muito as chances de bloquear o dinheiro. O MED é um direito seu e pode salvar seu dinheiro.'
    },
    {
      id: 18,
      category: 'Resposta a Incidentes',
      question: 'Após ser vítima de golpe, por que é importante fazer Boletim de Ocorrência mesmo que não recupere o dinheiro?',
      options: [
        { id: 'a', text: 'Só serve para estatísticas, não ajuda em nada', isCorrect: false },
        { id: 'b', text: 'É necessário para processos de ressarcimento e investigações policiais', isCorrect: true },
        { id: 'c', text: 'Não precisa fazer B.O., só ligar para o banco', isCorrect: false },
        { id: 'd', text: 'Apenas para casos acima de R$ 10.000', isCorrect: false }
      ],
      explanation: 'O B.O. é fundamental para: contestar no banco, processos judiciais, investigações policiais e até para provar em seguro. Sempre faça, mesmo em valores pequenos!',
      wrongExplanation: 'Sem B.O., o banco pode negar ressarcimento e a polícia não pode investigar. É seu documento oficial provando que foi vítima de crime, essencial para qualquer processo.'
    },
    {
      id: 19,
      category: 'Framework',
      question: 'Segundo o Framework de Segurança Digital, qual é o primeiro pilar essencial para se proteger online?',
      options: [
        { id: 'a', text: 'Comprar um antivírus caro', isCorrect: false },
        { id: 'b', text: 'Conhecimento Técnico - entender como funcionam os golpes e ameaças', isCorrect: true },
        { id: 'c', text: 'Nunca usar internet', isCorrect: false },
        { id: 'd', text: 'Confiar apenas em bancos físicos', isCorrect: false }
      ],
      explanation: 'O Conhecimento Técnico é o primeiro pilar porque você só pode se defender de ameaças que conhece. Entender como funcionam phishing, malware e golpes é a base da segurança digital.',
      wrongExplanation: 'Sem conhecer as ameaças, nem o melhor antivírus te protege completamente. O conhecimento técnico te capacita a identificar golpes antes que causem danos.'
    },
    {
      id: 20,
      category: 'Framework',
      question: 'O pilar de "Controlabilidade" do Framework ensina que:',
      options: [
        { id: 'a', text: 'Você não tem controle sobre sua segurança online', isCorrect: false },
        { id: 'b', text: 'Apenas especialistas em TI podem se proteger', isCorrect: false },
        { id: 'c', text: 'Você TEM o poder de se proteger com ações simples e práticas', isCorrect: true },
        { id: 'd', text: 'Segurança digital é muito complicada para idosos', isCorrect: false }
      ],
      explanation: 'O pilar de Controlabilidade mostra que VOCÊ tem poder! Ações simples como ativar 2FA, usar senhas fortes e fazer backup já te protegem muito. Não precisa ser especialista!',
      wrongExplanation: 'Este pilar é empoderador: mostra que com conhecimento básico e ações práticas (que você aprendeu aqui), você pode sim se proteger efetivamente. A segurança está em suas mãos!'
    }
  ],
  simulations: [
    {
      id: 1,
      title: 'E-mail Falso do Banco',
      description: 'Identifique características de um e-mail de phishing bancário',
      difficulty: 'Fácil',
      category: 'phishing',
      duration: '3-5 min',
      steps: [
        {
          question: 'Você recebeu este e-mail. O que chama sua atenção primeiro?',
          scenario: {
            from: 'banco.santander@email-security.com',
            subject: 'URGENTE: Sua conta será bloqueada em 24h',
            body: 'Prezado cliente, detectamos atividade suspeita em sua conta. Clique AQUI para confirmar seus dados e evitar o bloqueio.'
          },
          options: [
            { id: 1, text: 'O remetente parece oficial', isCorrect: false },
            { id: 2, text: 'O domínio do e-mail não é oficial do banco', isCorrect: true },
            { id: 3, text: 'A mensagem parece normal', isCorrect: false },
            { id: 4, text: 'Não vejo nada suspeito', isCorrect: false }
          ],
          explanation: 'O domínio correto do Santander seria @santander.com.br, não @email-security.com. Bancos sempre usam seus domínios oficiais.'
        },
        {
          question: 'Que outros sinais de alerta você identifica?',
          scenario: {
            body: 'ATENÇÃO! Sua conta será BLOQUEADA em 24 horas por atividade suspeita. Clique no link abaixo IMEDIATAMENTE para confirmar sua identidade e evitar o bloqueio: http://santander-verificacao.tk/login'
          },
          options: [
            { id: 1, text: 'Uso excessivo de maiúsculas e urgência', isCorrect: true },
            { id: 2, text: 'Link com domínio suspeito (.tk)', isCorrect: true },
            { id: 3, text: 'Ameaça de bloqueio para criar pressão', isCorrect: true },
            { id: 4, text: 'Todas as anteriores', isCorrect: true }
          ],
          explanation: 'Excelente! Você identificou todos os sinais: urgência excessiva, domínio falso e táticas de pressão psicológica.'
        }
      ]
    },
    {
      id: 2,
      title: 'Download de Aplicativo Falso',
      description: 'Aprenda a identificar aplicativos maliciosos',
      difficulty: 'Médio',
      category: 'malware',
      duration: '5-7 min',
      steps: [
        {
          question: 'Você quer baixar o app do seu banco. Qual opção é mais segura?',
          scenario: {
            description: 'Você encontrou três opções para baixar o aplicativo do banco:'
          },
          options: [
            { id: 1, text: 'Link enviado por WhatsApp', isCorrect: false },
            { id: 2, text: 'Google Play Store ou App Store oficial', isCorrect: true },
            { id: 3, text: 'Site de downloads gratuitos', isCorrect: false },
            { id: 4, text: 'Link em banner de site', isCorrect: false }
          ],
          explanation: 'Sempre baixe aplicativos das lojas oficiais (Google Play Store, App Store). Elas verificam os apps antes de disponibilizar.'
        }
      ]
    },
    {
      id: 3,
      title: 'Golpe do Falso Suporte',
      description: 'Reconheça táticas de engenharia social por telefone',
      difficulty: 'Médio',
      category: 'social',
      duration: '4-6 min',
      steps: [
        {
          question: 'Você recebe uma ligação: "Olá, sou do suporte técnico da Microsoft. Seu computador está infectado." Qual sua reação?',
          scenario: {
            description: 'Ligação inesperada de suposto suporte técnico'
          },
          options: [
            { id: 1, text: 'Sigo as instruções imediatamente', isCorrect: false },
            { id: 2, text: 'Pergunto o número e ligo de volta', isCorrect: true },
            { id: 3, text: 'Desligo imediatamente', isCorrect: true },
            { id: 4, text: 'Peço para aguardar e consulto alguém', isCorrect: true }
          ],
          explanation: 'Microsoft nunca liga diretamente para usuários sobre problemas. É sempre golpe. Desligue ou verifique pelos canais oficiais.'
        }
      ]
    },
    {
      id: 4,
      title: 'Criando Senha Segura',
      description: 'Aprenda a criar senhas realmente seguras',
      difficulty: 'Fácil',
      category: 'passwords',
      duration: '4-6 min',
      steps: [
        {
          question: 'Qual dessas senhas é mais segura para sua conta bancária?',
          scenario: {
            description: 'Você precisa criar uma nova senha para seu internet banking. Analise as opções:'
          },
          options: [
            { id: 1, text: '123456789', isCorrect: false },
            { id: 2, text: 'MinhaDataDeNascimento', isCorrect: false },
            { id: 3, text: 'MeuGato@Mimi2024!', isCorrect: true },
            { id: 4, text: 'senha123', isCorrect: false }
          ],
          explanation: 'A terceira opção é segura porque combina maiúsculas, minúsculas, números, símbolos e não usa informações pessoais óbvias.'
        },
        {
          question: 'Você criou uma senha forte. Onde é melhor guardá-la?',
          scenario: {
            description: 'Agora você precisa decidir como lembrar da sua nova senha segura.'
          },
          options: [
            { id: 1, text: 'Em um papel grudado no monitor', isCorrect: false },
            { id: 2, text: 'Em um gerenciador de senhas', isCorrect: true },
            { id: 3, text: 'No bloco de notas do celular', isCorrect: false },
            { id: 4, text: 'Não anoto, só confio na memória', isCorrect: false }
          ],
          explanation: 'Gerenciadores de senhas são seguros, criptografados e você só precisa lembrar de uma senha mestra.'
        }
      ]
    },
    {
      id: 5,
      title: 'Wi-Fi Público Seguro',
      description: 'Aprenda os cuidados com redes Wi-Fi públicas',
      difficulty: 'Médio',
      category: 'protection',
      duration: '5-7 min',
      steps: [
        {
          question: 'Você está no shopping e precisa acessar seu banco. Qual a melhor opção?',
          scenario: {
            description: 'Você precisa fazer uma transferência urgente e está em um local público.'
          },
          options: [
            { id: 1, text: 'Usar o Wi-Fi gratuito do shopping', isCorrect: false },
            { id: 2, text: 'Usar os dados móveis do seu celular', isCorrect: true },
            { id: 3, text: 'Pedir a senha Wi-Fi para alguém', isCorrect: false },
            { id: 4, text: 'Usar qualquer rede aberta disponível', isCorrect: false }
          ],
          explanation: 'Os dados móveis são mais seguros que Wi-Fi público para operações bancárias. Redes públicas podem ser interceptadas.'
        }
      ]
    },
    {
      id: 6,
      title: 'Backup de Emergência',
      description: 'Situação de ransomware - como o backup pode te salvar',
      difficulty: 'Avançado',
      category: 'backup',
      duration: '6-8 min',
      steps: [
        {
          question: 'Seu computador foi infectado por ransomware e todos os arquivos estão bloqueados. O que fazer primeiro?',
          scenario: {
            description: 'Na tela aparece: "Seus arquivos foram criptografados! Pague R$ 2.000 em Bitcoin para recuperá-los!"'
          },
          options: [
            { id: 1, text: 'Pagar imediatamente o resgate', isCorrect: false },
            { id: 2, text: 'Desconectar da internet e NÃO pagar', isCorrect: true },
            { id: 3, text: 'Tentar acessar os arquivos normalmente', isCorrect: false },
            { id: 4, text: 'Reiniciar o computador várias vezes', isCorrect: false }
          ],
          explanation: 'NUNCA pague resgate! Desconecte da internet para evitar mais danos e prepare-se para restaurar do backup.'
        }
      ]
    },
    {
      id: 7,
      title: 'Golpe do Falso Gerente (Caso Real)',
      description: 'Baseado em casos documentados no Brasil - identifique as táticas usadas',
      difficulty: 'Médio',
      category: 'social',
      duration: '4-6 min',
      steps: [
        {
          question: 'Você recebe uma ligação: "Olá, sou seu gerente do banco. Detectamos movimentações suspeitas em sua conta e precisamos confirmar alguns dados para sua segurança." Como você reage?',
          scenario: {
            description: 'Ligação de suposto gerente bancário com tom urgente e profissional'
          },
          options: [
            { id: 1, text: 'Forneço os dados solicitados imediatamente', isCorrect: false },
            { id: 2, text: 'Peço o nome completo dele e desligo para ligar no banco', isCorrect: true },
            { id: 3, text: 'Pergunto qual agência ele trabalha', isCorrect: false },
            { id: 4, text: 'Peço para ele aguardar enquanto pego os documentos', isCorrect: false }
          ],
          explanation: 'Bancos NUNCA ligam pedindo dados. Sempre desligue e ligue de volta usando o número oficial do banco. Esta é uma tática real documentada em vários estados brasileiros.'
        },
        {
          question: 'O "gerente" insiste: "Senhor(a), é urgente! Sua conta será bloqueada em 30 minutos se não confirmarmos. Preciso apenas do código que aparecerá no seu celular." O que fazer?',
          scenario: {
            description: 'Pressão psicológica com ameaça de bloqueio e pedido de código SMS'
          },
          options: [
            { id: 1, text: 'Dou o código para resolver rapidamente', isCorrect: false },
            { id: 2, text: 'Desligo imediatamente e vou à agência', isCorrect: true },
            { id: 3, text: 'Peço mais detalhes sobre a movimentação suspeita', isCorrect: false },
            { id: 4, text: 'Digo que vou pensar e ligo depois', isCorrect: false }
          ],
          explanation: 'NUNCA forneça códigos SMS! Eles dão acesso total à sua conta. A urgência é uma tática de pressão. Bancos resolvem problemas presencialmente, sem pressa.'
        }
      ]
    },
    {
      id: 8,
      title: 'Ransomware Doméstico (Caso Real)',
      description: 'Aprenda como se proteger de ataques que criptografam seus arquivos',
      difficulty: 'Avançado',
      category: 'backup',
      duration: '6-8 min',
      steps: [
        {
          question: 'Você liga o computador e aparece esta mensagem: "Seus arquivos foram criptografados! Pague R$ 2.000 em Bitcoin em 48h ou perderá tudo para sempre!" O que fazer PRIMEIRO?',
          scenario: {
            description: 'Tela do computador tomada por mensagem de ransomware exigindo pagamento'
          },
          options: [
            { id: 1, text: 'Pago imediatamente para recuperar as fotos da família', isCorrect: false },
            { id: 2, text: 'Desconecto da internet e NÃO pago nada', isCorrect: true },
            { id: 3, text: 'Reinicio o computador várias vezes', isCorrect: false },
            { id: 4, text: 'Procuro um técnico para tentar recuperar', isCorrect: false }
          ],
          explanation: 'NUNCA pague resgate! Desconecte da internet imediatamente para evitar mais danos. Casos reais mostram que mesmo pagando, criminosos raramente devolvem os arquivos.'
        },
        {
          question: 'Felizmente você fazia backup no Google Drive. Como proceder para recuperar tudo com segurança?',
          scenario: {
            description: 'Você tinha o hábito de fazer backup regular de fotos e documentos importantes'
          },
          options: [
            { id: 1, text: 'Formato o computador e reinstalo tudo limpo', isCorrect: true },
            { id: 2, text: 'Restauro o backup no computador ainda infectado', isCorrect: false },
            { id: 3, text: 'Uso antivírus para limpar e depois restauro', isCorrect: false },
            { id: 4, text: 'Espero alguns dias para ver se o problema passa', isCorrect: false }
          ],
          explanation: 'Correto! Com ransomware, formate tudo e instale sistema limpo. Depois restaure do backup. Essa prática salvou muitas vítimas reais de perder fotos de família insubstituíveis.'
        }
      ]
    },
    {
      id: 9,
      title: 'Aplicativo Malicioso (Caso Real)',
      description: 'Identifique apps falsos que prometem monitoramento de saúde',
      difficulty: 'Médio',
      category: 'malware',
      duration: '5-7 min',
      steps: [
        {
          question: 'Você vê um anúncio: "Novo app gratuito monitora sua pressão pelo celular! Baixe agora!" Como proceder?',
          scenario: {
            description: 'Anúncio promete monitoramento de saúde impossível pela tecnologia atual'
          },
          options: [
            { id: 1, text: 'Baixo imediatamente, parece muito útil', isCorrect: false },
            { id: 2, text: 'Desconfio - celular não mede pressão sozinho', isCorrect: true },
            { id: 3, text: 'Pesquiso no Google sobre o app', isCorrect: false },
            { id: 4, text: 'Pergunto para um amigo se conhece', isCorrect: false }
          ],
          explanation: 'Correto! Celulares não medem pressão arterial sem equipamentos externos. Apps que prometem isso são fraudes documentadas que roubam dados pessoais.'
        }
      ]
    }
  ],
  tutorials: tutorials
};

export default mockData;