import React from 'react'

const Tile = ({handleIsGreased, isGreased,sort}) => {
 
    

  return (
    <div className='tile-container'>
      <p>Sort by</p>
      <select onChange={sort}>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
      </select>

      <input 
       onChange={handleIsGreased}
       type='checkbox' 
       checked={isGreased}
       />
      <label>Greased Pigs Only?</label>
    </div>
  )
}

export default Tile