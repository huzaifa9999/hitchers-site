import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import  './Navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
export default function Navbar() {
    const [click,setclick]= useState(false)
    const Click=()=>setclick(!click);


  return (
    <div className='head'>
    <Link to='/' ><h1>HITCHERS </h1> </Link>
<ul className={click?'nav-menu active':'nav-menu'}>
<li>
<Link to='/' >Home </Link>
</li>
<li>
<Link to='/pricing'>Pricing </Link>
</li>
<li>
<Link to='/training' >Training </Link>
</li>
<li>
<Link to='/contact' >Contact  </Link>
</li>
</ul>

<div className='hamburger' onClick={Click}>
   {click? (<FaTimes size={25} style={{color: 'white'}} />) :(<FaBars  size={25} style={{color: 'white'}} />)}

</div>
        
    </div>
  )
}
 