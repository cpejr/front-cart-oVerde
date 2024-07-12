import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";
import { Checkbox as AntCheckbox } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow: hidden;
  align-items: center;
  text-align: center;
  padding-bottom: 3rem;
  text-align: justify;
  margin-top: 30px;
  p {
    font-size: 1.5rem;
    width: 75%;
    margin-bottom: 0;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.9rem;
    }
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 20rem;
    @media (max-width: ${breakpoints.mobile}) {
      width: 12rem;
    }
  }
`;

export const StyledCheckBox = styled(AntCheckbox)`
  &.custom-checkbox {
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${colors.background.secondary};
      border-color: ${colors.font.secondary};
    }
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;

  align-items: center;
  gap: 17px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    gap: 5px;
  }
`;
