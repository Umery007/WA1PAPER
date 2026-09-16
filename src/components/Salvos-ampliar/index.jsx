import imagemPaper from '../../assets/img-cards/paper.jpeg';
import * as S from './styles';

const imagensDemo = Array.from({ length: 60 }, (_, index) => ({
	id: index + 1,
	url: imagemPaper,
	alt: `Wallpaper salvo ${index + 1}`,
	proporcao: [0.72, 1.28, 1.65, 0.86, 1.45, 0.98][index % 6],
	invertida: index % 2 === 0,
}));

export function GridCard({ image, index }) {
	return (
		<S.ItemSalvo style={{ '--card-index': index }}>
			<S.ImagemSalva
				src={image.url}
				alt={image.alt}
				$proporcao={image.proporcao}
				$invertida={image.invertida}
			/>
		</S.ItemSalvo>
	);
}

export function ImageGrid({ images = imagensDemo }) {
	return (
		<S.GaleriaSalvos>
			{images.map((image, index) => (
				<GridCard key={image.id} image={image} index={index} />
			))}
		</S.GaleriaSalvos>
	);
}

export default function Salvos({ imagens = imagensDemo }) {
	return <ImageGrid images={imagens} />;
}
