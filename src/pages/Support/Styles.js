import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.background.primary};

  @media (max-width: ${breakpoints.biggerScreen}) {
    overflow-x: hidden;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: ${breakpoints.tablet}) {
    height: 33rem;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.Cabin};
  color: ${colors.font.title};
  width: 100%;
  text-align: center;
  font-size: 50px;
  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 1.3rem;
  text-decoration-thickness: 3px;

  @media (max-width: ${breakpoints.mediumTablet}) {
    font-size: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
    text-underline-offset: 0.5rem;
    line-height: 55px;
  }

  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 27px;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${fonts.Cabin};
  font-size: 35px;
  color: ${colors.font.title};
  text-align: center;
  line-height: 100px;
  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 1.3rem;
  text-decoration-thickness: 3px;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
    text-underline-offset: 0.7rem;
    line-height: 55px;
  }
`;

export const TextArea = styled.div`
  padding: 80px 100px;

  @media (max-width: ${breakpoints.mediumMobile}) {
    padding: 50px 70px;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    padding: 30px;
  }

  @media (max-width: ${breakpoints.newsletter}) {
    padding: 40px;
  }
`;

export const Text1 = styled.div`
  text-align: justify;
  font-family: ${fonts.Cabin};
  font-size: 30px;
  color: ${colors.font.primary};
  padding-bottom: 25px;

  @media (max-width: ${breakpoints.mediumTablet}) {
    font-size: 25px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 23px;
  }
`;

export const Text2 = styled.div`
  text-align: justify;
  font-family: ${fonts.Cabin};
  font-size: 30px;
  color: ${colors.font.primary};

  @media (max-width: ${breakpoints.mediumTablet}) {
    font-size: 25px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 23px;
  }
`;

export const DonationArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0% 10%;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 40px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    flex-direction: column;
  }
`;

export const QRCodeArea = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const QRCodeAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    flex-direction: row;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.mediumMobile}) {
    flex-direction: column;
    padding-right: 5%;
  }
`;

export const QRCode = styled.img`
  width: 100%;
  padding: 0% 10% 10% 0%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 200%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0% 5% 5% 0%;
    width: 70%;
    height: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0% 0% 5% 0%;
    width: 70%;
    height: 70%;
  }

  @media (max-width: ${breakpoints.mediumMobile}) {
    padding: 0% 0% 5% 0%;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    width: 50%;
    height: 50%;
  }
`;

export const QRCodeText = styled.div`
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    width: 100%;
    padding-left: 10%;
    text-align: start;
  }

  @media (max-width: ${breakpoints.mediumMobile}) {
    text-align: center;
    padding: 5% 0%;
  }
`;

export const WhatsAppImage = styled.img`
  width: 30%;
  height: 15%;
`;

export const ButtonText = styled.div`
  font-size: 25px;
  font-family: ${fonts.Cabin};
  color: ${colors.font.primary};
  padding-left: 5px;
  width: 300px;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.miniDevice}) {
    font-size: 18px;
  }
`;

export const WhatsAppButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.mediumTablet}) {
    padding-left: 55px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0% 0% 23% 0%;
  }
`;

export const Redirecionar = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
