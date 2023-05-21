import styled from 'styled-components';
import { BaseButton, GoogleButton, InvertedButton } from '../Button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  border: 1px solid #070606;
  background-color: #fefefe;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    margin-top: 'auto';
  }
`

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;
`