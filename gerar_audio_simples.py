#!/usr/bin/env python3
"""
Gerador de Áudio SIMPLIFICADO para Cartilha (sem FFmpeg)
"""

import os
from gtts import gTTS

# Texto resumido para teste rápido
TEXTO_RESUMIDO = """
Olá! Bem-vindo à Cartilha de Segurança Digital para Idosos.

O que é Phishing?

Phishing é uma técnica usada por criminosos para roubar suas informações pessoais, 
como senhas, números de cartão de crédito e dados bancários. 
Eles fazem isso se passando por empresas ou pessoas confiáveis.

Como se proteger?

Primeiro: Desconfie sempre de mensagens urgentes pedindo dados pessoais.

Segundo: Não clique em links de mensagens suspeitas.

Terceiro: Entre nos sites digitando o endereço diretamente no navegador.

Quarto: Em caso de dúvida, ligue diretamente para a empresa usando o telefone oficial.

Senhas Seguras

Sua senha é como a chave da sua casa digital. 
Uma senha forte deve ter pelo menos 8 caracteres, 
misturando letras maiúsculas e minúsculas, números e símbolos.

Exemplo de senha fraca: maria1234
Exemplo de senha forte: Mar14@S3gur4!

Dica importante: Nunca use a mesma senha para tudo. 
Se um site for invadido, todos seus acessos ficam comprometidos.

Golpes em Redes Sociais

Criminosos criam perfis falsos para aplicar golpes.
Eles podem se passar por amigos, familiares, ou até mesmo você!

Como se proteger?

Sempre confirme a identidade da pessoa ligando ou enviando áudio.
Desconfie de promoções que parecem boas demais para ser verdade.
Não envie dinheiro sem confirmar a situação pessoalmente.

Compras Seguras Online

Sinais de site seguro:
O endereço começa com "https" - o "s" significa seguro.
Aparece um cadeado ao lado do endereço.
O site tem informações de contato como telefone e CNPJ.

Cuidados importantes:
Prefira sites conhecidos como Mercado Livre, Americanas e Magazine Luiza.
Desconfie de preços muito abaixo do mercado.
Use cartão de crédito virtual que seu banco oferece.
Nunca pague por transferência bancária para desconhecidos.

Conclusão

Parabéns por chegar até aqui! 
Você agora tem conhecimento para navegar na internet com muito mais segurança.

Lembre-se sempre:
Desconfie de mensagens urgentes.
Proteja suas senhas.
Confirme informações antes de tomar decisões.
Peça ajuda quando tiver dúvidas.

A internet é uma ferramenta maravilhosa quando usada com consciência. 
Mantenha-se seguro no mundo digital!
"""

print("="*60)
print("🎙️  GERADOR DE ÁUDIO - CARTILHA DE SEGURANÇA DIGITAL")
print("="*60)
print("\n⏳ Gerando áudio (pode demorar 30-60 segundos)...\n")

try:
    # Gerar áudio em português brasileiro
    print("📝 Convertendo texto em áudio...")
    tts = gTTS(text=TEXTO_RESUMIDO, lang='pt', slow=False, tld='com.br')
    
    # Salvar arquivo
    output_file = "cartilha_audio.mp3"
    tts.save(output_file)
    
    # Informações do arquivo
    file_size = os.path.getsize(output_file) / (1024 * 1024)  # MB
    
    print("\n✅ Áudio gerado com sucesso!")
    print(f"📁 Arquivo: {output_file}")
    print(f"📊 Tamanho: {file_size:.2f} MB")
    print(f"⏱️  Duração estimada: ~3-4 minutos")
    print(f"🎵 Formato: MP3")
    
    # Instruções
    print("\n" + "="*60)
    print("📌 PRÓXIMOS PASSOS:")
    print("="*60)
    print(f"\n1. Mova o arquivo para a pasta correta:")
    print(f"   move {output_file} frontend\\public\\audio\\")
    print("\n2. Faça commit:")
    print(f"   git add frontend\\public\\audio\\{output_file}")
    print(f"   git commit -m \"feat: Adicionar áudio narrado da cartilha\"")
    print(f"   git push origin main")
    print("\n3. Aguarde 3-5 min para deploy no Netlify")
    print("\n4. Teste em:")
    print("   https://lighthearted-zuccutto-b6c64c.netlify.app/cartilha")
    print("="*60)
    
except Exception as e:
    print(f"\n❌ Erro ao gerar áudio: {e}")
    print("\n💡 Tente novamente ou use alternativa online:")
    print("   https://ttsmp3.com/")
