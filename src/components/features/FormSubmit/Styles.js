import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { colors, breakpoints } from "../../../styles/stylesVariables";

export const Form = styled.form`
  margin: 30px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem !important;
  height: 100%;
  box-shadow: none;
  z-index: 0;
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const Select = styled(MultiSelect)`
  font-size: 1.3rem;
  width: 70%;
  background-color: inherit;
  color: ${(props) => props?.selectColor};
  border-radius: 4px;
  height: 6.5vh;
  text-align: left;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props?.selectColor} solid`};

  .p-multiselect-label {
    width: 215px;
    overflow-x: hidden;
  }

  .p-placeholder {
    color: ${(props) => props?.selectColor};
  }
  &:hover {
    border-color: ${colors.accent.primary};
  }

  /* Estilizando o checkbox */
  .p-checkbox .p-checkbox-box {
    border-color: ${(props) => props?.selectColor} !important;
  }
  .p-checkbox-input {
    display: none;
  }

  .p-checkbox-box {
    background-color: green;
  }
`;

export const StyledNumber = styled(InputNumber)`
  width: 70%;
  height: 6.5vh;

  .p-inputnumber-input {
    border-color: ${colors.font.primary};
    font-size: 1.3rem;
    background-color: inherit;
    padding: 0.8rem 1.6rem;
    text-align: left;
    &:hover {
      border-color: ${colors.accent.primary};
      outline: none;
      box-shadow: none;
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 80%;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  margin: 0px;
  color: pink;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`;
export const InputKeep = styled.div`
  width: 100%;
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
