import React from 'react'
import './imghead.css'
export default function Imagehead(props) {
  return (
     <>
   <div className="img">
    <div className="text">
        <h1>{props.heading}</h1>
        <h2>{props.low}</h2>
        </div>
    </div></>
  )
}
