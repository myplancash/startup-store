import React from 'react'
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import { DirectoryContainer } from './Directory.styles.jsx';


const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/H7c3b1h/hats.jpg",
    "route": "shop/hats"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/xYtvtfN/jackets.jpg",
    "route": "shop/jackets",
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/XZHCrHV/sneakers.jpg",
    "route": "shop/sneakers"
  },
  {
    "id": 4,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/ZG9Gw37/mens.jpg",
    "route": "shop/mens"
  },
  {
    "id": 5,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/JjJ3331/womens.jpg",
    "route": "shop/womens"
  }
]


const Directory = () => {
  return (
    <DirectoryContainer>
     {categories.map((category) => (
      <DirectoryItem key={category.id} category={category}/>
     ))}
    </DirectoryContainer>
  )
}

export default Directory