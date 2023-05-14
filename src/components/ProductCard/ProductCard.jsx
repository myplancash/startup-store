import {useContext} from 'react';
import Button from '../Button/Button';
import './ProductCard.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {

  const { addItemToCart, calculateTotal } = useContext(CartContext)
  const { name, imageUrl, price, quantity } = product;

  const addProductToCart = () => {
    addItemToCart(product)
    calculateTotal(price, quantity)
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button onClick={addProductToCart} buttonClass='inverted' type='button'>Add to Cart</Button>
    </div>
  )
}

export default ProductCard