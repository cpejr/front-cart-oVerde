import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const Title = styled.h1`
  text-align: left;
  font-size: 2.5em;
  color: #2e7d32;
  margin-bottom: 0.5em;
  font-family: 'Georgia', serif;
`;

export const Name = styled.h2`
  text-align: left;
  font-size: 2em;
  color: #1b5e20;
  margin: 0;
  padding: 0 1em;
  font-family: 'Times New Roman', Times, serif;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 1.2em;
  color: #555555;
  margin: 0;
  line-height: 1.5;
  padding: 0 2em;
  font-family: 'Arial', sans-serif;
`;

export const Certificated = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  border: 8px solid #4caf50;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakpoints.tablet} {
    padding: 3em;
  }

  @media ${breakpoints.desktop} {
    padding: 4em;
  }
`;

