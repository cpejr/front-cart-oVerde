import styled from "styled-components";
import { breakpoints } from "../../../../styles/stylesVariables";

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  max-width: 100%;
  height: 10rem;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const CityLogo = styled.img`
  margin-top: 0.5rem;
  align-self: flex-start;
`;

export const Info = styled.div`
  justify-content: center;
  text-align: center;
  margin-right: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
export const SocialMedias = styled.div`
  padding: 25px;
  border-left: 2px solid white;
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
  @media (max-width: ${breakpoints.biggerScreen}) {
    display: none;
  }
  @media (min-width: ${breakpoints.biggerScreen}) {
    display: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  gap: 10px;
`;
