import styled from "styled-components";

export const BannerContainer = styled.section`
  width: min(95%, 1400px);
  margin: 28px auto 0;
  padding: 28px;
  border-radius: 28px;
  background:
    radial-gradient(circle at top left, rgba(255, 78, 78, 0.18), transparent 30%),
    linear-gradient(135deg, #0c0c0c 0%, #050505 100%);
  border: 1px solid rgba(255, 77, 77, 0.2);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  display: grid;
  grid-template-columns: 1.15fr 0.9fr 0.9fr 1fr;
  gap: 20px;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Vip = styled.div`
  width: fit-content;
  padding: 7px 14px;
  border: 1px solid #ff4d4d;
  border-radius: 999px;
  color: #ff6b6b;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  color: #f8f8f8;
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 700;
  line-height: 1.08;
  margin: 0;
`;

export const TitleRed = styled.h1`
  margin: 6px 0 0;
  color: #ff5a5a;
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 700;
  line-height: 1.08;
`;

export const Description = styled.p`
  margin-top: 16px;
  color: #d6d6d6;
  font-size: 16px;
  line-height: 1.6;
  max-width: 480px;

  strong {
    color: #ff6b6b;
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 18px;
  border: 1px solid rgba(255, 77, 77, 0.28);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
`;

export const Benefit = styled.div`
  color: #f1f1f1;
  font-size: 15px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const VipButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff4d4d, #d91414);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 8px 20px rgba(217, 20, 20, 0.28);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(217, 20, 20, 0.35);
  }
`;

export const MoreButton = styled.button`
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }
`;

export const Text = styled.p`
  color: #cfcfcf;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

export const ImageArea = styled.div`
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255, 77, 77, 0.3);
  box-shadow: 0 14px 40px rgba(255, 39, 39, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;