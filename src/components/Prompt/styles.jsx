import styled from "styled-components";

const border = "rgba(255, 255, 255, 0.42)";

export const PromptBar = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 50px;
  padding: 5px 7px;
  box-sizing: border-box;
  border: 1px solid ${border};
  border-radius: 28px;
  background: rgba(116, 119, 131, 0.72);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

export const PromptInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 36px;
  padding: 0 8px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #f5f7ff;
  font: 14px "Roboto Slab", serif;
  text-align: center;

  &::placeholder {
    color: rgba(255, 255, 255, 0.82);
    opacity: 1;
  }
`;

export const PromptSide = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ActionButton = styled.button`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: rgba(255, 255, 255, 0.86);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.8;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
`;

export const SubmitButton = styled(ActionButton)`
  background: rgba(255, 255, 255, 0.28);
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.32);
  }
`;