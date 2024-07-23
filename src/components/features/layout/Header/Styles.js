import styled from 'styled-components';
import { Menu, Modal } from 'antd';
import { breakpoints, colors, fonts } from '../../../../styles/stylesVariables';
import { Menubar } from 'primereact/menubar';

export const Container = styled.div`
  height: 7rem;
  display: flex;
  background-color: ${colors.background.secondary};
  align-items: center;
  justify-content: space-evenly;
  padding: 0 3rem;

  @media (max-width: ${breakpoints.smallTablet}) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  width: 100px;
  display: flex;
  cursor: pointer;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 15px;
  padding-right: 0;
  border-left: 2px solid white;
  @media (max-width: ${breakpoints.smallTablet}) {
    border-left: 0;
  }
`;

export const SocialMedias = styled.div`
  margin-left: 5px;
  padding-left: 15px;
  border-left: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export const SocialImg = styled.a`
  display: flex;
  justify-content: center; /* Alinha horizontalmente ao centro */
  align-items: center;
`;

export const Hamburguer = styled(Menu)`
  width: 0rem;
  border-bottom: none;
  background-color: ${colors.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}) {
    width: 8rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 6rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 4rem;
  }
`;

export const LoadingStyles = styled.div`
  display: 'block';
  font-size: 24px;
`;

export const LoginSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    min-width: 0;
  }
`;

export const ConteinerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    min-width: 0;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 45px;
  border: 1px solid;
  border-radius: 10px;
  color: ${colors.accent.primary};
  background-color: ${colors.background.secondary};
  font-family: ${fonts.Cabin};
  font-weight: 400;
  word-wrap: break-word;
  font-size: 1rem;
  img {
    width: 20%;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 10rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 10rem;
    height: 40px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.background.primary};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;
export const PrimeHeader = styled(Menubar)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 700;
  align-self: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    :hover {
      text-decoration: underline;
      text-decoration-color: white;
      text-decoration-thickness: 0.2rem;
    }
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  @media (max-width: ${breakpoints.smallTablet}) {
    padding-left: 1.4rem;
    svg {
      color: white;
    }
    p {
      text-align: center;
      color: white;
    }
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 200;
  margin-top: 2rem;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.collapse ? 'auto' : '0rem')};
  overflow-y: hidden;
  font-weight: 700;
  background-color: white;
  border-radius: 0.5rem;
  gap: 0.3rem;
  button {
    border: none;
    background-color: white;
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
    p {
      font-weight: 700;
      :hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 0.2rem;
      }
    }
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: row;
    border: none;
    width: auto;
    font-weight: 600;
    height: auto;
    display: ${(props) => (props.collapse ? 'flex' : 'none')};
    transition: display 500ms ease-in-out;
    margin-top: 0;
    left: 0;
    right: 0;
    text-align: center;
    justify-content: center;
    button {
      font-size: 1.5rem;
      color: white;
      font-weight: 600;
      p {
        font-weight: 700;
        :hover {
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: white;
          text-decoration-thickness: 0.2rem;
        }
      }
    }
  }
`;
