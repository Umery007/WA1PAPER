import { ArrowLeft, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import wallpaper from "../../assets/img-cards/paper.jpeg";
import {
	BackButton,
	FavoritedPage,
	FavoritedPanel,
	Header,
	HeaderTitle,
	CountLabel,
	PageIndicator,
	WallpaperGrid,
	WallpaperCard,
	WallpaperImage,
	FavoriteIcon,
	GalleryButton,
} from "./styles";

const wallpapers = Array.from({ length: 120 }, (_, index) => ({
	id: index + 1,
	position: `${(index * 17) % 100}% ${(index * 29) % 100}%`,
}));

export default function Favoritados() {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);
	const pageSize = 25;

	useEffect(() => {
		setPage(0);
	}, []);

	const pages = Array.from({ length: Math.ceil(wallpapers.length / pageSize) }, (_, index) =>
		wallpapers.slice(index * pageSize, (index + 1) * pageSize),
	);
	const hasMultiplePages = pages.length > 1;

	function showPreviousPage() {
		setPage((currentPage) => Math.max(currentPage - 1, 0));
	}

	function showNextPage() {
		setPage((currentPage) => Math.min(currentPage + 1, pages.length - 1));
	}

	return (
		<FavoritedPage>
			<BackButton type="button" aria-label="Voltar" onClick={() => navigate(-1)}>
				<ArrowLeft size={20} strokeWidth={1.6} />
			</BackButton>
			<Header>
				<HeaderTitle>Wallpapers Favoritados por você</HeaderTitle>
			</Header>

			<FavoritedPanel>
				<CountLabel>365 Pins Favoritados</CountLabel>
				<PageIndicator>
					Página {page + 1} de {pages.length}
				</PageIndicator>

				{hasMultiplePages && (
					<GalleryButton type="button" aria-label="Página anterior" $side="left" onClick={showPreviousPage} disabled={page === 0}>
						<ChevronLeft size={24} />
					</GalleryButton>
				)}

				<WallpaperGrid key={page}>
					{pages[page].map(({ id, position }) => (
						<WallpaperCard key={id}>
							<WallpaperImage src={wallpaper} alt={`Wallpaper favoritado ${id}`} style={{ objectPosition: position }} />
							<FavoriteIcon aria-label="Wallpaper favoritado">
								<Heart size={18} strokeWidth={2} fill="currentColor" />
							</FavoriteIcon>
						</WallpaperCard>
					))}
				</WallpaperGrid>

				{hasMultiplePages && (
					<GalleryButton type="button" aria-label="Próxima página" $side="right" onClick={showNextPage} disabled={page === pages.length - 1}>
						<ChevronRight size={24} />
					</GalleryButton>
				)}
			</FavoritedPanel>
		</FavoritedPage>
	);
}
