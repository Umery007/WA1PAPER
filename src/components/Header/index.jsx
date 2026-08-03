import {
  FiMessageSquare,
  FiBell,
  FiSearch,
  FiUser,
} from "react-icons/fi";

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

export default function Header() {
  return (
    <Container>

      <TopBar>

        <Logo>
          Logomarca
        </Logo>

        <Menu>

          <a href="#">
            <FiMessageSquare />
            Mensagens
          </a>

          <a href="#">
            <FiBell />
            Notificações
          </a>

          <button>
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
          
        </Categories>

      </SearchArea>

    </Container>
  );
}