import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #2e7d32;
  margin-bottom: 0.5em;
  font-family: "Georgia", serif;
`;

export const Name = styled.h2`
  text-align: center;
  font-size: 2em;
  color: #1b5e20;
  margin: 0.5em 0;
  font-family: "Times New Roman", Times, serif;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #555555;
  margin: 0.5em 0;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
`;

export const Heading = styled.p`
  font-size: 1.1em;
  color: #333333;
  margin: 1em 0;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
  padding: 0 2em;
  border-top: 1px solid #4caf50;
  border-bottom: 1px solid #4caf50;
`;

export const Text = styled.p`
  font-size: 1em;
  color: #333333;
  margin: 1em 0;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
  padding: 0 2em;
`;

export const Footer = styled.div`
  font-size: 1em;
  color: #333333;
  margin: 1em 0;
  font-family: "Arial", sans-serif;
  padding: 0 2em;
  border-top: 1px solid #4caf50;
  text-align: left;
`;

export const Certificated = styled.div`
  position: absolute;
  visibility: hidden;
  width: 100%;
  max-width: 21cm; /* Largura A4 */
  height: 297mm; /* Altura A4 */
  box-sizing: border-box;
  border: 8px solid #4caf50;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: -1000vh;

  @media ${breakpoints.tablet} {
    padding: 2.5em;
    margin-top: -500px;
  }

  @media ${breakpoints.desktop} {
    padding: 3em;
  }
`;
