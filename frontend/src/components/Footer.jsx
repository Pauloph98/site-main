import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Segurança Digital</span>
            </div>
            <p className="text-gray-300 mb-4">
              Promovendo a segurança digital para a terceira idade através de 
              educação, conscientização e ferramentas práticas de proteção online.
            </p>
            <p className="text-sm text-gray-400">
              Desenvolvido com foco na acessibilidade e na proteção dos idosos 
              contra crimes cibernéticos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/conteudo" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Conteúdo Educativo
                </a>
              </li>
              <li>
                <a href="/simulacoes" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Simulações
                </a>
              </li>
              <li>
                <a href="/quiz" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Quiz Interativo
                </a>
              </li>
              <li>
                <a href="/tutoriais" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Tutoriais
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">contato@segurancadigital.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Segurança Digital para Idosos. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="/privacidade" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;