import styled, { keyframes, css } from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";
import { Checkbox as AntCheckbox } from "antd";
import { Button } from "@components";
import { createGlobalStyle } from "styled-components";



export const Paragraph = styled.p`
align-items: center;
justify-content:center;
margin-left: 5%;
color:black;
`
 export const GlobalStyle = createGlobalStyle`
   height: 100%;
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

export const Picture2 = styled.img`
width: 18%;
margin-bottom: none;
right: 82.3%;
overflow-y:hidden;
position:absolute;
height:15.7rem;
`;

export const Picture3 = styled.img`
width: 18%;
margin-bottom: none;
right: 82.3%;
overflow-x:hidden;
height:15.7rem;
position:absolute;
`;

export const Final = styled.div`
height:15.7rem;
background-color:white;
`
export const Picture = styled.img`
position:absolute;
margin-top:none;
left: 82.3%;
width: 18%;
overflow-x:hidden;
`;

export const Icones = styled.div`
  display: flex;
  overflow-x:hidden;
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
`;

export const StyledCheckBox = styled(AntCheckbox)`
align-items: center;
justify-content:center;
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
  justify-content:center;
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
  height: 15.7rem;
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
 
export const Last = styled.div`
position:relative;
`;










