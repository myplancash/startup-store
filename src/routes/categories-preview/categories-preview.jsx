import { useSelector } from 'react-redux';
import {Fragment} from 'react'
/* import { CategoriesContext } from '../../contexts/categories.context' */
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/categories.selectors'

import './categories-preview.styles.scss';


const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectCategoriesMap)

  return (  
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview 
            key={title} 
            products={products} 
            title={title}
          />
        })}
    </Fragment>
  )
}

export default CategoriesPreview;