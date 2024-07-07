import styled from "styled-components";
import { breakpoints, colors,fonts } from "../../styles/stylesVariables";
import { MultiSelect } from "primereact/multiselect";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  z-index: 0;
`;
export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 36px;
  margin-left: 3%;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin-left: 8%;
  }
`;
export const SubTitle = styled.h2`
  width: 100%;
  font-size: 36px;
  font-family: ${fonts.Cabin};
  color: ${colors.font.title};
  margin-left:5%;
  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    text-underline-offset: 0.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 26px;
  }
`;
export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;

export const AddArchive = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 14.7%;
  z-index: 1;
  margin-top: -110px;
`;

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
export const MultipleSelect = styled(MultiSelect)`
  background-color: ${colors.background.primary};
  color: ${colors.font.primary};

  .p-placeholder {
    color: ${colors.font.primary};
  }
  .p-multiselect-label {
    width: 215px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
  &:hover {
    border-color: #f19709;
  }
`;