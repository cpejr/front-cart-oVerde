import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const DownloadBut = styled.div`
  justify-self: center;
  width: 180px;
  padding: 5px 0;
  font-size: 17px;
  border-color: transparent;
  border-radius: 12px;
  text-align: center;
  background-color: ${colors.accent.primary};
  margin-bottom: 5px;
  margin-left: 40px;
  margin-right: 10px;
  cursor:pointer;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.8em;
    width: 180px;
  }
  &:hover{
    color: white;
    background-color: ${colors.accent.hover};
  }
`

export const Certificated = styled.div`
    display: none;
`