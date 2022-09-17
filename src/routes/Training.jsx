import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Imagehead from '../components/Imagehead'
import Trainingtext from '../components/training/Trainingtext'
export default function Training() {
  return (
   <>
<Navbar/>
<Imagehead heading='Training' low='pre hike training'/>
<Trainingtext/>
<Footer/>
   </>

  )
}
