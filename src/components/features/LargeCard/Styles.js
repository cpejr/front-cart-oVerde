import styled from "styled-components";
import { Card } from "antd";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import { Button } from "antd";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 1rem;
  height: auto;
  border-radius: 24px;
  border-color: ${colors.font.primary};
  background-color: white;
  margin-bottom: 2rem;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`;

export const Image = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  cursor: pointer;
  > img {
    width: 100%;
    height: 14rem;
    border-radius: 1rem;
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 12rem;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: auto;
  font-size: 30px;
  color: ${colors.font.primary};
  margin-top: 1rem;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 5vw;
  }
`;

export const CardLine = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 20px;
  color: ${colors.font.secondary};
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 16px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivButton = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${breakpoints.miniTablet}) {
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row-reverse;
  justify-self: flex-end;
  width: 250px;
  font-size: 24px;
  border: none;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    width: 180px;
  }
  @media (max-width: ${breakpoints.med}) {
    font-size: 4vw;
    width: 100%;
  }
`;
export const CarouselStyles = styled.div`
  .carousel .slide {
    display: flex;
    justify-content: center;
  }
  .carousel.carousel-slider .control-arrow {
    background: ${colors.background.primary};
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 435px;
  object-fit: cover;
  @media (max-width: ${breakpoints.tablet}) {
    height: 250px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 120px;
  }
`;
export const StyledInput = styled.input`
  text-align: center;
  width: 250px;
  font-size: 20px;
  border-radius: 20px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    width: 180px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    margin-bottom: 10px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 4vw;
    width: 100%;
  }
`;
export const CardLineDate = styled.ul`
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding padrão */
  margin: 20px 0; /* Margem para espaçamento */
  font-family: "Roboto", sans-serif; /* Fonte moderna */
  font-size: 18px; /* Tamanho da fonte */
  color: #333333; /* Cor do texto */
`;
export const CardLineList = styled.li`
  margin-bottom: 10px; /* Espaço entre os itens */
  flex-direction: column;
  display: flex; /* Usa flexbox para alinhamento */
  &::before {
    margin-right: 10px;
    color: #4caf50;
  }
`;
export const CardLineTitle = styled.h1`
  color: ${colors.font.primary};
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 5vw;
  }
`;
export const CardLineDesc = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 20px;
  color: ${colors.font.secondary};
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 3.7vw;
  }
`;
