import React, {useState, useEffect} from 'react'
import { Route, NavLink } from 'react-router-dom'
import SelectedTrain from './SelectedTrain'


function Trains() {
  
  
  const [trains, setTrains] = useState([])

  useEffect(() => {
    
    fetch('/trains')
      .then(resp => resp.json())
      .then(data => setTrains(data))
  }, [])
  

  
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
}

export default Trains


