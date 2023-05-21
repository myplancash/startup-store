import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import {CategoryPreviewContainer, Title, Preview} from './CategoryPreview.styles.jsx'


const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer to={title}>
      <h1><Title to={title}>{title.toUpperCase()}</Title></h1>      
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map(product => (<ProductCard key={product.id} product={product}/>
        ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview