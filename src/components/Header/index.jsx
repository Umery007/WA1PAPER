import { useState } from "react";
import {
  FiMessageSquare,
  FiBell,
  FiSearch,
  FiUser,
} from "react-icons/fi";

import Mensagens from "../Mensagens";
import {
  Container,
  TopBar,
  Logo,
  Menu,
  SearchArea,
  SearchBox,
  Categories,
  Category,
} from "./styles";

export default function Header({ onOpenFerramentas }) {
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  return (
    <Container>

      <TopBar>

        <Logo>
          Logomarca
        </Logo>

        <Menu>

          <button
            type="button"
            className="messages-trigger"
            aria-controls="messages-panel"
            aria-expanded={isMessagesOpen}
            onClick={() => setIsMessagesOpen(true)}
          >
            <FiMessageSquare />
            <span>Mensagens</span>
          </button>

          <a href="#">
            <FiBell />
            Notificações
          </a>

          <button type="button" onClick={onOpenFerramentas}>
            <FiUser />
          </button>

        </Menu>

      </TopBar>

      <SearchArea>

        <SearchBox>

          <input
            type="text"
            placeholder="Procurar"
          />

          <FiSearch />

        </SearchBox>

        <Categories>
          <Category>Anime</Category>
          <Category>3D</Category>
          <Category>Natureza</Category>
          <Category>Jogos</Category>
          <Category>Galáxias</Category>
          <Category>Pixel Art</Category>
          <Category>Minimalista</Category>
          <Category>Arquitetura</Category>
          <Category>Futuro</Category>
          <Category>Cyberpunk</Category>
          <Category>Astral</Category>
          <Category>HD</Category>
          <Category>Filmes</Category>
          <Category>Magia</Category>
          <Category>Y2K</Category>
          <Category>Oceanos</Category>
          <Category>Japão</Category>
          <Category>8K</Category>
        </Categories>

      </SearchArea>

      {isMessagesOpen && (
        <Mensagens
          onClose={() => setIsMessagesOpen(false)}
        />
      )}
    </Container>
  );
}