import styled from "styled-components";
import { colors } from "../../../styles/stylesVariables";

export const ButtonPix = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 240px;
  background-color: #33603f;
  border: solid 1px #33603f;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  gap: 7px;
  &:hover {
    background-color: rgba(51, 96, 63, 0.8);
  }
`;
