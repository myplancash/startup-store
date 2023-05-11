import React from 'react';
import Button from '../Button/Button';
import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {

  const { name, imageUrl, price } = product
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonClass='inverted' type='button'>Add to Cart</Button>
    </div>
  )
}

export default ProductCard