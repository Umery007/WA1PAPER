import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Criarconta from "./components/Criarconta";
import Alterarsenha from "./components/Alterarsenha";
import Cadastrar from "./components/Cadastrar";
import Perfil from "./components/Perfil";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-conta" element={<Criarconta />} />
        <Route path="/alterar-senha" element={<Alterarsenha />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/salvos" element={<Perfil mostrarSalvos />} />
        <Route path="/Salvos-encolher" element={<Perfil mostrarSalvos salvosAmpliadoInicial={false} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;