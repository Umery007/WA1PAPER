import { useLayoutEffect, useRef, useState } from 'react';
import imagemPaper from '../../assets/img-cards/paper.jpeg';
import * as S from './styles';

const imagensDemo = Array.from({ length: 30 }, (_, index) => ({
	id: index + 1,
	url: imagemPaper,
	alt: `Wallpaper salvo ${index + 1}`,
	proporcao: [0.72, 1.28, 1.65, 0.86, 1.45, 0.98][index % 6],
}));

export function GridCard({ image }) {
	const imageRef = useRef(null);
	const [spans, setSpans] = useState(1);

	const measureImage = () => {
		if (!imageRef.current) return;

		const height = imageRef.current.getBoundingClientRect().height;
		setSpans(Math.max(1, Math.ceil(height / 10)));
	};

	useLayoutEffect(() => {
		measureImage();

		const observer = new ResizeObserver(measureImage);
		if (imageRef.current) observer.observe(imageRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<S.ItemSalvo style={{ gridRowEnd: `span ${spans}` }}>
			<S.ImagemSalva
				ref={imageRef}
				src={image.url}
				alt={image.alt}
				$proporcao={image.proporcao}
				onLoad={measureImage}
			/>
		</S.ItemSalvo>
	);
}

export function ImageGrid({ images = imagensDemo }) {
	return (
		<S.GaleriaSalvos>
			{images.map((image) => (
				<GridCard key={image.id} image={image} />
			))}
		</S.GaleriaSalvos>
	);
}

export default function Salvos({ imagens = imagensDemo }) {
	return <ImageGrid images={imagens} />;
}
