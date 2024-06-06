import styled from "styled-components";
//import { Button } from "antd";
import { Modal } from "antd";
import { colors } from "../../../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modals.background};
  width: 100%;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  text-align: center;
  margin: 1.4rem;
  color: ${colors.font.secondary};
  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.modals.background};
    padding: 1rem;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
    max-height: 60vh;
    overflow-y: auto;
    position: relative;
    top: 50%;
    transform: translateY(-20%);
  }
`;

export const AddArchive = styled.div`
  display: flex;
  color: ${colors.font.secondary};
  align-items: center;
  gap: 1rem;
  gap: 1rem;
  margin-left: 14.7%;
  z-index: 1;
  margin-top: -110px;
`;
