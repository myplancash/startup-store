import {useNavigate} from 'react-router-dom'
import { DirectoryItemContainer, BackgroundImage, Body} from './DirectoryItem.styles.jsx';


const DirectoryItem = ({ category }) => {
  const {title, imageUrl, route} = category;
  const navigate = useNavigate();
  
  const navigateHandler = () => {
    navigate(route)
  }
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>SHOW NOW</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;