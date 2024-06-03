import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Title = styled.div`
  color: #eedac5;
  font-size: 30px;
  margin-left: 5%;
  width: 120px;
  border-bottom: 2px solid #eedac5;
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
  gap: 2rem;
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
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    padding-top: 0.3rem;
    color: #eedac5;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
`;

export const FilterTitle = styled.div`
  display: flex;
  color: ${colors.accent};
  padding-bottom: 1rem;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.darkwhite};
  border-radius: 5px;
  justify-content: center;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 10%;
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 40%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    flex-direction: column;
    width: 20%;
  }
`;

export const UniSelect = styled(Dropdown)`
  gap: 1rem;
  .p-dropdown-label {
    color: white;
    width: 100%;
  }
  .p-inputtext {
    color: white;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 30%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 20%;
  }
`;
