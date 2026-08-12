import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Criarconta from "./components/Criarconta";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-conta" element={<Criarconta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;