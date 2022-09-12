import React from 'react'
import {useForm} from "react-hook-form"

export default function Reservation() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    location: "",
    menu: "",
    offer: ""
  })
  // const [name, setName] = useState("")
  // const [location, setLocation] = useState("")
  // const [menu, setMenu] = useState("")
  // const [offer, setOffer] = useState("")
  const handleChange = (e) => {
    setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='add'>
      <h3 className='fav-heading'>Add Food Place</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" placeholder='image' name='image' onChange={handleChange} value={formData.image} />
        <input type="text" placeholder='name' name='name'  onChange={handleChange} value={formData.name}/>
        <input type="text" placeholder='location' name='location' onChange={handleChange} value={formData.location}/>
        <input type="file" placeholder='menu' name='menu' onChange={handleChange} value={formData.menu}/>
        <input type="text" placeholder='offer' name='offer' onChange={handleChange} value={formData.offer}/>
        <button>Post</button>
      </form>
    </div>
  )
}
