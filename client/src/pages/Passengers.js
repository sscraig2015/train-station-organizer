import React, {useEffect, useState} from 'react'

const Passengers = ( ) => {
  
  const [passengers, setPassengers] = useState([]) 
 
  useEffect(() => {
    fetch('/passengers')
      .then(resp => resp.json())
      .then(data => setPassengers(data))
  }, [])

  return (
        <div className="App">
          <table>
            <tr>
              <th>Name</th>
              
            </tr>
            {passengers.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })}
          </table>
        </div>
      );
}

export default Passengers