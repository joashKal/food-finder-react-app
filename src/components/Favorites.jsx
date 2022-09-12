import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaLocationArrow, FaStar, FaTimes} from 'react-icons/fa'
import { removeFromFavorites } from '../features/favoriteSlice'

export default function Favorites() {
  const items = useSelector(state => state.favoriteSlice.favorites)
  
  return (
    <div className='favorites-container'>
      <h3 className='fav-heading'>Favorites</h3>
      <div>
        {
          items.map(item=> (<Card key={item.id} item={item}/>))
        }
      </div>
    </div>
  )
}

const Card = ({item}) => {
  const dispatch = useDispatch()
  return (
  <div className='card'>
    <div className='inner-card' >

      
     <span><img src={item.img} alt=''/><FaTimes style={{position: "relative",cursor: "pointer" ,top: "-280px", left: "270px", backgroundColor: "white", fontSize: "1rem", color: "#cc1f56"}} onClick={()=>(dispatch(removeFromFavorites(item)))}/></span> 
      
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
