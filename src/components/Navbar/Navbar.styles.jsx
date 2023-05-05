import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav` 
  height: 70px;
  border: 1px solid #070606;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  
  background: #fefefe;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90px;
  padding: 25px;
  cursor: pointer;
  
  &:first-child {
    align-self:center;    
  }
  
`

export const NavLink = styled(Link)` 
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  align-self: center;
  flex: 1 1 auto;
  /* padding: 10px 15px; */


  &.active {
    color: #070606;
  }
  &:hover {
    color: #070606;
  }
`;
/* 
export const Bars=styled(FaBars)` 
  display: none;
  color: #808080;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`; */

export const NavMenu=styled.div` 
  width: 50%;
  height: 100%;;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
   
  }
`;

export const NavBtn = styled.nav` 
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    
  }

`;

export const NavBtnLink=styled(Link)` 
  border-radius: 4px;
  color: #3992ff;
  font-weight: 500;
  align-self: center;
  background: #808080;
  color: #070505;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  /* transition: all 0.2s ease-in-out; */
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;

   font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;

  &:active {
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
    transform: translateY(1px);
  }

  &:hover {
    /* transition: all 0.2s ease-in-out; */
    background: #fff;
    color: #070606;
    border: 1px solid #070606;
  }

`;