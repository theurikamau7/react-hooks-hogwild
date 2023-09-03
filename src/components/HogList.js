import React,{useState}from 'react'
import Hog from './Hog'
import Tile from './Tile'

const HogList = ({hogs}) => {

  const[isGreased, setIsGreased]= useState(false)
  const [currentTile, setCurrentTile] = useState('name')


  
  function handleSort(e){
    setCurrentTile(e.target.value)
   
  }

  function handleIsGreased(e) {
    setIsGreased(e.target.checked)
  }

  
  const filterGreased =  hogs
    .filter(hog=>{
      const filtered = isGreased ? hog.greased : hogs
      return filtered
   })

   .sort((a,b)=>{
      if(currentTile==='name'){
        return a.name.localeCompare(b.name)
      }
      if(currentTile==='weight'){
        return a.weight - b.weight
      }
   })
 
  return (
      <div  >
        <Tile 
        sort={handleSort} 
        isGreased={isGreased} 
        handleIsGreased={handleIsGreased}
        /> 
        <div className="ui three stackable cards" >
       {filterGreased.map((hog)=>(
        <Hog
          key={hog.name}
          hog={hog}
          name={hog.name}
          specialty={hog.specialty}
          image={hog.image}
          greased={hog.greased}
          weight={hog.weight}
          heighest={hog["highest medal achieved"]}
        />
      ))}
      </div>

      </div>

  )
}

export default HogList