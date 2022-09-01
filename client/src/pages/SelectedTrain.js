import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewTicketForm from '../components/NewTicketForm'

const SelectedTrain = () => {
  
    const trainId = useParams()
    const [train, setTrain] = useState([])
    const [trainFound, setTrainFound] = useState(false)
    const [ticketForm, setRevealTicektForm] = useState(false)
    const [passenger, setPassenger] = useState('')
    
    console.log(trainId)
    
    
    useEffect(() => {
        fetch(`${trainId.id}`)
            .then((resp) => resp.json())
            .then((data) => setTrain(data))
            .then((r) => setTrainFound(true))
    }, [])

    function handleClick(){
        

        fetch('/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({price: 80, train_id: trainId.id})
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
                    <button onClick={handleClick}>Buy Ticket</button>
       
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