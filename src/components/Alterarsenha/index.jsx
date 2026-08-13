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
  PasswordInfo,
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
          <TopTitle>Alteração de senha</TopTitle>

          <CloseButton aria-label="Fechar">
            <CloseIcon />
          </CloseButton>
        </TopBar>

        <Group219>
          <Group218>

            <PasswordInfo>
              Sua senha deverá conter no mínimo 8 e no máximo 70
            </PasswordInfo>

            <LabelNome>
              Digite sua senha atual
            </LabelNome>

            <NomeInput
              type="password"
              placeholder="Digite aqui...."
            />

            <LabelEmail>
              Nova senha
            </LabelEmail>

            <EmailInput
              type="password"
              placeholder="Digite aqui...."
            />

            <LabelSenha>
              Confirme a senha
            </LabelSenha>

            <SenhaInput
              type="password"
              placeholder="Digite aqui...."
            />

          </Group218>

          <ButtonRect>
            <ButtonText>Entrar</ButtonText>
          </ButtonRect>
        </Group219>
      </Card>
    </Wrapper>
  );
}