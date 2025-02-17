import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { breakpoints } from "../../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;
export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const DivPassword = styled.div`
  margin-top: 10px;
  position: relative;
  width: 650px;
  height: 6vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
  }
`;
export const InputPassword = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 50px 0 15px;
  border: none;
  outline: none;
  border-radius: 15px;
  font-size: 140%;

  &::placeholder {
    color: #aaa;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
`;
export const ClosedEye = styled(FaEyeSlash)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
export const OpenedEye = styled(FaEye)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
