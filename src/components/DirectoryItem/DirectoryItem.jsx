import React from 'react'
import { DirectoryItemContainer, BackgroundImage, Body} from './DirectoryItem.styles.jsx';

const DirectoryItem = ({ category }) => {
  const {title, imageUrl} = category

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>SHOW NOW</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;