import styled from "styled-components";

const line = "rgba(255, 255, 255, 0.22)";
const panel = "rgba(255, 255, 255, 0.07)";

export const Screen = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  overflow: hidden;
  background: #090a0e;
  color: #f5f7ff;
  font-family: "Roboto Slab", serif;
`;

export const Rail = styled.aside`
  display: flex;
  flex: 0 0 64px;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 18px 0;
  background: rgba(255, 255, 255, 0.16);
  border-right: 1px solid ${line};
`;

export const BrandMark = styled.div`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #f2f2f2;
  color: #25252a;
  font: 700 20px "Im FELL French Canon SC", serif;
`;

export const RailButton = styled.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  svg {
    width: 23px;
    height: 23px;
    stroke-width: 1.5;
  }

  &:hover {
    color: #fff;
    transform: translateY(-1px);
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex: 0 0 190px;
  flex-direction: column;
  gap: 10px;
  padding: 30px 18px;
  background: #17181b;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Brand = styled.div`
  margin-bottom: 22px;
  color: #fff;
  font-size: 15px;
`;

export const SidebarItem = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 5px;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  font: 12px "Roboto Slab", serif;
  text-align: left;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: #fff;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  margin: 20px;
  overflow: hidden;
  border: 1px solid ${line};
  border-radius: 24px;
  background: #171717;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 62px;
  padding: 0 24px;
`;

export const BackButton = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${line};
  border-radius: 50%;
  background: ${panel};
  color: #fff;
  cursor: pointer;

  svg {
    width: 21px;
    height: 21px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
`;

export const UserAvatar = styled.span`
  display: grid;
  place-items: center;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background: #f2f2f2;
  color: #555;

  svg {
    width: 19px;
    height: 19px;
  }
`;

export const Content = styled.section`
  width: min(690px, calc(100% - 48px));
  margin: 20px auto 0;
  overflow-y: auto;
  padding-bottom: 26px;

  .helper,
  .notice {
    margin: 16px 0 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
  }

  .notice {
    margin-top: 8px;
    text-align: center;
    color: rgba(255, 255, 255, 0.78);
  }

  @media (max-width: 520px) {
    width: calc(100% - 30px);
    margin-top: 10px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
`;

export const Description = styled.p`
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 14px;
  line-height: 1.45;
`;

export const WallpaperCard = styled.div`
  position: relative;
  aspect-ratio: 16 / 8;
  overflow: hidden;
  border-radius: 2px;
  background: #242424;
`;

export const Preview = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PreviewImage = styled.span``;

export const ActionRow = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 12px;
`;

export const SmallAction = styled.button`
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  cursor: pointer;

  svg {
    width: 17px;
    height: 17px;
    stroke-width: 1.5;
  }

  &:hover {
    color: #fff;
    transform: translateY(-1px);
  }
`;

export const Toolbar = styled.div`
  margin-top: 30px;

  form {
    min-height: 46px;
  }
`;
