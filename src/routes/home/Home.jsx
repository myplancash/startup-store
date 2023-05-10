import React from 'react'
import { Outlet } from 'react-router-dom'
import Categories from '../../components/Categories/Categories';

function Home() {

  const categories = [
  {
    "id": 1,
    "title": "bags",
    "imageUrl": "https://i.ibb.co/jk87Zpw/bags.jpg"
  },
  {
    "id": 2,
    "title": "heels",
    "imageUrl": "https://i.ibb.co/LJFMxpq/heels.jpg",
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/XZHCrHV/sneakers.jpg"
  },
  {
    "id": 4,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/ZG9Gw37/mens.jpg"
  },
  {
    "id": 5,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/JjJ3331/womens.jpg"
  }
]

  return (
    <div>
      <Outlet />
      <Categories categories={categories}/>
    </div>
  ); 
}

export default Home;
