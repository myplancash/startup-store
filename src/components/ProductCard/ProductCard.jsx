import {useContext} from 'react';
import Button, {BUTTON_CLASSES} from '../Button/Button';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardContainer, Footer } from './ProductCard.styles.jsx';

const ProductCard = ({ product, ...otherProps }) => {

  const { addItemToCart } = useContext(CartContext)
  const { name, imageUrl, price } = product;


  const addProductToCart = () => {
    addItemToCart(product)

  }
    
    return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </Footer>
      <Button onClick={addProductToCart} buttonClass={BUTTON_CLASSES.inverted}>Add to Cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard