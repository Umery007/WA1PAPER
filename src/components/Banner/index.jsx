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
          Crie quantos wallpapers quiser com <strong>créditos infinitos</strong> todos os dias.
        </Description>
      </Left>

      <Benefits>
        <Benefit>🖼️ 4K Qualidade Máxima</Benefit>
        <Benefit>⚡ Geração Rápida</Benefit>
        <Benefit>∞ Créditos Infinitos</Benefit>
        <Benefit>⬇️ Downloads Ilimitados</Benefit>
      </Benefits>

      <Buttons>
        <VipButton>🏆 Seja VIP</VipButton>

        <MoreButton>Saiba Mais</MoreButton>

        <Text>
          Desbloqueie o poder completo da IA
        </Text>
      </Buttons>

      <ImageArea>
        <img
          src="/banner.jpg"
          alt="Wallpaper"
        />
      </ImageArea>
    </BannerContainer>
  );
}