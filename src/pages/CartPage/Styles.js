import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Title = styled.div`
  color: ${colors.font.primary};
  font-size: 30px;
  margin-left: 5%;
  width: fit-content;
  border-bottom: 2px solid ${colors.font.primary};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-height: 320px;
  height:auto;
  border-radius: 12px; 
  overflow-y: auto;  
  border: 1px solid black;  
  width: 84vw;
  align-self: center;
`;



