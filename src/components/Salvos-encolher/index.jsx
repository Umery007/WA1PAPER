import { useState } from 'react';
import { Heart } from 'lucide-react';
import * as S from './styles';

const imagensDemo = Array.from({ length: 36 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/300/450?random=${index + 1}`,
  alt: `Card ${index + 1}`,
  isLiked: [0, 4, 7, 11, 15].includes(index),
}));

export function GridCard({ image, onToggleLike, index }) {
  return (
    <S.ItemSalvo style={{ '--card-index': index }}>
      <S.ImagemSalva src={image.url} alt={image.alt} />
      <S.BotaoCurtir
        type="button"
        aria-label={image.isLiked ? 'Descurtir wallpaper' : 'Curtir wallpaper'}
        aria-pressed={image.isLiked}
        $curtido={image.isLiked}
        onClick={() => onToggleLike(image.id)}
      >
        <Heart size={16} strokeWidth={2.5} />
      </S.BotaoCurtir>
    </S.ItemSalvo>
  );
}

export function ImageGrid({ images = imagensDemo }) {
  const [cards, setCards] = useState(images);

  const toggleLike = (id) => {
    setCards((currentCards) => currentCards.map((card) => (
      card.id === id ? { ...card, isLiked: !card.isLiked } : card
    )));
  };

  return (
    <S.GaleriaSalvos>
      {cards.map((image, index) => (
        <GridCard
          key={image.id}
          image={image}
          index={index}
          onToggleLike={toggleLike}
        />
      ))}
    </S.GaleriaSalvos>
  );
}

export default function SalvosEncolher({ imagens = imagensDemo }) {
  return <ImageGrid images={imagens} />;
}
