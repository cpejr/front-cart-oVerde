import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";
import { colors } from "../../../styles/stylesVariables";
export const ButtonPix = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  height: 50px;
  width: 93px;
  background-color: ${colors.font.secondary};
  border: solid 1px #33603f;
  border-radius: 5px;
  color: ${colors.background.primary};
  cursor: pointer;
  font-weight: bold;
  gap: 7px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 180px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
