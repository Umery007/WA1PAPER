import {
  FiArrowLeft,
  FiCopy,
  FiHeart,
  FiMessageSquare,
  FiMoreHorizontal,
  FiRefreshCw,
  FiShare2,
  FiThumbsDown,
  FiThumbsUp,
  FiUser,
} from "react-icons/fi";
import paper from "../../assets/img-cards/paper.jpeg";
import Prompt from "../Prompt";
import {
  ActionRow,
  BackButton,
  Brand,
  BrandMark,
  Content,
  Description,
  Header,
  HeaderUser,
  Main,
  Preview,
  Rail,
  RailButton,
  Screen,
  Sidebar,
  SidebarItem,
  SmallAction,
  Title,
  Toolbar,
  UserAvatar,
  WallpaperCard,
} from "./styles";

export default function TelaCheia({ onClose, image = paper }) {
  return (
    <Screen aria-label="Tela cheia do gerador de wallpapers">
      <Rail>
        <BrandMark aria-label="LogoMarca">W</BrandMark>
        <RailButton type="button" aria-label="Conversas" title="Conversas">
          <FiMessageSquare />
        </RailButton>
        <RailButton type="button" aria-label="Compartilhar" title="Compartilhar">
          <FiShare2 />
        </RailButton>
      </Rail>

      <Sidebar>
        <Brand>LogoMarca</Brand>
        <SidebarItem type="button">
          <FiMessageSquare /> Novo chat
        </SidebarItem>
        <SidebarItem type="button">
          <FiHeart /> Wallpapers favoritos
        </SidebarItem>
        <SidebarItem type="button">
          <FiMoreHorizontal /> Projetos
        </SidebarItem>
      </Sidebar>

      <Main>
        <Header>
          <BackButton type="button" onClick={onClose} aria-label="Voltar para o chatbot" title="Voltar">
            <FiArrowLeft />
          </BackButton>
          <HeaderUser>
            <span>LogoMarca</span>
            <UserAvatar aria-label="Perfil"><FiUser /></UserAvatar>
          </HeaderUser>
        </Header>

        <Content>
          <Title>Seu wallpaper personalizado</Title>
          <Description>
            A imagem mistura o traço clássico de Cel Shading, com uma pintura digital semi-realista e cheia de filtros de desfoque. Descreva o que você imagina e crie algo único.
          </Description>
          <WallpaperCard>
            <Preview src={image} alt="Wallpaper gerado" />
          </WallpaperCard>
          <p className="helper">Se quiser trocar ou alterar a imagem é só me mandar!</p>
          <ActionRow aria-label="Ações do wallpaper">
            <SmallAction type="button" aria-label="Copiar imagem" title="Copiar"><FiCopy /></SmallAction>
            <SmallAction type="button" aria-label="Curtir" title="Curtir"><FiThumbsUp /></SmallAction>
            <SmallAction type="button" aria-label="Não gostei" title="Não gostei"><FiThumbsDown /></SmallAction>
            <SmallAction type="button" aria-label="Compartilhar" title="Compartilhar"><FiShare2 /></SmallAction>
            <SmallAction type="button" aria-label="Gerar novamente" title="Gerar novamente"><FiRefreshCw /></SmallAction>
          </ActionRow>
          <Toolbar>
            <Prompt placeholder="Crie seu wallpaper" />
          </Toolbar>
          <p className="notice">Nosso site pode cometer erros pois estamos em processo de crescimento :)</p>
        </Content>
      </Main>
    </Screen>
  );
}
