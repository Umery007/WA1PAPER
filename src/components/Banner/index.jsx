import {
  BannerContainer,
  Left,
  Vip,
  Title,
  TitleRed,
  Description,
  Benefits,
  Benefit,
  Buttons,
  VipButton,
  MoreButton,
  Text,
  ImageArea,
} from "./styles";

export default function Banner() {
  return (
    <BannerContainer>
      <Left>
        <Vip>🏆 VIP</Vip>

        <Title>
          Sua criatividade
          <br />
          não tem limite.
        </Title>

        <TitleRed>
          Seus créditos
          <br />
          também não.
        </TitleRed>

        <Description>
          Gere wallpapers incríveis com <strong>créditos infinitos</strong> e baixe tudo sem preocupações.
        </Description>
      </Left>

      <Benefits>
        <Benefit>🖼️ Qualidade 4K</Benefit>
        <Benefit>⚡ Geração instantânea</Benefit>
        <Benefit>∞ Créditos infinitos</Benefit>
        <Benefit>⬇️ Downloads ilimitados</Benefit>
      </Benefits>

      <Buttons>
        <VipButton>🏆 Seja VIP</VipButton>

        <MoreButton>Saiba mais</MoreButton>

        <Text>
          Desbloqueie o poder completo da IA
        </Text>
      </Buttons>

      <ImageArea>
        <img
          src="/banner.svg"
          alt="Ilustração do banner"
        />
      </ImageArea>
    </BannerContainer>
  );
}