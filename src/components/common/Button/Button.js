import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../../styles/stylesVariables";

const Button = styled.button`
  /*Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /*Medidas*/
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.paddingTop ?? "0.7rem"};
  padding-left: ${(props) => props.paddingLeft ?? "3rem"};
  padding-right: ${(props) => props.paddingRight ?? "3rem"};
  padding-bottom: ${(props) => props.paddingBottom ?? "0.7rem"};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  /*cor e estilo do botão*/
  color: ${(props) => props.color ?? colors.font.primary};
  background-color: ${(props) =>
    props.backgroundColor ?? colors.accent.primary};
  border-width: ${(props) => props.borderWidth ?? "0.15rem"};
  border-color: ${(props) => props.bordercolor ?? "transparent"};
  border-style: solid;
  border-radius: ${(props) => props.borderRadius ?? "10px"};
  box-shadow: ${(props) => props.boxShadow ?? "none"};
  cursor: pointer;
  /*características do texto*/
  font-family: ${(props) => props.fontFamily ?? fonts.Cabin};
  font-size: ${((props) => props.fontSize, "2rem")};
  text-decoration: ${(props) => props.textDecoration ?? "none"};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 100px;
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ?? colors.accent.hover};
    border-color: ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverColor ?? "white"};
  }
`;

export default Button;
