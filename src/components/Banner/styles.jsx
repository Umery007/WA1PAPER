import styled from "styled-components";

export const BannerContainer = styled.section`
  width: 95%;
  max-width: 1400px;
  margin: 24px auto;
  background: #050505;
  display: grid;
  grid-template-columns: 1.1fr 220px 240px 1.4fr;
  gap: 18px;
  padding: 20px;
  border-radius: 12px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Vip = styled.div`
  width: fit-content;
  padding: 6px 16px;
  border: 2px solid #ff1e1e;
  border-radius: 50px;
  color: #ff1e1e;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.1;
`;

export const TitleRed = styled.h1`
  margin-top: 6px;
  color: #ff4747;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.1;
`;

export const Description = styled.p`
  margin-top: 18px;
  color: #cfcfcf;
  font-size: 16px;
  line-height: 1.5;

  strong {
    color: #ff4747;
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 16px 14px;
  border: 3px solid #ff1d1d;
  border-radius: 24px 0 0 24px;
  box-shadow: 0 0 16px #ff1d1d;
`;

export const Benefit = styled.div`
  color: white;
  font-size: 15px;
  line-height: 1.4;
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
  background: #ff1d1d;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: .3s;

  &:hover{
    transform: scale(1.03);
  }
`;

export const MoreButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #d91414;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: .3s;

  &:hover{
    transform: scale(1.03);
  }
`;

export const Text = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;

  span{
    color:#ff2a2a;
  }
`;

export const ImageArea = styled.div`
  overflow: hidden;
  border: 3px solid #ff1d1d;
  border-radius: 24px;
  box-shadow: 0 0 20px #ff1d1d;

  img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }
`;