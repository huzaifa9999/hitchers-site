import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Imagehead from '../components/Imagehead'
import Contactus from '../components/contact/Contactus'
export default function Contact() {
  return (<>
  <Navbar/>
<Imagehead heading="Contact us" low="make your travel arrangements"/>
<Contactus/>
<Footer/>
  </>

  )
}
