import { CartItemContainer, ItemDetails, Quantity, Name} from './CartItem.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Quantity>${price} x {quantity}</Quantity>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem