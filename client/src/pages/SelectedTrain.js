import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SelectedTrain = () => {
  
    const trainId = useParams()
    const [train, setTrain] = useState([])
    const [trainFound, setTrainFound] = useState(false)
    
    console.log(trainId)
    
    useEffect(() => {
        fetch(`${trainId.id}`)
            .then((resp) => resp.json())
            .then((data) => setTrain(data))
            .then((r) => setTrainFound(true))
    }, [])

    function handleClick(){
        fetch(`${trainId.id}/tickets`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({price: 80, passenger_id: 1}),
            })
    }

    if (trainFound) {
        return (
            <div className='selectedTrain'>
                <div>  
                    <h2>Train: {train.number}</h2>
                    <ul>
                        <li>Arrival:   {train.arrival}</li>
                        <li>Departure:   {train.departure}</li>
                    </ul>
                    <h3>Passengers:</h3>
                    <or>
                        {train.tickets.map((ticket, key) => {
                            return (
                                <li key={key}>{ticket.passenger.name}</li>
                            )
                        })}
                    </or>
                    <button onClick={handleClick}>Create Ticket</button>
                </div> 
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}

export default SelectedTrain 