import { createGlobalStyle } from "styled-components";
import { colors } from "../styles/stylesVariables";

export const PrimereactStyles = createGlobalStyle`
  .p-datatable .p-datatable-tbody > tr > td {
    background-color: ${colors.background.primary}; 
    color: white;
    border-bottom: 0.5px solid ${colors.font.title};
    padding: 1rem 0;
    font-size: 1rem;
  }  
  .ant-menu-light.ant-menu-submenu-popup>.ant-menu{
    background-color: ${colors.background.menu};
  }
  .ant-menu-light>.ant-menu .ant-menu-item-selected{
    background-color: ${colors.background.menu};
  }
  .ant-menu-light>.ant-menu .ant-menu-item-selected{
    color:${colors.font.primary};
  }

  .p-dropdown-item {
    background-color: ${colors.background.primary};
    color:${colors.font.primary};
    text-align: center;
    &:hover {
      background-color: ${colors.background.hover};
    }
  }

  .p-datatable .p-datatable-thead > tr > th {
    border-bottom: 0.5px solid ${colors.font.title};
    background-color: ${colors.background.primary};
    color: ${colors.font.primary}
  }

  div > div.p-paginator-bottom.p-paginator.p-component {
    background-color: ${colors.background.primary};
  }

  button.p-paginator-element {
    background-color: ${colors.background.primary};

    &:hover {
      background-color: ${colors.background.hover};
    }

  }

  .p-dropdown-items-wrapper, .p-dropdown-panel {
    background-color: ${colors.background.primary};
    border-radius: 10px;
  }

  .p-dropdown-items-wrapper {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .p-dropdown {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.background.primary};
    border: 0.5px solid ${colors.font.primary};
    color: ${colors.font.primary};
  }

  .p-dropdown > span {
    color: ${colors.font.primary};
  }

  .p-checkbox-box {
    background-color: ${colors.background.primary};
    width: 20px;
    height: 20px;
    border: 2px solid ${colors.font.title};
    border-radius: 5px;
    justify-content: center;
    &:hover &:active{
      border: 2px solid ${colors.accent.primary};    
    }
  }

`;
