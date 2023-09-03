import React from 'react'

const Hog = ({name, image,heighest, weight, specialty,greased}) => {

  return (
    
      <div className=" parent-container ui card eight wide column" >
        <div className='hog-img-container'>
          <img className='hog-img' 
            src={image} alt={`${image.name}.jpg`} 
            />
        </div>
        <div className='details-container'>
          <h3>{name}</h3>
          <p>{specialty}</p>
          <p>{weight}</p>
          <p>{heighest}</p> 
          <p>{greased}</p>
        </div>
        </div>
  )
}

export default Hog