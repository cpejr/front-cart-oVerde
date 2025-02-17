import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";
import { Modal } from "antd";

import { breakpoints, colors } from "../../styles/stylesVariables";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
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
export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const InputDefault = styled.input`
  width: 650px;
  height: 6vh;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 15px;
  border-radius: 15px;
  font-size: 140%;
  border: 1px solid black;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
  }
  &&:focus {
    border: 1px solid black;
    outline: none;
  }
`;
export const GoogleButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: 1px solid black;
  font-size: 2rem;
  padding: 0.7rem 3rem 0.7rem 3rem;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 5vw;
  }
`;
export const GoogleIcon = styled(BsGoogle)`
  margin-right: 12px;
  margin-top: 1px;
`;
export const DivRegister = styled.div`
  display: flex;

  justify-content: center;
`;
export const Register = styled.div`
  font-size: 20px;
  color: black;
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 5vw;
  }
`;
export const RegisterLink = styled.a`
  font-size: 20px;
  color: #33603f;
  margin-left: 5px;
  font-style: bold;
  @media (max-width: ${breakpoints.mediumMobile}) {
    font-size: 5vw;
  }
`;
export const DivPassword = styled.div`
  margin-top: 20px;
  position: relative;
  width: 650px;
  height: 6vh;
  margin: 20px 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
  }
`;
export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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
export const DivEmail = styled.div``;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.background.primary};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
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
