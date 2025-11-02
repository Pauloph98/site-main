# Pasta de Áudio da Cartilha

Esta pasta armazena o arquivo de áudio narrado da Cartilha de Segurança Digital.

## 📁 Arquivo Esperado:
- `cartilha_audio.mp3` (~18-20 MB, ~15 minutos)

## 🎙️ Como Gerar:
Veja instruções completas em: `../../AUDIO_CARTILHA_README.md`

```bash
# Na raiz do projeto:
python gerar_audio_cartilha.py

# Mover o arquivo gerado:
move cartilha_audio.mp3 frontend/public/audio/
```

## ⚠️ Nota para Git LFS
Arquivos de áudio grandes (>10 MB) devem usar Git LFS para não sobrecarregar o repositório.

Se necessário, instale Git LFS:
```bash
git lfs install
git lfs track "*.mp3"
git add .gitattributes
```
