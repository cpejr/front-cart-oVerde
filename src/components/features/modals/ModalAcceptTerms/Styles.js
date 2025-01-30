import styled, { keyframes, css } from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";
import { Checkbox as AntCheckbox } from "antd";
import { Button } from "@components";
import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
  .ant-modal {
    border-radius: 0 !important;
    margin-top:none;
    padding:none;
  }

  .ant-modal-content {
    border-radius: 0 !important;
    margin-top: 0 !important;
    padding: 0 !important;
  }
`;

export const negrito =styled.p`
font-weight:bold;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  p {
    font-size: 1.5rem;
    width: 75%;
    margin-bottom: 0;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`

export const Icones = styled.div`
  display: flex;
  margin-right:0;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  border: 5px solid black;
  letter-spacing: 5px;
  word-spacing: 25px;
  text-align: left;
  justify-content:flex-start;
  padding: 5px;
  margin-bottom:0px;
  color: black;  
  margin-top: 3%;
  margin-left: 10%;
  margin-right:10%;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;

  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 5rem;
  width: 10%;
  margin-left:5%;
  margin-bottom: 0;
  border:none;
  > img {
    width: 25rem;
    @media (max-width: ${breakpoints.mobile}) {
      width: 10rem;
    }
  }
`;

export const Estilo = styled.div`
position: absolute;
left: 73.4%;
`;
export const StyledCheckBox = styled(AntCheckbox)`
  &.custom-checkbox {
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${colors.background.secondary};
      border-color: ${colors.font.secondary};
    }
  }
`;


const slideAnimation = keyframes`
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 17px;
  color: ${(props) => (props.alert ? "red" : colors.font.primary)};
  ${(props) =>
    props.alert &&
    css`
      animation: ${slideAnimation} 0.5s forwards;
    `}
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    font-weight: bold;
    gap: 5px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  gap: 25px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const ModalButton = styled(Button)`
  @media (max-width: ${breakpoints.tablet}) {
    width: 150px;
    height: 50px;
    font-size: 1.5rem;
    padding: 10px;
    gap: 15px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 30px;
    font-size: 0.8rem;
    padding: 10px;
    gap: 5px;
  }
`;

export const ConteinerPixForms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-align: justify;
  width: 100%;
  border: solid 1px #33603f;
  border-radius: 10px;
  padding: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 5px;
  }
`;

export const FormsText = styled.h1`
  text-decoration: underline;
  text-align: center;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%; 
  height: 10rem; 
  background:rgb(64, 68, 64); 
  clip-path: polygon(0 4%, 100% 0%, 100% 100%);
`;

export const Triangulo = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 68%;
  width: 32%; 
  height: 10rem; 
  background:rgb(43, 231, 6); 
  clip-path: polygon(0 0, 100% 50%, 100% 100%);
`;









