import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Simulations from "./pages/Simulations";
import Survey from "./pages/Survey";
import QuizGate from "./pages/QuizGate";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conteudo" element={<Content />} />
            <Route path="/simulacoes" element={<Simulations />} />
            <Route path="/quiz" element={<QuizGate />} />
            <Route path="/pesquisas" element={<Survey />} />
            <Route path="/contato" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl text-gray-600">Contato - Em Desenvolvimento</h1></div>} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;