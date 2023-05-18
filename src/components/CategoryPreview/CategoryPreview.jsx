import React from 'react'
import './CategoryPreview.styles.scss'
import ProductCard from '../ProductCard/ProductCard';

const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview-container '>
      <h2 className='title'>
        {title}
      </h2>      
      <div className='preview'>
        {products.filter((_, i) => i < 4).map(product => (    <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default CategoryPreview