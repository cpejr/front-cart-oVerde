import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";

export const GooglePayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1vh;
  background-color: #f0f0f0;
  max-width: 1vh;
  @media (max-width: ${breakpoints.mobile}) {
    width: 180px;
  }
`;
