import { useNavigate } from "react-router-dom";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
  CardsContainer,
  Card,
  CardTitle,
  CardContent,
  ToolButton,
} from "./styles";

export function Ferramentas({ onClose }) {
  const navigate = useNavigate();

  function handleCreateAccount() {
    onClose();
    navigate("/criar-conta");
  }

  function handleAlterarSenha() {
    onClose();
    navigate("/alterar-senha");
  }

  function handleCadastrar() {
    onClose();
    navigate("/cadastro");
  }

  function handlePerfil() {
    onClose();
    navigate("/perfil");
  }

  function handleBaixados() {
    onClose();
    navigate("/baixados");
  }

  function handleFavoritados() {
    onClose();
    navigate("/favoritados");
  }

  return (
    <Overlay>
      <Modal>

        <Header>
          <Title>Ferramentas do Usuário</Title>

          <CloseButton onClick={onClose}>
            ×
          </CloseButton>
        </Header>

        <CardsContainer>

          {/* CONTA */}
          <Card>
            <CardTitle>Conta</CardTitle>

            <CardContent>
              <ToolButton onClick={handleCadastrar}>
                 Cadastro
              </ToolButton>

              <ToolButton>
                Sair da conta
              </ToolButton>

              <ToolButton onClick={handleCreateAccount}>
                Criar conta
              </ToolButton>

              <ToolButton onClick={handlePerfil}>
                Perfil
              </ToolButton>
            </CardContent>
          </Card>


          {/* WALLPAPERS */}
          <Card>
            <CardTitle>Wallpapers</CardTitle>

            <CardContent>
              <ToolButton onClick={handleBaixados}>
                Baixados
              </ToolButton>

              <ToolButton onClick={handleFavoritados}>
                Favoritos
              </ToolButton>

              <ToolButton>
                Explorar Comunidades
              </ToolButton>

              <ToolButton onClick={handleAlterarSenha}>
                Alterar senha 
              </ToolButton>
            </CardContent>
          </Card>


          {/* SEGURANÇA */}
          <Card>
            <CardTitle>Segurança</CardTitle>

            <CardContent>
              <ToolButton >
                Dispositivos Conectados
              </ToolButton>

              <ToolButton>
                Histórico de login
              </ToolButton>

              <ToolButton>
                Ativar autentificação em dois fatores
              </ToolButton>
            </CardContent>
          </Card>


          {/* PREMIUM */}
          <Card>
            <CardTitle>Premium</CardTitle>

            <CardContent>
              <ToolButton>
                Botão para upgrade
              </ToolButton>

              <ToolButton>
                Benefícios do plano
              </ToolButton>

              <ToolButton>
                Créditos de IA restantes
              </ToolButton>
            </CardContent>
          </Card>

        </CardsContainer>

      </Modal>
    </Overlay>
  );
}