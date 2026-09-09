import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

export const SecaoBanner = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  background-color: #000000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemBanner = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 38%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  opacity: 0.8;
  filter: brightness(0.75) contrast(1.05);
`;

export const BannerPadrao = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(14, 13, 13, 0.4), rgba(17, 16, 15, 0.4), rgba(0, 0, 0, 0.8));
  opacity: 0.8;
`;

export const BotaoVoltar = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 10;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const CartaoPerfil = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 650px;
  margin: 0 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const ContainerAvatar = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  background-color: #ffffff;
  flex-shrink: 0;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

export const ImagemAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetalhesUsuario = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CabecalhoUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const NomeUsuario = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.025em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BotaoEditar = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const BioUsuario = styled.p`
  font-size: 0.75rem;
  color: #d1d5db;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
`;

export const ContainerEstatisticas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding-top: 0.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CaixaEstatistica = styled.div``;

export const RotuloEstatistica = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
`;

export const ValorEstatistica = styled.div`
  font-size: 0.875rem;
  font-weight: 1000;
`;

export const BarraNavegacao = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  background-color: #2a2a2a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 0.5rem;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ContainerAbas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  flex-wrap: wrap;
  grid-column: 2;

  @media (max-width: 640px) {
    grid-column: 1;
  }
`;

export const BotaoAba = styled.button`
  padding: 0.375rem 1.25rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => (props.$ativo ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)')};
  background-color: ${(props) => (props.$ativo ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)')};
  color: ${(props) => (props.$ativo ? '#ffffff' : '#d1d5db')};
  font-weight: ${(props) => (props.$ativo ? '500' : 'normal')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ContainerAcoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  grid-column: 3;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    grid-column: 1;
  }
`;

export const BotaoIcone = styled.button`
  padding: 0.375rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #d1d5db;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const AreaConteudo = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3.125rem 2rem 2rem;
  box-sizing: border-box;
`;

export const CaixaVazia = styled.div`
  width: 100%;
  max-width: 56rem;
  height: 20rem;
  background-color: #141414;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const ConteudoVazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  max-width: 32rem;
  padding: 1rem;
`;

export const TextoVazio = styled.p`
  margin: 0;
  color: #f3f4f6;
  font-size: 1.305rem;
  line-height: 1.5;
  text-align: center;
`;

export const BotaoCriar = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;


