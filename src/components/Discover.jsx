import React, {useState} from 'react'
import { FaLocationArrow, FaSearch, FaStar} from 'react-icons/fa'
import images from "../images/images.webp"
import "./Discover.css"
import {useDispatch} from "react-redux"
import { addToFavorites } from '../features/favoriteSlice'


export default function Discover() {
  const [filter, setFilter] = useState(false)
  
  const foodPlace = [
    {
    id: 1,
    name: "The Food Place",
    location: "Kampala",
    reviews: 5,
    img: images,
    foodQty: 1
  },
{
  id: 2,
  name: "The Resturant",
  location: "Kireka",
  reviews: 3,
  img: images,
  foodQty: 1
}]
  return (
    <div className='discover'>
      <h2 className='heading'>Discover amazing places</h2>
      <h3 className='filter' onClick={()=>setFilter(!filter)}>filter</h3>
      {filter &&
      <div className='filter-media'>
        <div className='search'>
            <input type="text" onChange={(e)=>e.target.value} placeholder="Search..."/>
            <button><FaSearch/></button>
        </div>
        <div className='filter-con'>
          <h6>By Location</h6>
          <input type="text" onChange={(e)=>e.target.value}/>
        </div>
        <div className='filter-con'>
          <h6>By Reviews</h6>
          <input type="text" onChange={(e)=>e.target.value}/>
        </div>
        <button className='filter-btn'>Filter</button>
      </div>}
      <div>
        {
          foodPlace.map((item)=> (<Card key={item.id} item={item}/>))
        }
      </div>
    </div>
  )
}


const Card = ({item}) => {
  const dispatch = useDispatch()
  return (
  <div className='card'>
    <div className='inner-card' onClick={()=> dispatch(addToFavorites(item))}>
      <img src={item.img} alt=''/>
    </div>
    <div className='labels'>
      <div className='inner-labels'>
        <h4>{item.name}</h4>
        <h5><FaLocationArrow/>{item.location} </h5>
        <h5><FaStar />{item.reviews}</h5>
      </div>
      <div>
        <button>Get Menu</button>
      </div>
    </div>
  </div>
  )
}