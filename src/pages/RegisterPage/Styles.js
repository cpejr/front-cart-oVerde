import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.font.primary};
  font-size: 50px;
  margin-top: 80px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 7vw;
  }
`;

export const DivLogin = styled.div`
  display: flex;
  position: relative;
  top: -10px; 
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  font-size: 20px;
  color: black;
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 5vw;
  }
`;

export const LoginLink = styled.a`
  font-size: 20px;
  color: #33603f;
  margin-left: 5px;
  font-style: bold;
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 5vw;
  }
`;

