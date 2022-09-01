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

    function handleSubmit(e){
        e.preventDefault()
        
        let newPassenger
        
        fetch('/passengers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: passenger}),
            
        }).then((resp) => resp.json()).then((data) => newPassenger = data)


        newTicket(newPassenger)
        
       
    }

    function newTicket(passenger){
        console.log(passenger)
        fetch(`${trainId.id}/tickets`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({price: 80, passenger_id: passenger.id}),
            })
    }

    function handleClick(){
        setRevealTicektForm(true)
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
                    <button onClick={handleClick}>New Ticket?</button>
                    {ticketForm ? <NewTicketForm setPassenger={setPassenger} handleSubmit={handleSubmit}/> : null}
                    <h3>Passengers:</h3>
                    <ol>
                        {train.tickets.map((ticket, key) => {
                            return (
                                <li key={key}>{ticket.passenger.name}</li>
                            )
                        })}
                    </ol>
                    
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