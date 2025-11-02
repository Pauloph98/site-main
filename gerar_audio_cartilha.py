#!/usr/bin/env python3
"""
Gerador de Áudio para Cartilha de Segurança Digital
Usando Google Text-to-Speech (gTTS) - Gratuito
"""

import os
from pathlib import Path

try:
    from gtts import gTTS
    import pydub
    from pydub import AudioSegment
except ImportError:
    print("❌ Dependências não encontradas!")
    print("\n📦 Instale com:")
    print("   pip install gtts pydub")
    print("\n🎵 Instale também o FFmpeg:")
    print("   Windows: https://ffmpeg.org/download.html")
    print("   Linux: sudo apt install ffmpeg")
    exit(1)

# Conteúdo da Cartilha para conversão em áudio
TEXTO_CARTILHA = """
Cartilha de Segurança Digital para Idosos.
Introdução à Segurança Digital.

Olá! Esta cartilha foi desenvolvida especialmente para você, que deseja navegar na internet com mais segurança e confiança.

A internet trouxe inúmeros benefícios para nossas vidas: podemos conversar com familiares distantes, pagar contas sem sair de casa, fazer compras, assistir vídeos, e muito mais. No entanto, assim como no mundo real, precisamos tomar alguns cuidados para nossa proteção.

Neste guia, você aprenderá sobre os principais riscos da internet e, principalmente, como se proteger deles de forma simples e prática.

Capítulo 1: O que é Phishing?

Phishing é uma técnica usada por criminosos para roubar suas informações pessoais, como senhas, números de cartão de crédito e dados bancários. Eles fazem isso se passando por empresas ou pessoas confiáveis.

Como funciona?
Você recebe uma mensagem por e-mail, SMS ou WhatsApp que parece ser de uma empresa conhecida, como seu banco, operadora de telefone, ou até mesmo um amigo. A mensagem geralmente tem um tom urgente, dizendo que você precisa clicar em um link imediatamente, ou sua conta será bloqueada.

Exemplo real:
"Seu WhatsApp será desativado! Clique aqui para renovar"
"Seu CPF foi usado em uma compra suspeita. Confirme seus dados"

Como se proteger?
Desconfie sempre de mensagens urgentes pedindo dados pessoais.
Não clique em links de mensagens suspeitas.
Entre nos sites digitando o endereço diretamente no navegador.
Verifique o remetente com atenção - criminosos usam e-mails parecidos, mas não idênticos.
Em caso de dúvida, ligue diretamente para a empresa usando o telefone oficial.

Capítulo 2: Senhas Seguras

Sua senha é como a chave da sua casa digital. Se alguém descobrir, pode acessar suas contas, ler suas mensagens, fazer compras em seu nome, e até roubar seu dinheiro.

Características de uma senha forte:
Pelo menos 8 caracteres
Misture letras maiúsculas e minúsculas
Inclua números
Use símbolos como arroba, exclamação, ou cerquilha

Exemplo de senha FRACA: maria1234 ou 01011950
Exemplo de senha FORTE: Mar14@S3gur4!

Dicas práticas:
Nunca use a mesma senha para tudo - se um site for invadido, todos seus acessos ficam comprometidos.
Não use informações pessoais óbvias como data de nascimento, nome de filhos, ou telefone.
Anote suas senhas em um caderno físico guardado em local seguro - é mais seguro do que usar senhas fracas.
Considere usar um gerenciador de senhas, como o Bitwarden ou 1Password.
Troque suas senhas importantes a cada 6 meses.

Capítulo 3: Golpes em Redes Sociais

Criminosos criam perfis falsos em redes sociais como Facebook, Instagram e WhatsApp para aplicar golpes. Eles podem se passar por amigos, familiares, ou até mesmo você!

Tipos comuns de golpe:
Golpe do parente em apuros: você recebe uma mensagem de alguém se passando por um familiar pedindo dinheiro urgentemente.
Golpe da falsa promoção: promessas de prêmios ou produtos grátis em troca de compartilhar links ou fornecer dados.
Golpe da vaga de emprego: ofertas de trabalho falsas pedindo pagamento antecipado.

Como se proteger?
Sempre confirme a identidade da pessoa ligando ou enviando áudio.
Desconfie de promoções "bom demais para ser verdade".
Não envie dinheiro sem confirmar a situação pessoalmente.
Configure a privacidade do seu perfil para "amigos" apenas.
Não aceite pedidos de amizade de pessoas desconhecidas.

Capítulo 4: Compras Seguras Online

Comprar pela internet é prático, mas exige cuidados para evitar fraudes.

Sinais de site seguro:
O endereço começa com "https" (o "s" significa seguro)
Aparece um cadeado ao lado do endereço
O site tem informações de contato (telefone, endereço, CNPJ)
Avaliações de outros clientes são reais e recentes

Cuidados ao comprar:
Prefira sites conhecidos (Mercado Livre, Americanas, Magazine Luiza)
Desconfie de preços muito abaixo do mercado
Use cartão de crédito virtual (seu banco oferece)
Guarde o comprovante de compra
Nunca pague por transferência bancária para desconhecidos

Capítulo 5: Proteção de Dispositivos

Seu celular e computador precisam de proteção, assim como sua casa tem portas e janelas.

Proteja seus dispositivos:
Mantenha o sistema sempre atualizado - atualizações corrigem falhas de segurança.
Instale um antivírus confiável (Avast, AVG, Windows Defender)
Faça backup das suas fotos e documentos importantes no Google Drive ou pen-drive.
Use senha ou biometria para desbloquear o celular.
Cuidado com Wi-Fi público - evite acessar banco ou fazer compras.

Aplicativos seguros:
Baixe apps apenas da Play Store ou App Store oficial.
Leia as avaliações antes de instalar.
Desconfie de apps pedindo muitas permissões.
Desinstale apps que você não usa mais.

Conclusão

Parabéns por chegar até aqui! Você agora tem conhecimento para navegar na internet com muito mais segurança.

Lembre-se sempre:
Desconfie de mensagens urgentes.
Proteja suas senhas.
Confirme informações antes de tomar decisões.
Peça ajuda quando tiver dúvidas.

A internet é uma ferramenta maravilhosa quando usada com consciência. Continue aprendendo e compartilhe este conhecimento com amigos e familiares.

Mantenha-se seguro no mundo digital!
"""

def gerar_audio_cartilha(texto, output_path="cartilha_audio.mp3", velocidade=0.9):
    """
    Gera arquivo de áudio MP3 a partir do texto
    
    Args:
        texto: Texto para converter em áudio
        output_path: Caminho do arquivo de saída
        velocidade: Velocidade da narração (0.5 = lento, 1.0 = normal, 1.5 = rápido)
    """
    
    print("🎙️  Gerando áudio da cartilha...")
    print(f"📝 Caracteres: {len(texto)}")
    
    try:
        # Gerar áudio em português brasileiro
        tts = gTTS(text=texto, lang='pt', slow=False, tld='com.br')
        
        # Salvar temporariamente
        temp_file = "temp_audio.mp3"
        tts.save(temp_file)
        print(f"✅ Áudio base gerado: {temp_file}")
        
        # Ajustar velocidade se necessário
        if velocidade != 1.0:
            print(f"⚙️  Ajustando velocidade para {velocidade}x...")
            audio = AudioSegment.from_mp3(temp_file)
            
            # Alterar velocidade mantendo o pitch
            audio_ajustado = audio._spawn(
                audio.raw_data, 
                overrides={"frame_rate": int(audio.frame_rate * velocidade)}
            )
            audio_ajustado = audio_ajustado.set_frame_rate(audio.frame_rate)
            
            audio_ajustado.export(output_path, format="mp3", bitrate="128k")
            os.remove(temp_file)
        else:
            os.rename(temp_file, output_path)
        
        # Informações do arquivo
        file_size = os.path.getsize(output_path) / (1024 * 1024)  # MB
        audio_final = AudioSegment.from_mp3(output_path)
        duracao = len(audio_final) / 1000 / 60  # minutos
        
        print("\n✅ Áudio gerado com sucesso!")
        print(f"📁 Arquivo: {output_path}")
        print(f"📊 Tamanho: {file_size:.2f} MB")
        print(f"⏱️  Duração: {duracao:.1f} minutos")
        print(f"🎵 Formato: MP3 (128 kbps)")
        
        # Instruções de uso
        print("\n" + "="*60)
        print("📌 PRÓXIMOS PASSOS:")
        print("="*60)
        print(f"1. Mova o arquivo '{output_path}' para:")
        print("   frontend/public/audio/cartilha_audio.mp3")
        print("\n2. O AudioPlayer já está configurado para usar este arquivo")
        print("\n3. Para testar localmente:")
        print("   cd frontend && npm start")
        print("\n4. Para fazer commit:")
        print("   git add frontend/public/audio/cartilha_audio.mp3")
        print("   git commit -m 'feat: Adicionar áudio narrado da cartilha'")
        print("="*60)
        
        return True
        
    except Exception as e:
        print(f"\n❌ Erro ao gerar áudio: {e}")
        print("\n💡 Dicas de troubleshooting:")
        print("   - Verifique se o FFmpeg está instalado")
        print("   - Reinstale: pip install --upgrade gtts pydub")
        return False

def criar_versao_resumida():
    """Cria versão resumida (exemplo de 1 seção) para teste rápido"""
    
    texto_resumido = """
    Olá! Bem-vindo à Cartilha de Segurança Digital para Idosos.
    
    O que é Phishing?
    
    Phishing é uma técnica usada por criminosos para roubar suas informações pessoais.
    Eles se passam por empresas confiáveis através de mensagens falsas.
    
    Como se proteger?
    Desconfie sempre de mensagens urgentes pedindo dados pessoais.
    Não clique em links suspeitos.
    Em caso de dúvida, ligue diretamente para a empresa.
    
    Lembre-se: sua segurança digital começa com você!
    """
    
    print("\n🎬 Gerando versão RESUMIDA (para teste)...")
    return gerar_audio_cartilha(texto_resumido, "cartilha_audio_resumo.mp3", velocidade=0.9)

if __name__ == "__main__":
    print("="*60)
    print("🎙️  GERADOR DE ÁUDIO - CARTILHA DE SEGURANÇA DIGITAL")
    print("="*60)
    print("\nEscolha uma opção:")
    print("1 - Gerar áudio COMPLETO (~15 minutos)")
    print("2 - Gerar áudio RESUMIDO (~2 minutos) - para teste")
    print("3 - Sair")
    
    escolha = input("\nOpção: ").strip()
    
    if escolha == "1":
        print("\n⏳ Gerando áudio completo (pode demorar 1-2 minutos)...")
        gerar_audio_cartilha(TEXTO_CARTILHA, "cartilha_audio.mp3", velocidade=0.9)
    elif escolha == "2":
        criar_versao_resumida()
    else:
        print("❌ Saindo...")
