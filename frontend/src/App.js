import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Cartilha from "./pages/Cartilha";
import Simulations from "./pages/Simulations";
import Survey from "./pages/Survey";
import QuizGate from "./pages/QuizGate";
import PreQuiz from "./pages/PreQuiz";
import Quiz from "./pages/Quiz";
import { Toaster } from "./components/ui/sonner";

function AppContent() {
  const location = useLocation();
  const isCartilhaPage = location.pathname === '/cartilha';

  return (
    <div className="App">
      {!isCartilhaPage && <Header />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conteudo" element={<Content />} />
          <Route path="/cartilha" element={<Cartilha />} />
          <Route path="/simulacoes" element={<Simulations />} />
          <Route path="/quiz" element={<QuizGate />} />
          <Route path="/pre-teste" element={<PreQuiz />} />
          <Route path="/pos-teste" element={<Quiz />} />
          <Route path="/pesquisas" element={<Survey />} />
          <Route path="/contato" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl text-gray-600">Contato - Em Desenvolvimento</h1></div>} />
        </Routes>
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