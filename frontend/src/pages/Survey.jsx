import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

export const Survey = () => {
  const [formData, setFormData] = useState({
    nome_completo: '',
    faixa_etaria: '',
    frequencia_internet: '',
    seguranca_navegacao: '',
    vitima_golpe_virtual: '',
    ligacao_golpe: '',
    conhece_vitima: '',
    mensagem_suspeita: '',
    seguranca_banco: '',
    compartilha_senhas: '',
    criacao_senhas: '',
    atualiza_apps: '',
    conhece_phishing: '',
    importancia_site: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [consentAccepted, setConsentAccepted] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // Validar consentimento
    if (!consentAccepted) {
      setError('Por favor, aceite o Termo de Consentimento e a Política de Privacidade antes de enviar.');
      setSubmitting(false);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }

    // Validar se todos os campos foram preenchidos
    const emptyFields = Object.entries(formData).filter(([key, value]) => !value || value.trim() === '');
    if (emptyFields.length > 0) {
      const fieldNames = {
        nome_completo: 'Nome completo',
        faixa_etaria: 'Faixa etária',
        frequencia_internet: 'Frequência de uso da internet',
        seguranca_navegacao: 'Segurança na navegação',
        vitima_golpe_virtual: 'Vítima de golpe virtual',
        ligacao_golpe: 'Ligação de golpe',
        conhece_vitima: 'Conhece vítima',
        mensagem_suspeita: 'Mensagem suspeita',
        seguranca_banco: 'Segurança no banco',
        compartilha_senhas: 'Compartilha senhas',
        criacao_senhas: 'Criação de senhas',
        atualiza_apps: 'Atualiza aplicativos',
        conhece_phishing: 'Conhece phishing',
        importancia_site: 'Importância do site'
      };
      
      const missingFields = emptyFields.map(([key]) => fieldNames[key]).join(', ');
      setError(`Por favor, preencha os seguintes campos obrigatórios: ${missingFields}`);
      setSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      console.log('Enviando dados:', formData);
      const response = await axios.post(`${BACKEND_URL}/api/survey-responses`, formData);
      console.log('Resposta do servidor:', response);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Erro completo:', err);
      console.error('Resposta do erro:', err.response?.data);
      
      let errorMessage = 'Erro ao enviar a pesquisa. ';
      if (err.response) {
        errorMessage += `Erro do servidor: ${err.response.status} - ${JSON.stringify(err.response.data)}`;
      } else if (err.request) {
        errorMessage += 'Não foi possível conectar ao servidor. Verifique se o backend está rodando.';
      } else {
        errorMessage += err.message;
      }
      
      setError(errorMessage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-center text-2xl">Obrigado!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Sua pesquisa foi enviada com sucesso! Suas respostas ajudarão a melhorar a segurança digital para todos.
            </p>
            <p className="text-lg font-medium text-blue-600 mt-4">
              Agradecemos sua participação! 🎉
            </p>
            <Button onClick={() => window.location.href = '/'} className="w-full">
              Voltar ao Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Segurança Digital para Idosos
          </h1>
          <p className="text-xl text-gray-600">
            Pesquisa sobre experiências e conhecimentos em segurança digital
          </p>
          <p className="text-sm text-gray-500 mt-2">* Indica uma pergunta obrigatória</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
            <p className="text-red-800 font-semibold text-lg">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Seção 1: Perfil */}
          <Card>
            <CardHeader>
              <CardTitle>1. Perfil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="nome_completo" className="text-lg">Nome completo: *</Label>
                <Input
                  id="nome_completo"
                  value={formData.nome_completo}
                  onChange={(e) => handleInputChange('nome_completo', e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                  className="mt-2 text-lg p-6"
                />
              </div>

              <div>
                <Label className="text-lg mb-3 block">Qual sua faixa etária? *</Label>
                <RadioGroup value={formData.faixa_etaria} onValueChange={(value) => handleInputChange('faixa_etaria', value)}>
                  {['Menos de 50 anos', '50 a 59 anos', '60 a 69 anos', '70 a 79 anos', '80 anos ou mais'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`faixa_${option}`} />
                      <Label htmlFor={`faixa_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Com que frequência você usa a internet? *</Label>
                <RadioGroup value={formData.frequencia_internet} onValueChange={(value) => handleInputChange('frequencia_internet', value)}>
                  {['Todos os dias', 'Algumas vezes por semana', 'Raramente', 'Nunca'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`freq_${option}`} />
                      <Label htmlFor={`freq_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você se sente seguro(a) navegando na internet? *</Label>
                <RadioGroup value={formData.seguranca_navegacao} onValueChange={(value) => handleInputChange('seguranca_navegacao', value)}>
                  {['Sim', 'Não', 'Às vezes'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`seg_${option}`} />
                      <Label htmlFor={`seg_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Seção 2: Experiência com golpes */}
          <Card>
            <CardHeader>
              <CardTitle>2. Experiência com golpes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg mb-3 block">Você já foi vítima de algum golpe virtual (mensagem falsa, site falso, aplicativo malicioso etc.)? *</Label>
                <RadioGroup value={formData.vitima_golpe_virtual} onValueChange={(value) => handleInputChange('vitima_golpe_virtual', value)}>
                  {['Sim', 'Não', 'Não tenho certeza'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`golpe_${option}`} />
                      <Label htmlFor={`golpe_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você já recebeu ligações de tentativa de golpe (falso gerente de banco, falso suporte técnico, cobrança falsa etc.)? *</Label>
                <RadioGroup value={formData.ligacao_golpe} onValueChange={(value) => handleInputChange('ligacao_golpe', value)}>
                  {['Sim', 'Não', 'Não tenho certeza'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`lig_${option}`} />
                      <Label htmlFor={`lig_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você conhece alguém que já foi vítima de golpe digital? *</Label>
                <RadioGroup value={formData.conhece_vitima} onValueChange={(value) => handleInputChange('conhece_vitima', value)}>
                  {['Sim', 'Não'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`conhece_${option}`} />
                      <Label htmlFor={`conhece_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Seção 3: Segurança no dia a dia */}
          <Card>
            <CardHeader>
              <CardTitle>3. Segurança no dia a dia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg mb-3 block">Você já recebeu uma mensagem suspeita no WhatsApp, SMS ou e-mail pedindo dados pessoais ou dinheiro? *</Label>
                <RadioGroup value={formData.mensagem_suspeita} onValueChange={(value) => handleInputChange('mensagem_suspeita', value)}>
                  {['Sim', 'Não', 'Talvez'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`msg_${option}`} />
                      <Label htmlFor={`msg_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você se sente seguro(a) ao usar serviços de banco pela internet (internet banking, aplicativo)? *</Label>
                <RadioGroup value={formData.seguranca_banco} onValueChange={(value) => handleInputChange('seguranca_banco', value)}>
                  {['Sim', 'Não', 'Nunca usei'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`banco_${option}`} />
                      <Label htmlFor={`banco_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você já compartilhou senhas com familiares ou amigos? *</Label>
                <RadioGroup value={formData.compartilha_senhas} onValueChange={(value) => handleInputChange('compartilha_senhas', value)}>
                  {['Sim, sempre', 'Às vezes', 'Nunca'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`senha_comp_${option}`} />
                      <Label htmlFor={`senha_comp_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Seção 4: Práticas digitais */}
          <Card>
            <CardHeader>
              <CardTitle>4. Práticas digitais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg mb-3 block">Como você cria suas senhas? *</Label>
                <RadioGroup value={formData.criacao_senhas} onValueChange={(value) => handleInputChange('criacao_senhas', value)}>
                  {['Uso sempre a mesma senha em tudo', 'Senha simples (nome, data de nascimento)', 'Senha com letras, números e símbolos diferentes'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`cria_senha_${option}`} />
                      <Label htmlFor={`cria_senha_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você atualiza seus aplicativos e celular quando aparece aviso de atualização? *</Label>
                <RadioGroup value={formData.atualiza_apps} onValueChange={(value) => handleInputChange('atualiza_apps', value)}>
                  {['Sempre', 'Às vezes', 'Nunca'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`atualiza_${option}`} />
                      <Label htmlFor={`atualiza_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Você sabe o que é "phishing"? *</Label>
                <RadioGroup value={formData.conhece_phishing} onValueChange={(value) => handleInputChange('conhece_phishing', value)}>
                  {['Sim, sei identificar', 'Já ouvi falar, mas não entendo bem', 'Nunca ouvi falar'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`phishing_${option}`} />
                      <Label htmlFor={`phishing_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg mb-3 block">Na sua opinião, qual a importância de existir um site gratuito como este, com conteúdo e ferramentas focadas na segurança digital para idosos? *</Label>
                <RadioGroup value={formData.importancia_site} onValueChange={(value) => handleInputChange('importancia_site', value)}>
                  {['Importante, pode ajudar muitas pessoas.', 'Pouco importante.', 'Indiferente.', 'Desnecessário'].map(option => (
                    <div key={option} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option} id={`imp_${option}`} />
                      <Label htmlFor={`imp_${option}`} className="text-base cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Consentimento LGPD */}
          <Card className="border-2 border-blue-300">
            <CardContent className="pt-6">
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="survey-consent" 
                    checked={consentAccepted}
                    onCheckedChange={setConsentAccepted}
                    className="mt-1"
                  />
                  <Label htmlFor="survey-consent" className="text-base leading-relaxed cursor-pointer">
                    Li e aceito o <a href="/termos" target="_blank" className="text-blue-600 hover:underline font-semibold">Termo de Consentimento</a> e a <a href="/privacidade" target="_blank" className="text-blue-600 hover:underline font-semibold">Política de Privacidade</a>. Concordo que meus dados sejam coletados e utilizados para fins de pesquisa acadêmica (TCC), conforme descrito nos documentos. *
                  </Label>
                </div>
                {!consentAccepted && (
                  <p className="text-sm text-red-600 font-medium">
                    ⚠️ É necessário aceitar os termos para enviar a pesquisa.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg"
              disabled={submitting || !consentAccepted}
            >
              {submitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Pesquisa
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;