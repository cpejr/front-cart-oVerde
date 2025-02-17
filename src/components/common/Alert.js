import { styled } from "styled-components";
import { breakpoints } from "../../styles/stylesVariables";
export const Alert = styled.p`
  color: ${(props) => props.fontColor || "#f50a0a"};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: ${(props) => props.textAlign || "left"};
  width: 43%;
  white-space: nowrap;
  font-size: 12px;
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 80%;
  }
`;
