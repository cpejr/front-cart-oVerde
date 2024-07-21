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

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 460px;
  margin-top: 1rem;
  height: auto;
  border-radius: 15px;
  border: 1px solid ${colors.font.primary};
  background-color: white;
  margin-bottom: 2rem;
  align-self: center;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`;



export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
`;

export const PriceLabel = styled.h1`
  margin-left: 10px;
  font-size: 1.4em;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
  }
`

export const StyledButton = styled.button`
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
`;

