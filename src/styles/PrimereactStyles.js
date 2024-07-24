import { createGlobalStyle } from "styled-components";
import { colors, breakpoints } from "../styles/stylesVariables";

export const PrimereactStyles = createGlobalStyle`
  .p-datatable .p-datatable-tbody > tr > td {
    background-color: ${colors.background.primary}; 
    color: ${colors.font.primary};
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
    background-color: ${colors.background.white};
    color:${colors.font.secondary};
    text-align: center;
    &:hover {
      background-color: ${colors.background.primary};
      color:${colors.font.primary};

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
    background-color: #fff;
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

  .p-inputtext{
    color: ${colors.font.primary};
    
  }
  .p-inputtext::placeholder {
    color: ${colors.font.primary};
  }
  .p-datepicker {
    background-color: ${colors.background.primary};
    color: white;
    ::placeholder {
    font-size: 1rem;
    font-weight: 300;
    color: ${colors.font.primary};
  }
  }
  .p-calendar-w-btn	{
    background-color: ${colors.background.primary};
    color: white;
  }
  .p-datepicker-header{
    background-color: ${colors.background.primary};
    
  }

  .p-datepicker-year{
    color: ${colors.font.primary};
  } 
  .p-datepicker-month{
    color: ${colors.font.primary};
  }
  .p-button-secondary{
    color: ${colors.font.primary};
  }

  .data-pc-section{
    >span{
      >td{
        color: green;
      }
    }
  }

  .p-menubar{
    display: flex;
    justify-content: space-around;
    background-color: ${colors.background.secondary};
    border: none;
    @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
  }
  }
  .p-menuitem{
    background-color: ${colors.background.secondary};
    &:hover{
      background-color: ${colors.background.secondary};
    }
  }
  .p-menuitem-link{
    background-color: ${colors.background.secondary};
    &:hover{
      background-color: ${colors.background.secondary};
    }
  
  }
  .p-menuitem-text{
    color: ${colors.accent.primary};
    
 
  }
  .p-submenu-icon{
    color: ${colors.accent.primary};
  }
  .p-submenu-list{
    background-color: ${colors.background.secondary};
  }
  .p-submenu-list{
    cursor: pointer;
  }

  .p-multiselect-label-container{
    display: flex;
    align-items: center;  
  }
  

  .p-dropdown{
    transition: none;
    outline: none;
    box-shadow: none;
  }

  .p-paginator .p-paginator-first, .p-paginator .p-paginator-prev, .p-paginator .p-paginator-next, .p-paginator .p-paginator-last{
    min-width: 0;
    width: 45px;
    @media (max-width: 320px) {
      width: 25px;
    }
    @media (max-width: 240px) {
      width: 15px;
    }
  }
  
  .p-datatable .p-datatable-tbody>tr>td{
    padding: 15px;
  }

  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight{
    color: #4b5563;
  }
`;
