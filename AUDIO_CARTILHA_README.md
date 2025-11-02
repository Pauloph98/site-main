# 🎙️ Guia de Geração de Áudio para Cartilha

## 📋 O que foi implementado?

✅ **AudioPlayer.jsx** - Componente React acessível com:
- Play/Pause com botões grandes (56x56px) 
- Controle de volume visual
- Barra de progresso interativa
- Reiniciar áudio
- Download do MP3
- WCAG 2.1 AA compliant (ARIA labels, contraste, touch targets)
- Instruções para idosos

✅ **gerar_audio_cartilha.py** - Script Python para gerar MP3:
- Converte texto da cartilha em áudio
- Usa Google Text-to-Speech (gTTS) - GRATUITO
- Voz em Português Brasileiro
- Ajuste de velocidade (0.9x = mais lento para idosos)
- Opção de versão completa ou resumida

✅ **Integração na Cartilha** - Player aparece no topo da página

---

## 🚀 Como Gerar o Áudio

### Passo 1: Instalar Dependências

```powershell
# No terminal do VS Code:
pip install gtts pydub
```

### Passo 2: Instalar FFmpeg (necessário para pydub)

**Windows:**
1. Baixe: https://ffmpeg.org/download.html (Windows builds)
2. Extraia para `C:\ffmpeg`
3. Adicione ao PATH:
   ```powershell
   $env:Path += ";C:\ffmpeg\bin"
   ```

**OU use Chocolatey (mais fácil):**
```powershell
choco install ffmpeg
```

### Passo 3: Gerar o Áudio

```powershell
# Navegar para a raiz do projeto
cd c:\Users\PauloH\Downloads\site-main

# Executar o gerador
python gerar_audio_cartilha.py
```

**Escolha:**
- Opção `1` - Áudio COMPLETO (~15 min, ~20 MB)
- Opção `2` - Áudio RESUMIDO (~2 min, ~3 MB) - para testar primeiro

### Passo 4: Mover o Arquivo

```powershell
# Criar pasta de áudio
mkdir frontend\public\audio

# Mover o arquivo gerado
move cartilha_audio.mp3 frontend\public\audio\
```

### Passo 5: Testar Localmente

```powershell
cd frontend
npm start
```

Acesse: http://localhost:3000/cartilha

---

## 📊 Especificações do Áudio

| Propriedade | Valor |
|---|---|
| **Formato** | MP3 |
| **Bitrate** | 128 kbps |
| **Idioma** | Português Brasileiro (pt-BR) |
| **Velocidade** | 0.9x (10% mais lento - ideal para idosos) |
| **Duração Completa** | ~15 minutos |
| **Tamanho Completo** | ~18-20 MB |
| **Duração Resumida** | ~2 minutos |
| **Tamanho Resumido** | ~3 MB |

---

## 🎨 Recursos do AudioPlayer

### Para o Usuário:
- ▶️ **Reproduzir/Pausar** - Botão grande e destacado
- ⟲ **Reiniciar** - Volta para o início
- 🔊 **Volume** - Controle deslizante visual
- 🔇 **Mudo** - Liga/desliga som rapidamente
- ⬇️ **Download** - Salva MP3 para ouvir offline
- 📊 **Progresso** - Barra mostrando tempo atual/total

### Acessibilidade (WCAG 2.1 AA):
- ✅ Botões ≥44x44px (touch targets)
- ✅ Fonte ≥16px
- ✅ Contraste de cores ≥4.5:1
- ✅ ARIA labels em todos os controles
- ✅ Navegação por teclado (Tab, Enter, Space)
- ✅ Instruções em texto simples para idosos

### Tratamento de Erros:
- Exibe mensagem amigável se áudio não carregar
- Oferece botão de download como fallback
- Console log para debugging

---

## 📁 Estrutura de Arquivos

```
site-main/
├── gerar_audio_cartilha.py          # Script gerador
├── frontend/
│   ├── public/
│   │   └── audio/
│   │       └── cartilha_audio.mp3   # ← Áudio final (você cria)
│   └── src/
│       ├── components/
│       │   └── AudioPlayer.jsx      # ✅ Criado
│       └── pages/
│           └── Cartilha.jsx         # ✅ Modificado
```

---

## 🐛 Troubleshooting

### Erro: "No module named 'gtts'"
```powershell
pip install gtts
```

### Erro: "No module named 'pydub'"
```powershell
pip install pydub
```

### Erro: "ffmpeg not found"
```powershell
# Windows com Chocolatey:
choco install ffmpeg

# Ou baixe manual: https://ffmpeg.org/download.html
```

### Erro: "Permission denied" ao mover arquivo
```powershell
# Use copy ao invés de move:
copy cartilha_audio.mp3 frontend\public\audio\
```

### AudioPlayer não aparece na página
1. Verifique se `frontend/public/audio/cartilha_audio.mp3` existe
2. Limpe cache: Ctrl+Shift+R no navegador
3. Verifique console do navegador (F12) para erros

### Áudio não carrega no Netlify após deploy
1. Verifique se o arquivo foi commitado:
   ```powershell
   git add frontend/public/audio/cartilha_audio.mp3
   git commit -m "feat: Adicionar áudio narrado da cartilha"
   git push
   ```
2. Aguarde 3-5 min para deploy
3. Teste: https://seu-site.netlify.app/cartilha

---

## 📝 Commit Sugerido

```powershell
# Adicionar todos os arquivos
git add frontend/src/components/AudioPlayer.jsx
git add frontend/src/pages/Cartilha.jsx
git add frontend/public/audio/cartilha_audio.mp3
git add gerar_audio_cartilha.py
git add AUDIO_CARTILHA_README.md

# Commit descritivo
git commit -m "feat: Adicionar player de áudio acessível na cartilha" -m "- Componente AudioPlayer com controles WCAG 2.1 AA" -m "- Script Python para gerar MP3 com gTTS" -m "- Áudio narrado em PT-BR (15 min, 128kbps)" -m "- Botões grandes, ARIA labels, download offline" -m "- Instruções visuais para idosos"

# Push
git push origin main
```

---

## 🎯 Para o TCC

### Benefícios de Acessibilidade:

1. **Multimodal** - Idosos podem LER ou OUVIR
2. **Baixa visão** - Áudio ajuda quem tem dificuldade de leitura
3. **Analfabetismo funcional** - Narração complementa texto
4. **Mobilidade** - Podem ouvir enquanto fazem outras atividades
5. **Download offline** - Não precisa internet para ouvir novamente

### No Relatório:

> "Para ampliar a acessibilidade do conteúdo educacional, implementamos um player de áudio narrado da cartilha completa, utilizando síntese de voz em português brasileiro (Google Text-to-Speech). O componente AudioPlayer foi desenvolvido seguindo diretrizes WCAG 2.1 AA, com controles grandes (≥44×44px), ARIA labels descritivos, e opção de download para uso offline. Esta funcionalidade beneficia especialmente idosos com baixa visão, analfabetismo funcional, ou preferência por aprendizado auditivo."

### Screenshots Recomendados:
- `audio_player_desktop.png` - Player na Cartilha (desktop)
- `audio_player_mobile.png` - Player no celular
- `audio_controles_foco.png` - Navegação por teclado com Tab

---

## ⚙️ Alternativas (se gTTS não funcionar)

### Opção 1: Serviço Online
- https://ttsmp3.com/ (gratuito, PT-BR)
- Cole o texto, baixe MP3

### Opção 2: Microsoft Edge Read Aloud
1. Abra `Cartilha_Seguranca_Digital_Idosos.md` no Edge
2. Clique em "Ler em voz alta" (Ctrl+Shift+U)
3. Use OBS Studio para gravar o áudio

### Opção 3: ElevenLabs (melhor qualidade, pago)
- https://elevenlabs.io/
- Vozes naturais em PT-BR
- $5 para ~30 min de áudio

---

## 📞 Suporte

Se tiver problemas:
1. Verifique se Python 3.8+ está instalado: `python --version`
2. Reinstale dependências: `pip install --upgrade gtts pydub`
3. Teste o script: `python gerar_audio_cartilha.py`
4. Abra Issue no GitHub com erro completo

---

**Última atualização:** 2 de novembro de 2025
**Autor:** Sistema de Acessibilidade TCC UNIALFA
