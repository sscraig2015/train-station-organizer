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

    function handleClick(e){
        e.preventDefault(e)
        const name = e.target.passName.value
        

        fetch('/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({price: 80, train_id: trainId.id, passenger_name: name })
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
                    <form onSubmit={handleClick}>
                    Name: <input type='text' name='passName'/>
                    <button type='Submit'>Buy Ticket</button>   
                    </form>
                    
       
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