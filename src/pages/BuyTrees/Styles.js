import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/stylesVariables';
import { Dropdown } from 'primereact/dropdown';

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
    width: 250px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
    width: 230px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    width: 220px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
    width: 210px;
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
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
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
  &:hover {
    border-color: ${colors.accent.primary};
    outline: none;
    box-shadow: none;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
