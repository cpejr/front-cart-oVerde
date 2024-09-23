import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";
export const ButtonPix = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  height: 50px;
  width: 93px;
  background-color: black;
  border: solid 1px #33603f;
  border-radius: 5px;
  color: #f0f0f0;
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
