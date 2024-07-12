import styled, { keyframes } from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 1s linear infinite;
  font-size: 25px;
  color: #333;
  margin-left: 10px;
`;

export const Title = styled.div`
  color: ${colors.font.primary};
  font-size: 30px;
  margin-left: 5%;
  width: fit-content;
  border-bottom: 2px solid ${colors.font.primary};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
    width: 110px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
    width: 100px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    width: 95px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
    width: 90px;
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Filter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-evenly;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 70%;
  @media (max-width: ${breakpoints.mobile}) {
    width: 40%;
  }
`;

export const UniSelect = styled(Dropdown)`
  gap: 1rem;
  color: ${colors.font.primary};
  .p-dropdown-label {
    color: white;
    width: 100%;
  }
  .p-inputtext {
    color: ${colors.font.primary};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
