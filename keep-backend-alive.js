/**
 * Script para manter o backend do Render ativo
 * Executa pings regulares para evitar hibernação
 */

const BACKEND_URL = 'https://seguranca-digital-backend.onrender.com';
const PING_INTERVAL = 10 * 60 * 1000; // 10 minutos em milissegundos

async function pingBackend() {
  const timestamp = new Date().toLocaleString('pt-BR');
  console.log(`[${timestamp}] 🔄 Fazendo ping no backend...`);
  
  try {
    const response = await fetch(`${BACKEND_URL}/api/quiz-results/stats`);
    
    if (response.ok) {
      console.log(`[${timestamp}] ✅ Backend respondeu com status ${response.status}`);
    } else {
      console.log(`[${timestamp}] ⚠️ Backend respondeu com erro ${response.status}`);
    }
  } catch (error) {
    console.error(`[${timestamp}] ❌ Erro ao fazer ping:`, error.message);
  }
}

// Executa imediatamente
console.log('🚀 Iniciando monitor do backend...');
console.log(`📡 Backend URL: ${BACKEND_URL}`);
console.log(`⏰ Intervalo: ${PING_INTERVAL / 60000} minutos\n`);

pingBackend();

// Executa a cada intervalo
setInterval(pingBackend, PING_INTERVAL);

// Mantém o processo rodando
process.on('SIGINT', () => {
  console.log('\n👋 Encerrando monitor do backend...');
  process.exit(0);
});
