
import { useState } from "react";

import {
  CardContainer,
  TopBar,
  TagList,
  Tag,
  HeartButton,
  ImageWrapper,
  Image,
  Overlay,
  DownloadButton,
  CardsWrapper,
} from "./styles";

import sample from "../../assets/img-cards/paper.jpeg";

export function Card({ image, tags = [], liked = false, onDownload }) {
  const [isLiked, setIsLiked] = useState(!!liked);

  function toggleLike(e) {
    e.stopPropagation();
    setIsLiked(v => !v);
  }

  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={image} alt="card" />

        <TopBar>
          <TagList>
            {tags.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </TagList>

          <HeartButton
            aria-pressed={isLiked}
            title={isLiked ? "Favorito" : "Curtir"}
            active={isLiked}
            onClick={toggleLike}
          >
            {isLiked ? (
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21s-7-4.35-9-7.09C0.84 10.86 3 6 7.5 6 9.24 6 11 7 12 8c1-1 2.76-2 4.5-2C21 6 23.16 10.86 21 13.91 19 16.65 12 21 12 21z" fill="#ff4d55" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            )}
          </HeartButton>
        </TopBar>

        <Overlay>
          <DownloadButton onClick={onDownload}>Download</DownloadButton>
        </Overlay>
      </ImageWrapper>
    </CardContainer>
  );
}

export default function Cards() {
  const cards = [
    { id: 1, tags: ["Desktop", "4K"], liked: false, image: sample },
    { id: 2, tags: ["Mobile", "Anime"], liked: true, image: sample },
    { id: 3, tags: ["Pixel Art"], liked: false, image: sample },
    { id: 4, tags: ["Nature"], liked: false, image: sample },
    { id: 5, tags: ["Minimal", "Dark"], liked: false, image: sample },
    { id: 6, tags: ["Travel", "Aesthetic"], liked: true, image: sample },
    { id: 7, tags: ["Abstract", "3D"], liked: false, image: sample },
    { id: 8, tags: ["Studio", "UI"], liked: false, image: sample },
    { id: 8, tags: ["Studio", "UI"], liked: false, image: sample },
  ];

  return (
    <CardsWrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          tags={card.tags}
          liked={card.liked}
          onDownload={() => {}}
        />
      ))}
    </CardsWrapper>
  );
}
