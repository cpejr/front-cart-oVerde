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
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`;



export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
`;

export const StyledButton = styled.button`
  justify-self: center;
  width: 180px;
  padding: 5px 0;
  font-size: 17px;
  border: none;
  text-align: center;
  background-color: ${colors.accent.primary};
  margin-bottom: 10px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    width: 180px;
  }
`;

