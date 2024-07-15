import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import { Button } from "antd";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-top: 1rem;
  height: auto;
  border-radius: 24px;
  border: 1px solid ${colors.font.primary};
  background-color: white;
  margin-bottom: 2rem;
  align-self: center;
  position: relative;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
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
`

export const Price = styled.div`
  justify-self: center;
  width: 180px;
  padding: 5px 0;
  font-size: 17px;
  border-radius: 24px;
  text-align: center;
  background-color: ${colors.accent.primary};
  margin-bottom: 10px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
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
