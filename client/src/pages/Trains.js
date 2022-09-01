import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'



function Trains() {
  
  
  const [trains, setTrains] = useState(null)

  useEffect(() => {
    
    fetch('/trains')
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => setTrains(data))
        } else {
          console.log(resp.ok)
        }
      })
      
  }, [])
  

  if (trains) {
    console.log(trains)
    return (
      <div className="App">
        <ul>
          {trains.map((train, key) => {
            return (
              <li> <NavLink key={key} to = {`${train.id}`}>{train.number}</NavLink> </li>
            )
          })}
        </ul>
      </div>
    );
  } else { 
    return <div>Loading...</div>
  }
    
}

export default Trains


