import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 14, 24, 0.55);
  backdrop-filter: blur(10px);
  z-index: 9999;
`;

export const Modal = styled.div`
  position: relative;
  width: min(1100px, 90vw);
  min-height: 500px;
  padding: 55px 50px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 24px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(18px);
  box-sizing: border-box;
`;

export const Header = styled.div`
  position: absolute;
  top: -145px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 460px;
  height: 90px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 45px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 34px;
  font-weight: 500;
  color: #f5f7ff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 8px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 42px;
  font-weight: 300;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  min-height: 440px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 10px 30px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: 400;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px 16px;
`;

export const ToolButton = styled.button`
  width: 100%;
  min-height: 39px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
    transform: translateY(-2px);
  }
`;
