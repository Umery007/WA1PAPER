import fundo from "../../assets/fundo/fundo.png";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Card,
  TopBar,
  TopTitle,
  CloseButton,
  Group219,
  Group218,
  LabelNome,
  NomeInput,
  LabelEmail,
  EmailInput,
  LabelSenha,
  SenhaInput,
  ButtonRect,
  ButtonText,
} from "./styles";

export default function Criarconta() {
  const navigate = useNavigate();

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card>
        <TopBar>
          <TopTitle>Criar</TopTitle>
          <CloseButton type="button" aria-label="Voltar" onClick={() => navigate(-1)}>
            <ArrowLeft size={22} strokeWidth={1.8} />
          </CloseButton>
        </TopBar>

        <Group219>
          <Group218>
            <LabelNome>Nome</LabelNome>
            <NomeInput placeholder="Digite aqui...." />

            <LabelEmail>E-mail</LabelEmail>
            <EmailInput type="email" placeholder="Digite aqui...." />

            <LabelSenha>Senha</LabelSenha>
            <SenhaInput type="password" placeholder="Digite aqui...." />
          </Group218>

          <ButtonRect>
            <ButtonText>Criar</ButtonText>
          </ButtonRect>
        </Group219>
      </Card>
    </Wrapper>
  );
}
