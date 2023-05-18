import {useContext} from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import './categories-preview.styles.scss';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (  
    <div className='category-preview-container'>
    { 
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview 
          key={title} 
          products={products} 
          title={title}
        />
      })
    }
    </div>
  )
}

export default CategoriesPreview;