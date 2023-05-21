import styled, {css} from 'styled-components';

const centered = css`
  width: 23%;
  text-align: center;
  align-self: center;
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  min-height: 100px;
  // min-height: 7em;
  border-bottom: 1px solid darkgrey;
  padding: 0.9375rem 0;
  font-size: 0.9rem;
  align-items: center;
  justify-content: space-between;
  // gap: calc(5vh + 5px) calc(5vw + 5px);
`

export const CheckoutItemDetails = styled.div`
  width: 77%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.9375rem;
    
  img {
    width: 100%;
    object-fit: cover;
  }
`
export const Name = styled.span`
  ${centered}
`

export const Quantity = styled.span`
  ${centered}
  display: flex;
  justify-content: space-between;

  .arrow {
    cursor: pointer;
    padding-left: .8rem;
    padding-right: .8rem;
  }

`

export const Price = styled.span`
  ${centered}
`

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
  ${centered}
`
