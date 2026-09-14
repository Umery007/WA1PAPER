import styled from 'styled-components';

/* =========================
   GRID DAS PASTAS
========================= */

export const GridPastas = styled.div`
  width: 100%;
  max-width: 1755px;

  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 0 auto;
  padding: 0 27px;

  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;


/* =========================
   LINHA DAS PASTAS
========================= */

export const LinhaPastas = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.$invertida
    ? 'minmax(0, 475fr) minmax(0, 624fr) minmax(0, 624fr)'
    : 'minmax(0, 624fr) minmax(0, 624fr) minmax(0, 475fr)'};
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


/* =========================
   CARD
========================= */

export const CartaoPasta = styled.button`
  width: 100%;
  height: 280px;
  min-width: 0;

  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: #000;

  border: none;
  border-radius: 15px;

  color: #fff;

  text-align: left;

  cursor: pointer;

  box-sizing: border-box;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }

  @media (max-width: 700px) {
    width: 100%;
    min-width: 0;
    height: auto;
    aspect-ratio: 274 / 133;
  }
`;


/* =========================
   IMAGEM
========================= */

export const VisualizacaoPasta = styled.div`
  width: 100%;
  height: 76%;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: #242424;
`;


/* =========================
   CAPA
========================= */

export const ImagemCapa = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;
`;


/* =========================
   INFORMAÇÕES
========================= */

export const InfoPasta = styled.div`
  width: 100%;
  height: 24%;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 36px;

  box-sizing: border-box;

  background: #000;

  gap: 14px;
`;


/* =========================
   TÍTULO
========================= */

export const TituloPasta = styled.span`
  min-width: 0;

  overflow: hidden;

  color: #fff;

  font-size: 18px;
  font-weight: 600;

  line-height: 1;

  white-space: nowrap;

  text-overflow: ellipsis;
`;


/* =========================
   CONTADOR
========================= */

export const ContadorPasta = styled.span`
  flex-shrink: 0;

  color: #e4e4e4;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;

  white-space: nowrap;
`;
