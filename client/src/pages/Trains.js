import React, { useEffect, useState } from 'react'

function Trains() {
  
  const [trains, setTrains] = useState([])
  
  useEffect(() => {
    fetch('/trains')
      .then(resp => resp.json())
      .then(data => setTrains(data))
  }, [])

  
  return (
    <div>
      <ul>
        { trains.map( (train) => 
        <li key={train.id}>{train.number}</li>)}
      </ul>
    </div>
  )
}

export default Trains
