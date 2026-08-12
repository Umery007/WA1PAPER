import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: clamp(20px, 4vw, 48px) clamp(12px, 2vw, 24px) 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 35%),
    linear-gradient(180deg, #050507 0%, #0d0d12 100%);
`;

export const Card = styled.div`
  position: relative;
  width: min(90vw, 1100px);
  background: rgba(255, 255, 255, 0.09);
  border: clamp(2px, 0.3vw, 4px) solid #ffffff;
  border-radius: 29px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const TopBar = styled.div`
  position: relative;
  width: 100%;
  height: clamp(72px, 10vw, 118px);
  background: #ffffff;
  border-radius: 29px 29px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopTitle = styled.h1`
  margin: 0;
  font-family: "Inria Serif", serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(2.3rem, 4.5vw, 6rem);
  line-height: 1;
  color: #000000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: clamp(16px, 2vw, 36px);
  transform: translateY(-50%);
  width: clamp(30px, 3vw, 40px);
  height: clamp(30px, 3vw, 40px);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
`;

export const CloseIcon = styled.span`
  position: relative;
  width: clamp(30px, 3vw, 40px);
  height: clamp(30px, 3vw, 40px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: clamp(4px, 0.7vw, 6.56px);
    height: clamp(26px, 4vw, 49.3px);
    background: #ffffff;
    border-radius: 12px;
    left: 50%;
    top: 50%;
    transform-origin: center;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(40deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-40deg);
  }
`;

export const Group219 = styled.div`
  width: min(85%, 987px);
  margin: clamp(28px, 5vw, 60px) auto 0;
  padding-bottom: clamp(28px, 5vw, 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Group218 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const baseLabel = `
  display: block;
  font-family: 'Inria Serif', serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 4rem);
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 14px;
`;

export const LabelNome = styled.span`
  ${baseLabel}
  width: 100%;
`;

export const NomeInput = styled.input`
  width: 100%;
  height: clamp(62px, 8vw, 112px);
  box-sizing: border-box;
  background: rgba(255, 248, 248, 0.2);
  border: 3px solid #ffffff;
  border-radius: 21px;
  padding: 16px 20px;
  color: #ffffff;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  font-size: clamp(1.4rem, 2.5vw, 3rem);
  line-height: 1.2;
  outline: none;
  backdrop-filter: blur(16px);
  margin-bottom: clamp(18px, 3vw, 40px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Inria Serif', serif;
    font-weight: 700;
    font-size: clamp(1.4rem, 2.5vw, 3rem);
    line-height: 1.2;
  }
`;

export const LabelEmail = styled.span`
  ${baseLabel}
  width: 100%;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: clamp(62px, 8vw, 112px);
  box-sizing: border-box;
  background: rgba(255, 248, 248, 0.2);
  border: 3px solid #ffffff;
  border-radius: 21px;
  padding: 16px 20px;
  color: #ffffff;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  font-size: clamp(1.4rem, 2.5vw, 3rem);
  line-height: 1.2;
  outline: none;
  backdrop-filter: blur(16px);
  margin-bottom: clamp(18px, 3vw, 40px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Inria Serif', serif;
    font-weight: 700;
    font-size: clamp(1.4rem, 2.5vw, 3rem);
    line-height: 1.2;
  }
`;

export const LabelSenha = styled.span`
  ${baseLabel}
  width: 100%;
`;

export const SenhaInput = styled.input`
  width: 100%;
  height: clamp(62px, 8vw, 112px);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid #ffffff;
  border-radius: 21px;
  padding: 16px 20px;
  color: #ffffff;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  font-size: clamp(1.4rem, 2.5vw, 3rem);
  line-height: 1.2;
  outline: none;
  backdrop-filter: blur(16px);
  margin-bottom: clamp(18px, 3vw, 40px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Inria Serif', serif;
    font-weight: 700;
    font-size: clamp(1.4rem, 2.5vw, 3rem);
    line-height: 1.2;
  }
`;

export const ButtonRect = styled.div`
  width: min(52%, 481px);
  min-height: clamp(66px, 8vw, 102px);
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.span`
  font-family: 'Inria Serif', serif;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(1.8rem, 3vw, 4rem);
  line-height: 1;
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
