import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Select } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const TypeSelect = styled(Select)`
  width: 114px;
  .ant-select-selector {
    background-color: ${colors.font.primary};
    color: ${colors.font.primary} !important;
    border-radius: 4px;
    border: 2px solid ${colors.background.primary};
    height: 4vh;
    text-align: center;
    justify-content: center;
  }
  .ant-select-selection-item {
    color: ${colors.font.primary} !important;
  }
  .ant-select-arrow {
    display: none;
  }
  .ant-select-dropdown {
    background-color: ${colors.background.secondary};
    color: ${colors.font.primary};
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 65%;
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;
