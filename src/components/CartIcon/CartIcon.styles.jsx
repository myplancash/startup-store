import styled from 'styled-components'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';



export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: opacity 0.3s ease, transform 0.3s ease; 
`

export const ShoppingIcon = styled(ShoppingLogo)`
  width: 24px;
  height: 24px;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`