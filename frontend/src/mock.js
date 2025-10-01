// Mock data for Digital Security Platform for Elderly

export const mockData = {
  // Navigation items
  navigation: [
    { id: 'inicio', name: 'Início', path: '/' },
    { id: 'conteudo', name: 'Conteúdo', path: '/conteudo' },
    { id: 'simulacoes', name: 'Simulações', path: '/simulacoes' },
    { id: 'quiz', name: 'Quiz', path: '/quiz' },
    { id: 'pesquisas', name: 'Pesquisas', path: '/pesquisas' },
    { id: 'contato', name: 'Contato', path: '/contato' }
  ],

  // Hero section data, features, quizQuestions...
  hero: { /* ... (conteúdo existente) ... */ },
  features: [ /* ... (conteúdo existente) ... */ ],
  quizQuestions: [ /* ... (conteúdo existente) ... */ ],

  // TUTORIAIS COM CONTEÚDO COMPLETO RESTAURADO
  tutorials: [
    // CATEGORIA: SENHAS E SEGURANÇA
    {
      id: 1,
      category: 'passwords',
      title: 'Como Criar uma Senha Super Segura',
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
      steps: [
        {
          title: 'O que é Autenticação em 2 Etapas?',
          content: 'É como ter duas chaves para sua casa - mesmo que alguém descubra sua senha, ainda precisará do seu celular.',
          details: [
            '🔑 Primeira etapa: Sua senha (o que você sabe)',
            '📱 Segunda etapa: Código no celular (o que você tem)',
            '✅ Muito mais seguro que só senha',
            '✅ Gratuito na maioria dos serviços'
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
            '5. Adicione seu número de telefone e siga os passos.'
          ],
          tip: '⚠️ Importante: Guarde os códigos de backup em local seguro!'
        },
        {
          title: 'Ativando no WhatsApp',
          content: 'Proteja seu WhatsApp com verificação em duas etapas.',
          details: [
            '1. Abra o WhatsApp e vá em "Configurações"',
            '2. Toque em "Conta" e depois em "Verificação em duas etapas"',
            '3. Toque em "Ativar" e crie um PIN de 6 dígitos.',
            '4. Adicione um e-mail de recuperação.'
          ],
          tip: '💡 Dica: Escolha um PIN que seja fácil para você, mas difícil para outros!'
        }
      ]
    },
    // CATEGORIA: BACKUP E PROTEÇÃO
    {
      id: 3,
      category: 'backup',
      title: 'Fazendo Backup no Google Drive',
      steps: [
        {
          title: 'Acesse o Google Drive',
          content: 'Se você tem Gmail, já tem Google Drive! Acesse drive.google.com.',
          details: ['1. Abra drive.google.com', '2. Faça login com sua conta Google', '3. Você tem 15GB grátis!'],
          tip: 'É como um cofre online para seus ficheiros.'
        },
        {
          title: 'Envie suas fotos e documentos',
          content: 'Vamos salvar seus ficheiros mais preciosos na nuvem.',
          details: ['1. No Google Drive, clique no botão "+ Novo"', '2. Escolha "Upload de arquivos"', '3. Selecione os ficheiros do seu computador', '4. Clique em "Abrir" e aguarde o envio.'],
          tip: '📸 Comece pelas fotos e documentos mais importantes!'
        }
      ]
    },
    {
      id: 4,
      category: 'backup',
      title: 'Backup do Celular (Android/iPhone)',
      steps: [
        {
          title: 'Backup no Android (Google)',
          content: 'Vamos configurar o backup automático do seu Android.',
          details: ['1. Abra "Configurações"', '2. Procure por "Google" e depois "Backup"', '3. Ative "Backup no Google One"', '4. Toque em "Fazer backup agora"'],
          tip: '🤖 Salva contatos, fotos, apps e configurações!'
        },
        {
          title: 'Backup no iPhone (iCloud)',
          content: 'Configure o backup automático do seu iPhone.',
          details: ['1. Abra "Ajustes"', '2. Toque no seu nome > "iCloud"', '3. Toque em "Backup do iCloud" e ative', '4. Toque em "Fazer Backup Agora"'],
          tip: '🍎 Salva contatos, fotos, mensagens e configurações!'
        }
      ]
    },
    // CATEGORIA: NAVEGAÇÃO SEGURA
    {
      id: 5,
      category: 'navigation',
      title: 'Identificando Sites Seguros',
      steps: [
        {
          title: 'Olhe para a Barra de Endereço',
          content: 'O endereço de um site diz muito sobre ele.',
          details: ['✅ Procure por "https://"', '✅ Veja se há um ícone de cadeado fechado 🔒', '❌ Cuidado com "http://" (sem o S)'],
          tip: 'O "S" em HTTPS significa "Seguro".'
        }
      ]
    },
    {
      id: 6,
      category: 'navigation',
      title: 'Configurando Privacidade no Facebook',
      steps: [
        {
          title: 'Acesse as Configurações de Privacidade',
          content: 'Vamos proteger suas informações no Facebook.',
          details: ['1. Clique na seta ▼ no canto superior direito', '2. Vá em "Configurações e Privacidade" > "Verificação de Privacidade"', '3. Siga os passos para revisar quem vê suas publicações.'],
          tip: 'Faça esta verificação a cada 6 meses.'
        }
      ]
    },
    // CATEGORIA: DISPOSITIVOS
    {
      id: 7,
      category: 'devices',
      title: 'Configurando Wi-Fi Doméstico Seguro',
      steps: [
        {
          title: 'Troque a Senha Padrão do Roteador',
          content: 'A senha que vem no seu roteador não é segura.',
          details: ['1. Aceda às configurações do seu roteador (geralmente digitando 192.168.0.1 no navegador)', '2. Procure a secção "Wireless" ou "Wi-Fi"', '3. Crie uma nova senha forte para a sua rede.'],
          tip: 'A senha do roteador é diferente da senha do Wi-Fi.'
        }
      ]
    },
    {
      id: 8,
      category: 'devices',
      title: 'Instalando e Configurando Antivírus',
      steps: [
        {
          title: 'Use o Antivírus que já vem no Windows',
          content: 'O Windows já vem com uma ótima proteção gratuita chamada Windows Defender.',
          details: ['1. Clique no menu Iniciar', '2. Digite "Segurança do Windows"', '3. Verifique se a "Proteção contra vírus e ameaças" está com um ícone verde.'],
          tip: 'Mantenha sempre o ícone de escudo verde!'
        }
      ]
    }
  ]
};

export default mockData;