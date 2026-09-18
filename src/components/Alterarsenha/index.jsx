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
          <TopTitle>Alteração de senha</TopTitle>

          <CloseButton type="button" aria-label="Voltar" onClick={() => navigate(-1)}>
            <ArrowLeft size={22} strokeWidth={1.8} />
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