import styled from "styled-components";

export const Container = styled.main`
  color: #f9fafb;
  background:
    linear-gradient(115deg, rgba(5, 7, 12, 0.9), rgba(5, 7, 12, 0.52)),
    url("../../assets/fundo/fundo.png") center / cover fixed;
`;

export const Content = styled.section`
  width: min(1080px, calc(100% - 48px));
  margin: 0 auto;
  padding: 64px 0 44px;

  @media (max-width: 600px) {
    width: min(100% - 32px, 480px);
    padding: 44px 0 32px;
  }
`;

export const Intro = styled.header`
  max-width: 680px;
  margin-bottom: 36px;
`;

export const Eyebrow = styled.p`
  margin: 0 0 14px;
  color: #a9c8bd;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 500;
  line-height: 1.08;
`;

export const Description = styled.p`
  max-width: 560px;
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  line-height: 1.65;
`;

export const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CommunityLink = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 24px;
  grid-template-rows: auto auto;
  align-items: center;
  column-gap: 16px;
  min-height: 106px;
  padding: 20px 22px;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  background: rgba(9, 13, 18, 0.58);
  backdrop-filter: blur(14px);
  transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ $accent }) => $accent};
    background: rgba(9, 13, 18, 0.8);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ $accent }) => $accent};
    outline-offset: 3px;
  }

  @media (max-width: 400px) {
    column-gap: 12px;
    padding: 18px 16px;
  }
`;

export const IconBox = styled.span`
  grid-column: 1;
  grid-row: 1 / span 2;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}1c`};
  font-size: 25px;
`;

export const CommunityName = styled.strong`
  grid-column: 2;
  align-self: end;
  font-size: 18px;
  font-weight: 600;
`;

export const CommunityDescription = styled.span`
  grid-column: 2;
  align-self: start;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 14px;
  line-height: 1.45;
`;

export const Arrow = styled.span`
  grid-column: 3;
  grid-row: 1 / span 2;
  justify-self: end;
  color: rgba(255, 255, 255, 0.72);
  font-size: 20px;
`;