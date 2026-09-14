import styled from "styled-components";

export const CardContainer = styled.div`
	width: 420px;
    height: 100%;
	border-radius: 18px;
	padding: 9px;
	background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
	border-radius: 18px;
	position: relative;
	border: 1px solid rgba(255,255,255,0.04);
	box-shadow: 0 8px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	overflow: visible;
`;

export const CardsWrapper = styled.div`
	width: min(1350px, 95%);
	margin: 40px auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 52px;
	justify-items: center;
`;

export const TopBar = styled.div`
	position: absolute;
	left: 12px;
	right: 12px;
	top: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 6;
`;

export const TagList = styled.div`
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
`;

export const Tag = styled.span`
	background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
	color: #e6e6e6;
	padding: 6px 10px;
	border-radius: 999px;
	font-size: 12px;
	border: 1px solid rgba(255,255,255,0.06);
	box-shadow: 0 2px 6px rgba(0,0,0,0.5);
`;

export const HeartButton = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 999px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: ${props => (props.active ? "linear-gradient(180deg,#3b0000,#4f0000)" : "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))")};
	color: ${props => (props.active ? "#ffb7b7" : "#fff")};
	border: 1px solid ${props => (props.active ? "rgba(255,77,85,0.6)" : "rgba(255,255,255,0.08)")};
	cursor: pointer;
	backdrop-filter: blur(4px);

	svg path {
		transition: fill .18s ease, stroke .18s ease;
		fill: ${props => (props.active ? "#ff4d55" : "none")};
		stroke: ${props => (props.active ? "#ff4d55" : "#fff")};
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 180px;
	border-radius: 14px;
	overflow: hidden;
	border-radius: 14px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.65);
	border: 1px solid rgba(255,255,255,0.03);
	background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
	backdrop-filter: blur(6px);
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;

export const Overlay = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 12px;
	display: flex;
	justify-content: center;
	pointer-events: none;
`;

export const DownloadButton = styled.button`
	pointer-events: auto;
	background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
	color: #fff;
	border: 1px solid rgba(255,255,255,0.09);
	padding: 10px 26px;
	border-radius: 999px;
	backdrop-filter: blur(6px);
	cursor: pointer;
	font-weight: 700;
	font-size: 14px;
	letter-spacing: 0.6px;
	transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s;

	&:hover {
		transform: translateY(-6px);
		box-shadow: 0 18px 40px rgba(0,0,0,0.6);
		background: linear-gradient(90deg, rgba(255,77,85,0.14), rgba(255,255,255,0.02));
	}
`;
