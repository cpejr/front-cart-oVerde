import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown } from "primereact/dropdown";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { imageEventNotFound } from "../../assets/index";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 100px;
  gap: 2rem;

  @media (max-width: ${breakpoints.miniTablet}) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    h1 {
      font-size: 2.7rem;
    }
    h2 {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;
export const RotateSearch = styled(SearchOutlined)`
  transform: rotate(90deg);
`;
export const IconWrapper = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 70%;
  }
`;
export const SVGDiv = styled.div`
  display: flex;
  width: 3%;
  padding-left: 1.3%;
  > span {
    > svg {
      font-size: 1.7rem;
      @media (max-width: ${breakpoints.miniTablet}) {
        font-size: 1.5rem;
      }

      @media (max-width: ${breakpoints.miniTablet}) {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 10%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 13%;
  }
`;
export const TrendingEvents = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: auto;
  > h1 {
    font-size: 50px;
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
  width: 90%;
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
    color: ${colors.font.title};
  }
`;
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    padding-top: 0.3rem;
    color: ${colors.font.title};
  }
`;
export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
`;
export const Title = styled.div`
  display: flex;
  color: ${colors.accent};
  padding-bottom: 1rem;
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
    color: ${colors.font.primary};
    width: 100%;
  }
  .p-inputtext {
    color: ${colors.font.primary};
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 30%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 20%;
  }
`;

export const EventNotFound = styled.div`
  background-image: url(${imageEventNotFound});
  background-size: cover;
  width: 500px;
  height: 500px;
  font-size: 2rem;
  text-align: center;
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;
