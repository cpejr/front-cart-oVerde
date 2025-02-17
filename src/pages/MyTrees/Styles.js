import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Title = styled.div`
  color: ${colors.font.primary};
  font-size: 30px;
  margin-left: 5%;
  width: fit-content;
  border-bottom: 2px solid ${colors.font.primary};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
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
  margin-left: 3%;
  display: flex;
  width: 100%;
  align-items: center;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

export const CertificateText = styled.div`
  color: black;
`;

export const CertificateTitle = styled.h1`
  color: black;
`;
