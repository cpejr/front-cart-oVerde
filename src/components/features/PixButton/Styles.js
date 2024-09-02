import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";
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

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0.7em;
    width: 120px;
    font-size: 0.8em;
  }
  &:hover {
    background-color: rgba(51, 96, 63, 0.8);
  }
`;
