import React, {useEffect, useState} from 'react'


function Trains() {
  const [trains, setTrains] = useState([])
  
  useEffect(() => {
    fetch('/trains')
      .then(resp => resp.json())
      .then(data => setTrains(data))
  }, [])
 
    return (
      <div className="App">
        <table>
          <tr>
            <th>Number</th>
            <th>Section</th>
          </tr>
          {trains.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.number}</td>
                <td>{val.section}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
}

export default Trains



