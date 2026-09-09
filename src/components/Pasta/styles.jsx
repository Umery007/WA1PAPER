import styled from 'styled-components';

/* =========================
   GRID DAS PASTAS
========================= */

export const GridPastas = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }

  @media (max-width: 700px) {
    gap: 20px;
    padding: 0 15px;
  }
`;

export const LinhaPastas = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;


/* =========================
   CARD DA PASTA
========================= */

export const CartaoPasta = styled.button`
  width: 100%;
  height: 290px;

  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;

  overflow: hidden;

  background: #000;

  border: none;
  border-radius: 18px;

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
    height: 260px;
  }
`;


/* =========================
   ÁREA DA IMAGEM
========================= */

export const VisualizacaoPasta = styled.div`
  width: 100%;
  height: 225px;

  flex: 0 0 225px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background: #242424;

  @media (max-width: 700px) {
    height: 200px;
    flex-basis: 200px;
  }

`;


/* =========================
   IMAGEM DA CAPA
========================= */

export const ImagemCapa = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;
`;


/* =========================
   INFORMAÇÕES DA PASTA
========================= */

export const InfoPasta = styled.div`
  width: 100%;
  height: 65px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 38px;

  box-sizing: border-box;

  background: #000;

  gap: 10px;

  @media (max-width: 1200px) {
    padding: 0 28px;
  }

  @media (max-width: 700px) {
    height: 60px;
    flex-basis: 60px;
    padding: 0 20px;
  }
`;


/* =========================
   TÍTULO
========================= */

export const TituloPasta = styled.span`
  min-width: 0;

  overflow: hidden;

  color: #fff;

  font-size: 24px;
  font-weight: 400;
  line-height: 1;

  white-space: nowrap;

  text-overflow: ellipsis;

  @media (max-width: 1200px) {
    font-size: 21px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;


/* =========================
   CONTADOR
========================= */

export const ContadorPasta = styled.span`
  flex-shrink: 0;

  color: #fff;

  font-size: 24px;
  font-weight: 400;
  line-height: 1;

  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 21px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;


