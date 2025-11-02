import React from 'react';
import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <span className="text-xl font-bold">Segurança Digital</span>
            </div>
            <p className="text-gray-300 mb-4 text-base">
              Promovendo a segurança digital para a terceira idade através de 
              educação, conscientização e ferramentas práticas de proteção online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav aria-label="Links de navegação do rodapé">
              <ul className="space-y-2">
                <li><a href="/conteudo" className="text-gray-300 hover:text-blue-400 transition-colors text-base min-h-touch inline-block" aria-label="Ir para Conteúdo Educativo">Conteúdo Educativo</a></li>
                <li><a href="/simulacoes" className="text-gray-300 hover:text-blue-400 transition-colors text-base min-h-touch inline-block" aria-label="Ir para Simulações">Simulações</a></li>
                <li><a href="/quiz" className="text-gray-300 hover:text-blue-400 transition-colors text-base min-h-touch inline-block" aria-label="Ir para Quiz Interativo">Quiz Interativo</a></li>
                <li><a href="/pesquisas" className="text-gray-300 hover:text-blue-400 transition-colors text-base min-h-touch inline-block" aria-label="Ir para Pesquisas">Pesquisas</a></li>
              </ul>
            </nav>
            <h3 className="text-lg font-semibold mt-6 mb-4">Informações Legais</h3>
            <nav aria-label="Links de informações legais">
              <ul className="space-y-2">
                <li><a href="/termos" className="text-gray-300 hover:text-blue-400 transition-colors text-base min-h-touch inline-block" aria-label="Ler Termo de Consentimento">Termo de Consentimento</a></li>
                <li><a href="/privacidade" className="text-gray-300 hover:text-blue-400 transition-colors text-base min-h-touch inline-block" aria-label="Ler Política de Privacidade">Política de Privacidade</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-base">
          <p>&copy; 2025 Paulo Henrique Pereira Silva Barros - TCC UNIALFA. Todos os direitos reservados.</p>
          <p className="mt-2">Este projeto está em conformidade com a LGPD (Lei 13.709/2018)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;