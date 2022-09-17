import React from 'react'
import moonmount from '../../assests/training.jpg'
import { Link } from 'react-router-dom'
import './training.css'
export default function Trainingtext() {
  return (
    <> <div className="training">
      <div className="content2">
        <h1 className="heading"> Training</h1>
        <p className="para">
experience real world simulation and get yourself comfortable with the rest of the trip
        </p>
        <Link to="/contact" className="redirect2">
              Book
            </Link>
      </div>

      <div className="image">
        <img src={moonmount} alt='wf' className='img1'/>
      </div>
      </div>
    </>
  )
}
