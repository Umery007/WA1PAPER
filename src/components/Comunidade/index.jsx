import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

import {
  Container,
  Content,
  Intro,
  Eyebrow,
  Title,
  Description,
  CommunityGrid,
  CommunityLink,
  IconBox,
  CommunityName,
  CommunityDescription,
  Arrow,
} from "./styles";

const communities = [
  {
    name: "Discord",
    description: "Converse, compartilhe ideias e crie junto.",
    href: "https://discord.com/",
    Icon: FaDiscord,
    color: "#7289da",
  },
  {
    name: "Instagram",
    description: "Acompanhe novidades e inspirações da comunidade.",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
    color: "#e6683c",
  },
  {
    name: "TikTok",
    description: "Veja conteúdos rápidos e descubra novas criações.",
    href: "https://www.tiktok.com/",
    Icon: FaTiktok,
    color: "#25f4ee",
  },
  {
    name: "Twitter",
    description: "Fique por dentro das conversas e atualizações.",
    href: "https://x.com/",
    Icon: FaTwitter,
    color: "#1d9bf0",
  },
];

export default function Comunidade() {
  return (
    <Container>
      <Content>
        <Intro>
          <Eyebrow>WA1PAPER · COMUNIDADE</Eyebrow>
          <Title>Nos encontramos por aqui.</Title>
          <Description>
            Um espaço para trocar referências, compartilhar criações e ficar
            perto de quem também gosta de imaginar.
          </Description>
        </Intro>

        <CommunityGrid aria-label="Nossas redes sociais">
          {communities.map(({ name, description, href, Icon, color }) => (
            <CommunityLink
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              $accent={color}
            >
              <IconBox $accent={color}>
                <Icon aria-hidden="true" />
              </IconBox>
              <CommunityName>{name}</CommunityName>
              <CommunityDescription>{description}</CommunityDescription>
              <Arrow aria-hidden="true">↗</Arrow>
            </CommunityLink>
          ))}
        </CommunityGrid>
      </Content>
    </Container>
  );
}