import { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imagemPaper from '../../assets/img-cards/paper.jpeg';

// ==========================================
// STYLED COMPONENTS
// ==========================================

export const GaleriaSalvos = styled.div`
  width: 100%;
  min-height: 520px;
  display: grid;
  /* Largura mínima das colunas ajustada para preencher a tela como no layout original */
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 10px;
  gap: 6px;
  padding: 10px;
  box-sizing: border-box;
  background: #202020;

  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`;

export const ItemSalvo = styled.div`
  min-width: 0;
  overflow: hidden;
  border-radius: 4px;
  background: #111;
`;

export const ImagemSalva = styled.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: ${(props) => props.$proporcao || 1};
  object-fit: cover;
  border-radius: 4px;
`;

// ==========================================
// DADOS DE DEMONSTRAÇÃO
// ==========================================

const imagensDemo = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  url: imagemPaper,
  alt: `Wallpaper salvo ${index + 1}`,
  proporcao: [0.72, 1.28, 1.65, 0.86, 1.45, 0.98][index % 6],
}));

// ==========================================
// COMPONENTES REACT
// ==========================================

export function GridCard({ image }) {
  const cardRef = useRef(null);
  const [spans, setSpans] = useState(10);

  const measureImage = () => {
    if (!cardRef.current) return;

    // Mede a altura real do conteúdo
    const height = cardRef.current.getBoundingClientRect().height;
    const rowHeight = 10;
    const rowGap = 6;

    // Calcula as linhas necessárias incluindo o gap
    const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
    setSpans(rowSpan);
  };

  useLayoutEffect(() => {
    measureImage();

    const observer = new ResizeObserver(measureImage);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <ItemSalvo style={{ gridRowEnd: `span ${spans}` }}>
      <div ref={cardRef}>
        <ImagemSalva
          src={image.url}
          alt={image.alt}
          $proporcao={image.proporcao}
          onLoad={measureImage}
        />
      </div>
    </ItemSalvo>
  );
}

export function ImageGrid({ images = imagensDemo }) {
  return (
    <GaleriaSalvos>
      {images.map((image) => (
        <GridCard key={image.id} image={image} />
      ))}
    </GaleriaSalvos>
  );
}

export default function Salvos({ imagens = imagensDemo }) {
  return <ImageGrid images={imagens} />;
}