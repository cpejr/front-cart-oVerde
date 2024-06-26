import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";

export const Container = styled.div`
  font-size: 1.2rem;
`;

export const Overlay = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
    gap: 2 rem;
  }
`;

export const Button = styled.button`
  width: 10rem;
  border-radius: 7px;
  background-color: #f19709;
  border: none;
  color: white;
  height: 2.5rem;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${colors.font.title};
  border-bottom: 2px solid ${colors.font.title};
  margin: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 80%;
    padding-bottom: 1 rem;
  }
`;

export const StyledSponsors = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
    justify-content: space-evenly;
  }
  @media (min-width: ${breakpoints.biggerScreen}) {
    max-width: 100%;
  }
`;

export const VideoDiv = styled.div`
  display: flex;
  width: 40rem;
  height: 22.5rem;
  border-radius: 6px;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 30rem;
    height: 16.875rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 22rem;
    height: 14.0625rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 18rem;
    height: 11.25rem;
  }
`;

export const Image = styled.div`
  display: flex;
  > img {
    width: 18rem;
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }
`;
