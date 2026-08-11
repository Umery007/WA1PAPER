import { useState } from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import { Ferramentas } from "../../components/Ferramentas";
import { Container, Content } from "./styles";

export default function Home() {
  const [isFerramentasOpen, setIsFerramentasOpen] = useState(false);

  return (
    <Container>
      <Header onOpenFerramentas={() => setIsFerramentasOpen(true)} />
      <Banner />
      <Cards />
      <Content />

      {isFerramentasOpen && (
        <Ferramentas onClose={() => setIsFerramentasOpen(false)} />
      )}
    </Container>
  );
}
