import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Home não faz lazy load (primeira página)
import { Toaster } from "./components/ui/sonner";

// Code Splitting: carrega páginas sob demanda
const Content = lazy(() => import("./pages/Content"));
const Cartilha = lazy(() => import("./pages/Cartilha"));
const Simulations = lazy(() => import("./pages/Simulations"));
const Survey = lazy(() => import("./pages/Survey"));
const QuizGate = lazy(() => import("./pages/QuizGate"));
const PreQuiz = lazy(() => import("./pages/PreQuiz"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Termos = lazy(() => import("./pages/Termos"));
const Privacidade = lazy(() => import("./pages/Privacidade"));

function AppContent() {
  const location = useLocation();
  const isCartilhaPage = location.pathname === '/cartilha';

  return (
    <div className="App">
      {!isCartilhaPage && <Header />}
      <main className="min-h-screen">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-base">Carregando...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conteudo" element={<Content />} />
            <Route path="/cartilha" element={<Cartilha />} />
            <Route path="/simulacoes" element={<Simulations />} />
            <Route path="/quiz" element={<QuizGate />} />
            <Route path="/pre-teste" element={<PreQuiz />} />
            <Route path="/pos-teste" element={<Quiz />} />
            <Route path="/pesquisas" element={<Survey />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
          </Routes>
        </Suspense>
      </main>
      {!isCartilhaPage && <Footer />}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;