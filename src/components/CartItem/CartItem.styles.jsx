import styled from 'styled-components'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 40%;
    object-fit: cover;
  }
`

export const Quantity = styled.span`
  font-size: .5rem;
  font-weight: bold;
`
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

`
export const Name = styled.h2`
      font-size: 16px;
`