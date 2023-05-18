import {useContext, Fragment} from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (  
    <>
    { 
      Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
          {categoriesMap[title].map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
          </div>
        </Fragment>
      ))
    }
    </>
  )
}

export default Shop;