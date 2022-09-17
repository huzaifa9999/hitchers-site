import React from 'react'
import {Link} from 'react-router-dom'
import './Bgvid.css'
import bgvideo from '../../assests/vid2.mp4'
export default function Bgvid() {
  return (
<>
<div className='main'>

    <video autoPlay loop  muted id='video'>

<source src={bgvideo} type='video/mp4' />
    </video>

    <div className='content'>
        <h1> Mountain. Travel.</h1>
        <p>
            Come hike with us
        </p>
        <div className='button'>
           
            <Link to='/training' className='btn1'>Training</Link> 
            <Link to='/contact' className='btn2'>Contact</Link> 
        </div>
    </div>
</div>
</>
  )
}
