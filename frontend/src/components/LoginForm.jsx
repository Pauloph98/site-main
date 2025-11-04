import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert } from './ui/alert';
import { Shield, Lock, User } from 'lucide-react';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Credenciais fixas para o dashboard (pode ser alterado depois para usar backend)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'Ph@842972';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simular delay de validação
    setTimeout(() => {
      if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
        // Login bem-sucedido
        localStorage.setItem('dashboardAuth', 'true');
        localStorage.setItem('dashboardUser', credentials.username);
        onLogin();
      } else {
        setError('Usuário ou senha incorretos');
      }
      setLoading(false);
    }, 500);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Dashboard Administrativo
          </CardTitle>
          <CardDescription className="text-gray-600">
            Acesso restrito - Insira suas credenciais
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="bg-red-50 border-red-200">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-red-600" />
                  <span className="text-red-800">{error}</span>
                </div>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Usuário
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Digite seu usuário"
                  value={credentials.username}
                  onChange={handleChange}
                  className="pl-10 h-12"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={credentials.password}
                  onChange={handleChange}
                  className="pl-10 h-12"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Entrando...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Entrar no Dashboard</span>
                </div>
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Projeto TCC - Segurança Digital para Idosos
            </p>
            <p className="text-xs text-gray-500">
              UNIALFA © 2025
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
