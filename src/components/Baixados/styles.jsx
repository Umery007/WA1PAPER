import styled from "styled-components";

export const DownloadedPage = styled.main`
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	padding: 0 clamp(14px, 4vw, 32px) 32px;
	background: #080808;
	color: #f5f5f5;
	font-family: Arial, sans-serif;
`;

export const Header = styled.header`
	position: relative;
	width: min(700px, calc(100% - 64px));
	max-width: 100%;
	box-sizing: border-box;
	height: 54px;
	margin: 0 auto 30px;
	border: 1px solid #a9a9a9;
	border-top: 0;
	border-radius: 0 0 10px 10px;
	background: rgba(48, 48, 48, 0.62);
	backdrop-filter: blur(14px) saturate(125%);
	-webkit-backdrop-filter: blur(14px) saturate(125%);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24), inset 0 1px rgba(255, 255, 255, 0.16);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeaderTitle = styled.h1`
	max-width: 100%;
	margin: 0;
	padding: 0 16px;
	text-align: center;
	font-size: clamp(20px, 2.6vw, 28px);
	font-weight: 400;
	line-height: 1;
`;

export const BackButton = styled.button`
	position: absolute;
	top: 14px;
	left: clamp(14px, 2vw, 28px);
	z-index: 2;
	width: 42px;
	height: 42px;
	padding: 0;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 50%;
	color: #f8f8f8;
	background: rgba(20, 20, 20, 0.72);
	cursor: pointer;
	display: grid;
	place-items: center;

	&:hover {
		background: rgba(45, 45, 45, 0.9);
	}
`;

export const DownloadedPanel = styled.section`
	position: relative;
	width: min(1000px, 100%);
	max-width: 100%;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 24px 30px 22px;
	height: 740px;
	border: 1px solid rgba(255, 255, 255, 0.55);
	border-radius: 9px;
	background: rgba(255, 255, 255, 0.11);
	backdrop-filter: blur(18px) saturate(135%);
	-webkit-backdrop-filter: blur(18px) saturate(135%);
	box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3), inset 0 1px rgba(255, 255, 255, 0.22), inset 0 -1px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;

	@media (max-width: 560px) {
		padding: 14px 12px 12px;
		height: min(680px, calc(100vh - 110px));
	}
`;

export const CountLabel = styled.p`
	width: min(280px, 72%);
	height: 36px;
	box-sizing: border-box;
	margin: 0 auto 20px;
	border: 1px solid rgba(255, 255, 255, 0.52);
	border-radius: 9px;
	background: rgba(255, 255, 255, 0.13);
	backdrop-filter: blur(12px) saturate(125%);
	-webkit-backdrop-filter: blur(12px) saturate(125%);
	box-shadow: inset 0 1px rgba(255, 255, 255, 0.16);
	display: grid;
	place-items: center;
	color: #f2f2f2;
	font-size: 20px;
	line-height: 1;
`;

export const PageIndicator = styled.p`
	margin: -10px auto 16px;
	color: rgba(255, 255, 255, 0.78);
	font-size: 16px;
	line-height: 1;
`;

export const WallpaperGrid = styled.div`
	flex: 1;
	min-height: 0;
	width: 100%;
	height: auto;
	overflow: visible;
	transform: none;
	transition: none;
	animation: none;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-template-rows: repeat(5, minmax(0, 1fr));
	gap: 10px;

	@media (max-width: 560px) {
		gap: 6px;
	}
`;

export const GalleryButton = styled.button`
	position: absolute;
	top: 50%;
	${({ $side }) => $side}: clamp(-48px, -4vw, -18px);
	width: 44px;
	height: 60px;
	transform: translateY(-50%);
	border: 1px solid #d8d8d8;
	border-radius: 6px;
	color: #f5f5f5;
	background: #303030;
	display: grid;
	place-items: center;
	cursor: pointer;
	z-index: 1;

	&:disabled {
		opacity: 0.35;
		cursor: default;
	}

	@media (max-width: 560px) {
		${({ $side }) => $side}: 2px;
		width: 34px;
		height: 50px;
	}
`;

export const WallpaperCard = styled.article`
	box-sizing: border-box;
	min-width: 0;
	min-height: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border: 1px solid #f0f0f0;
	border-radius: 5px;
	background: #242424;
	transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

	&:hover {
		position: relative;
		z-index: 1;
		border-color: #ffffff;
		transform: translateY(-4px) scale(1.03);
		box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;

		&:hover {
			transform: none;
		}
	}
`;

export const WallpaperImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: saturate(0.86) contrast(1.08);
`;
