import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";


export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-top: 1rem;
  height: auto;
  border-radius: 24px;
  border: 1px solid ${colors.font.primary};
  background-color: white;
  margin-bottom: 1em;
  align-self: center;
  position: relative;
  @media (max-width: ${breakpoints.mobile}) {
    width: 98%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 85%;
  }
`;

export const DeleteIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 8%;
  margin: 8px;
  transition: filter 0.3s;
  cursor: pointer;
  @keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }
  &:hover{
    animation: shake 0.5s ease-in-out infinite;
  }
`

export const Name = styled.h3`
    align-self: left;
    margin: 5px;
`

export const Description = styled.p`
    margin: 5px;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 0.9em;
    }
`

export const Price = styled.div`
  justify-self: center;
  width: 180px;
  padding: 5px 0;
  font-size: 17px;
  border-radius: 12px;
  text-align: center;
  background-color: ${colors.accent.primary};
  margin-bottom: 10px;
  margin-left: 5px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1em;
    width: 180px;
  }
`;

export const Image = styled.img`
  display: flex;
  height: auto;
  width: 90%;
  margin: 10px;
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
