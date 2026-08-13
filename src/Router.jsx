import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Criarconta from "./components/Criarconta";
import Alterarsenha from "./components/Alterarsenha";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-conta" element={<Criarconta />} />
        <Route path="/alterar-senha" element={<Alterarsenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;