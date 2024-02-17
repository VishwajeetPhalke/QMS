import React from 'react'
import './pages.css'; 

export default function clientscard(props) {
  return (
    <div className='mycard'>
      <img src={props.image} alt={`Mycard No. ${props.cardno}`} />
      <p>Mycard No. {props.cardno}</p>
    </div>
  )
}
