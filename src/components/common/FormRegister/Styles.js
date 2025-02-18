import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -5px; 
  margin-bottom: 10px; 
  text-align: left; 
  width: 100%; 
  padding-left: 10px; 
`;

export const PasswordErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px; 
  margin-bottom: 10px; 
  text-align: left; 
  width: 100%; 
  padding-left: 5px; 
`;

export const DivPassword = styled.div`
  display: flex;
  position: relative;
  width: 650px;
  margin: -5px; 
  flex-direction: column; 
  gap: 8px;

  
  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
  }
`;

export const InputPassword = styled.input`
  width: 100%;
  height: 6vh;
  padding-left: 15px;
  border-radius: 15px;
  font-size: 140%;
  border: 1px solid black;
  padding-right: 30px;
 
  

  &::-ms-reveal, 
  &::-ms-clear, 
  &::-webkit-textfield-decoration-container { 
    display: none;
  }

  &::-webkit-clear-button,
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;

export const InputRegister = styled.input`
  width: 100%;
  height: 6vh;
  padding-left: 15px;
  border-radius: 15px;
  font-size: 140%;
  border: 1px solid black;
  padding-right: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  
`;

export const GoogleButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: 1px solid black;
  font-size: 2rem;
  padding: 0.7rem 3rem 0.7rem 3rem;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 5vw;
  }
`;

export const GoogleIcon = styled(BsGoogle)`
  margin-right: 12px;
  margin-top: 1px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const ClosedEye = styled(FaEyeSlash)`
  position: absolute;
  right: 15px;
  top: 40%;
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
  top: 40%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #555;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
