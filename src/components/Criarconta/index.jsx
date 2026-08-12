import fundo from "../../assets/fundo/fundo.png";
import {
  Wrapper,
  Card,
  TopBar,
  TopTitle,
  CloseButton,
  CloseIcon,
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
          <CloseButton aria-label="Fechar">
            <CloseIcon />
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
