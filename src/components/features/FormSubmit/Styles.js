import styled from "styled-components";
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
  .p-multiselect .p-multiselect-item .p-checkbox .p-checkbox-box {
  background-color: #yourColor !important; /* Cor de fundo do checkbox */
  border: 1px solid #yourBorderColor !important; /* Cor da borda do checkbox */
}

.p-multiselect .p-multiselect-item .p-checkbox .p-checkbox-box.p-highlight {
  background-color: #yourCheckedColor !important; /* Cor de fundo quando o checkbox está marcado */
  border-color: #yourCheckedBorderColor !important; /* Cor da borda quando o checkbox está marcado */
}

.p-multiselect .p-multiselect-item .p-checkbox .p-checkbox-icon {
  color: #yourIconColor !important; /* Cor do ícone dentro do checkbox */
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
