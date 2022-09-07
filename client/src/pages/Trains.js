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
      <div className='allTrains'>
        <table>
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Train Destination</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train, key) => {
            return (
              <tr key={key}> 
                <td><NavLink to = {`${train.id}`}>{train.number}</NavLink></td>
                <td>{train.arrival}</td>
              </tr>
            )
          })}
          </tbody>
          
        </table>
      </div>
    );
  } else { 
    return <div>Loading...</div>
  }
    
}

export default Trains


