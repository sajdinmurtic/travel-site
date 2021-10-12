import React from 'react'
import image4 from '../assets/image-4.jpg'
import image5 from '../assets/image-5.jpg'


const Cards = () => {
  return (
    <div className='card'>
      <h1>Explore destinations</h1>
      <div className='row'>
        <div>
          <img src={image4} alt='card-1' />
          <h3>Explore forest</h3>
          <p>
           Explore different destinations 
          </p>
        </div>

        <div>
          <img src={image5} alt='card-2' />
          <h3>Explore mountain</h3>
          <p>
           Explore different destinations
          </p>
        </div>

        
      </div>
    </div>
  )
}

export default Cards